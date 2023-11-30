<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRoute } from 'vue-router';
import { useDB } from '../stores/db';
import Answer from './Answer.vue';
import Result from './Result.vue';

let code = useRoute().query.code
const content = await useDB().getFromCode(code)

let test = reactive(content.test)

// Добавляем тех переменные
for (let question of test.questions) {
	question.entered = false
	
	for (let answer of question.answers) {
		answer.selected = false
	}
}

let current_step = ref(1)
let current_question = computed(() => test.questions[current_step.value-1])

let steps = computed(() => test.questions.length)
let done = computed(() => current_step.value > steps.value)

let right_entered_amount = ref(0)
let entered_amount = ref(0)


/********** Methods **********/

function answerQuestion() {
	test.questions[current_step.value-1].entered = true
}

function increaseStep() {
	if (current_step.value > steps) return
	current_step.value++
}

function back() {
	if (current_step.value === 1) return
	current_step.value--
}

function select(index) {
	// Если radio и что-то введено, значит очищаем что введено
	if (current_question.value.type === 'once' && current_question.value.answers.some(item => item.selected) && !current_question.value.entered)
		test.questions[current_step.value-1].answers.forEach(answer => answer.selected = false)

	if (current_question.value.entered)
		return

	let answer = test.questions[current_step.value-1].answers[index]
	answer.selected = !answer.selected
}

// Обновляем количество введенных и правильно введенных
function compareRightAnswers(questions) {
	right_entered_amount.value = 0
	entered_amount.value = 0

	// Считаем количество введённых или правильных ответов
	questions.forEach(question => {
		entered_amount.value += question.answers.filter(answer => answer.selected || answer.right).length
	})

	// Считаем количество правильно введенных ответов
	questions.forEach(question => {
		right_entered_amount.value += question.answers.filter(answer => answer.selected && answer.right).length
	})
}
watch(test.questions, questions => compareRightAnswers(questions))


let timer = ref('00:00')
let seconds = 0
let minutes = 0

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  timer.value = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
let interval = setInterval(updateTime, 1000)

watch(done, (value) => {
  if (value)
	  clearInterval(interval)
})
</script>

<template>
  <div class="container">
		<div class="w-100 d-flex flex-column">
			<div class="w-100 font-weight-light pt-4 pr-8 pb-4 pl-8 rounded-lg text-center "
				style="color:black; background: white;">
				{{ content.theme }}
			</div>
	
			<div 
				v-if="!done" 
				class="w-100 pa-4 d-flex flex-row align-center"
			>
				<div 
					class="ml-3 text-h6"
				>
					{{ current_step }}. {{ current_question.question }}
				</div>
			</div>

			<div v-else class="pa-4 text-green-darken-4">
				Вы завершили тест
			</div>
		</div>

		<v-fade-transition leave-absolute hide-on-leave>
			<div 
				v-if="!done"
				class="h-100 mt-4 pb-4" 
				style="width: 85%;"	
			>
				<v-row 
					class="flex-column"
					style="margin: auto;"
				>
					<v-fade-transition group>
						<v-col
							v-for="(answer, index) in current_question.answers"
							:key="index"
						>
							<Answer 
								@click="select(index)"
								:answer="answer"
								:entered="current_question.entered"
							/>
						</v-col>
					</v-fade-transition>
				</v-row>
			</div>
		</v-fade-transition>

		<v-fade-transition leave-absolute hide-on-leave>
			<Result 
				v-if="done"
				:right="right_entered_amount"
				:answersAmount="entered_amount"
				:time="timer"
			/>
		</v-fade-transition>

		<v-spacer />

		<div 
			class="w-100 pa-4 d-flex flex-row justify-center align-center flex-wrap" 
			style="background: #456DB1; position: sticky; bottom: 8px; column-gap: 30px; row-gap: 8px;"
		>
			<div 
				class="text-white"
				style="font-size: 20px; font-weight: 500;"
			>
				{{ timer }}
			</div>

			<v-btn
				v-if="current_step > 1"
				@click="back()"
				:ripple="false"
			>
				На шаг назад
			</v-btn>

			<v-btn 
				v-if="!done && !current_question.entered"
				@click="answerQuestion()"
				:disabled="current_question.answers.every(item => !item.selected)"
				:ripple="false"
			>
				Ответить
			</v-btn>

			<v-btn
				v-if="current_question && current_question.entered"
				@click="increaseStep()"
				:ripple="false"
			>
				Дальше
			</v-btn>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	background-attachment: fixed;
	background-color: rgba(241,242,242,.5);
	// background-image: linear-gradient(#fafafa 0,#fafafa 130px,rgba(68,28,80,.1) 160px,#fff 100%);
	// box-shadow: 0 0 0.11rem 0 rgb(0 0 0 / 30%);

	// position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px 20px 20px 20px;
	margin: 20px auto;
	max-width: 900px;
	min-height: calc(100vh - 40px);
}
</style>

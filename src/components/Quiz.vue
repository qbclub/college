<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { useRoute } from 'vue-router';
import { useDB } from '../stores/db';
import Answer from './Answer.vue';
import Result from './Result.vue';

let code = useRoute().query.code
const content = await useDB().getFromCode(code)

let test = reactive(content.quiz)


// Добавляем тех переменные
for (let question of test.questions) {
	question.entered = false

	for (let answer of question.answers) {
		answer.selected = false
	}
}

let current_step = ref(1)
let current_question = computed(() => test.questions[current_step.value - 1])
let imgUrl = computed(() => { return new URL(current_question.value.image, import.meta.url) })

let steps = computed(() => test.questions.length)
let done = computed(() => current_step.value > steps.value)

let right_entered_amount = ref(0)
let entered_amount = ref(0)


/********** Methods **********/

function answerQuestion() {
	test.questions[current_step.value - 1].entered = true
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
	if (current_question.value.entered)
		return

	test.questions[current_step.value - 1].answers.forEach(answer => answer.selected = false)
	let answer = test.questions[current_step.value - 1].answers[index]
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
			<div class="w-100 font-weight-light pt-4 pr-8 pb-4 pl-8 rounded-lg"
				style="color: #483a53; background: #e6dcee;">
				{{ content.theme }}
			</div>

			<div v-if="!done" class="w-100 pa-4 d-flex flex-row align-center">
				<div class="text-h3" style="color: #5a335a;">?</div>

				<div class="ml-3 font-weight-thin">
					{{ current_step }}. {{ current_question.question }}
				</div>
			</div>

			<div v-else class="pa-4 text-green-darken-4">
				Вы завершили тест
			</div>
		</div>

		<v-fade-transition leave-absolute hide-on-leave>

			<v-row v-if="!done" class="h-100 mt-4 pb-4" style="width: 85%;">
				<v-col cols="12" class="d-flex justify-center">
					<v-fade-transition leave-absolute>

						<img :src="imgUrl" style="max-height: 40vh; max-width: 90%;" />
					</v-fade-transition>
				</v-col>

				<v-col>
					<v-row>
						<v-fade-transition group>
							<v-col v-for="(answer, index) in current_question.answers" :key="index" cols="12" lg="6">
								<Answer @click="select(index)" :answer="answer" :entered="current_question.entered"  class="h-100"/>
							</v-col>
						</v-fade-transition>
					</v-row>
				</v-col>
			</v-row>

		</v-fade-transition>

		<v-fade-transition leave-absolute hide-on-leave>
			<Result v-if="done" :right="right_entered_amount" :answersAmount="entered_amount" :time="timer" />
		</v-fade-transition>

		<v-spacer />

		<div class="w-100 pa-4 d-flex flex-row justify-center align-center flex-wrap"
			style="background: #5a335a; position: sticky; bottom: 8px; column-gap: 30px; row-gap: 8px;">
			<div class="text-white" style="font-size: 20px; font-weight: 500;">
				{{ timer }}
			</div>

			<v-btn v-if="current_step > 1" @click="back()" :ripple="false">
				На шаг назад
			</v-btn>

			<v-btn v-if="!done && !current_question.entered" @click="answerQuestion()"
				:disabled="current_question.answers.every(item => !item.selected)" :ripple="false">
				Ответить
			</v-btn>

			<v-btn v-if="current_question && current_question.entered" @click="increaseStep()" :ripple="false">
				Дальше
			</v-btn>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	background-attachment: fixed;
	background-color: rgba(241, 242, 242, .5);
	// background-image: linear-gradient(#fafafa 0, #fafafa 130px, rgba(68, 28, 80, .1) 160px, #fff 100%);
	// box-shadow: 0 0 0.11rem 0 rgb(0 0 0 / 30%);

	// position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px 40px 20px 20px;
	margin: 20px auto;
	max-width: 900px;
	min-height: calc(100vh - 40px);
}
</style>

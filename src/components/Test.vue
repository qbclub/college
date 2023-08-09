<script setup>
import { ref, reactive, computed } from 'vue'

let test = reactive({
	title: 'Общие сведения о переработке зерна на мукомольном и крупяном предприятиях',
	questions: [
		{
			question: 'Выберите верные утверждения',
			type: 'multi',
			entered: false,
			answers: [
				{
					text: 'Комбикормовая промышленность появилась в СССР в 1970-е годы.',
					right: false,
					selected: false,
				},
				{
					text: 'В 1950—1960-е годы контроль и управление отдельными технологическими операциями были автоматизированы. ',
					right: true,
					selected: false
				},
				{
					text: 'В 1962 г. была разработана первая типовая схема подготовки и размола зерна.',
					right: false,
					selected: false
				},
				{
					text: 'Принципы организации и ведения технологического процесса производства муки были заложены в конце XIX — начале XX века.',
					right: true,
					selected: false
				},
			]
		},
	]
})

let current_step = ref(1)
let current_question = computed(() => test.questions[current_step.value-1])

let steps = computed(() => test.questions.length)
let done = computed(() => current_step.value > steps.value)


function answer() {
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
	if (current_question.value.type === 'once' && current_question.value.answers.some(item => item.selected))
		return

	let answer = test.questions[current_step.value-1].answers[index]
	answer.selected = !answer.selected
}


let delta = 0
let timer = ref('00:00')
setInterval(() => {
	delta += 1000
	timer.value = Math.floor(delta/60000)+':'+Math.ceil(delta/1000 - Math.ceil(delta/1000))
}, 1000)

/*
title: string,
questions: [
	{
		question: string,
		type: 'once' | 'multi'
		answers: {
			text: string
			right: boolean
		}[]
	}
]
*/
</script>

<template>
  <div class="container">
		<div class="w-100 d-flex flex-column">
			<div class="w-100 font-weight-light pt-4 pr-8 pb-4 pl-8 rounded-lg bg-red-lighten-4 text-red-darken-4">
				{{ test.title }}
			</div>
	
			<div 
				v-if="!done" 
				class="w-100 pa-4 d-flex flex-row align-center"
			>
				<div class="text-h3" style="color: #5a335a;">?</div>

				<div 
					class="ml-3 font-weight-thin"
				>
					{{ current_step }}. {{ current_question.question }}
				</div>
			</div>

			<div v-else class="pa-4 text-green-darken-4">
				Вы завершили тест
			</div>
		</div>

		<div 
			v-if="!done"
			class="h-100 mt-4" 
			style="width: 80%;"	
		>
			<v-row 
				class="ma-auto flex-column"
				style="margin: auto;"
			>
				<v-col
					v-for="(answer, index) in current_question.answers"
					:key="index"
				>
					<div 
						@click="select(index)"
						:class="`d-flex flex-row align-stretch rounded-lg ${answer.selected ? 'bg-blue-lighten-4' : 'bg-white'}`"
						style="cursor: pointer;"
					>
						<div class="pa-4">
							{{ answer.text }}
						</div>
					</div>
				</v-col>
			</v-row>
		</div>

		<v-spacer />

		<div class="w-100 pa-4 d-flex flex-column" style="background: #5a335a; position: relative;">
			<div 
				class="text-white"
				style="font-size: 20px; font-weight: 500;"
			>
				{{ timer }}
			</div>

			<div 
				class="d-flex flex-row" 
				style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"
			>
				<v-btn
					v-if="current_step > 1"
					@click="back()"
				>
					На шаг назад
				</v-btn>

				<v-btn 
					v-if="!done && !current_question.entered"
					@click="answer()"
					:disabled="current_question.answers.every(item => !item.selected)"
					class="ml-6"
				>
					Ответить
				</v-btn>

				<v-btn
					v-if="current_question && current_question.entered"
					@click="increaseStep()"
					class="ml-6"
				>
					Дальше
				</v-btn>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container {
	background-attachment: fixed;
	background-color: rgba(241,242,242,.5);
	background-image: -webkit-linear-gradient(#fafafa 0,#fafafa 130px,rgba(68,28,80,.1) 150px,#fff 100%);
	background-image: linear-gradient(#fafafa 0,#fafafa 130px,rgba(68,28,80,.1) 150px,#fff 100%);
	box-shadow: 0 0 0.11rem 0 rgb(0 0 0 / 30%);

	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 8px 20px;
	width: 60%;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
}
</style>
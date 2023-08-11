<script setup>
let props = defineProps({
  answer: {
    type: Object,
    default: null
  },
  entered: {
    type: Boolean,
  }
})
</script>

<template>
  <div 
    :class="`d-flex flex-row align-stretch rounded-lg ${props.entered ? (props.answer.right ? 'bg-green-lighten-4' : 'bg-red-lighten-4') : props.answer.selected ? 'bg-blue-lighten-5' : 'bg-white'}`"
    :style="`cursor: pointer; user-select: none; ${props.answer.selected ? 'box-shadow: 0px 0px 0px 1px #000000;' : ''}`"
  >
    <div class="pa-4" v-html="props.answer.text">
    </div>
  </div>
</template>
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
    :class="`pa-4 text-center rounded-lg ${props.entered ? (props.answer.right ? 'bg-green-lighten-4' : 'bg-red-lighten-4') : props.answer.selected ? 'bg-blue-lighten-5' : 'bg-white'}`"
    :style="`cursor: pointer; user-select: none; word-wrap: break-word; white-space: break-spaces; ${props.answer.selected ? 'box-shadow: 0px 0px 0px 1px #000000;' : ''}`"
    v-html="props.answer.text"
  />
</template>



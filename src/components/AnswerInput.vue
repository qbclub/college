<script setup>
import { computed } from 'vue';

let props = defineProps({
  modelValue: {
    type: String,
    default: '',
    required: true
  },
  answer: {
    type: Object,
    default: null
  },
})
let emit = defineEmits(['update:modelValue'])
let model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="text-body-1">
    <span v-html="props.answer.text.split('{}')[0]" />
    <span><slot name="input" /></span>
    <span v-html="props.answer.text.split('{}')[1]" />
  </div>
</template>

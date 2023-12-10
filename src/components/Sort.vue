<script setup>
import { ref, computed } from 'vue';
import draggable from 'vuedraggable';


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
    <draggable v-model="props.answer.text" tag="ol" :animation="300">
        <template #item="{ element: text }">
            <div class="w-100 font-weight-light pa-4 pl-8 ma-4 rounded-lg text-center "
                style="color:black; background: white;">
                <li>{{ text }}</li>
            </div>

        </template>
    </draggable>
</template>

<style></style>
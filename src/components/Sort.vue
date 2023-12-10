<script setup>
import draggable from 'vuedraggable';

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
    <draggable v-model="props.answer.text" tag="ol" :animation="300">
        <template #item="{ element: text, index }">
            <div 
                :class="{
                    'w-100 font-weight-light pa-4 pl-8 ma-4 rounded-lg text-center': true, 
                    'bg-green-lighten-2': props.entered && text === props.answer.answer[index],
                    'bg-red-lighten-2': props.entered && text !== props.answer.answer[index],
                }"
                style="color:black; background: white;"
            >
                <li>{{ text }}</li>
            </div>
        </template>
    </draggable>
</template>

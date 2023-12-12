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

function getURL(url) {
    return new URL(url, import.meta.url)
}
</script>

<template>
    <v-row>
        <v-col :cols="answer.images ? 6 : 12">
            <draggable v-model="props.answer.text" tag="ol" :animation="300" class="h-100 d-flex flex-column justify-space-around">
                <template #item="{ element: text, index }">
                    <div :class="{
                        'w-100 font-weight-light pa-4 pl-8 mb-4 mt-4 rounded-lg text-center': true,
                        'bg-green-lighten-4': props.entered && text === props.answer.answer[index],
                        'bg-red-lighten-4': props.entered && text !== props.answer.answer[index],
                    }" style="color:black; background: white; cursor: all-scroll;">
                        <li>{{ text }}</li>
                    </div>
                </template>
            </draggable>
        </v-col>

        <v-col v-if="answer.images" cols="6">
            <v-row class="flex-column">
                <v-col class="text-center" v-for="image in answer.images">
                  
                        <img :src="getURL(image)" style="width:50%; user-drag: none;"/>
            
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

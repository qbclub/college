<script setup>
import { useRoute } from 'vue-router';
import { useDB } from '../stores/db'

let code = useRoute().query.code
const content = await useDB().getFromCode(code)
</script>

<template>
    <div v-if="content.interactive.type == 'video'"  class="container-video">
        <h2>{{ content.theme }}</h2>
        <video width="320" controls autoplay>
            <source :src="content.interactive.video" type="video/mp4">
        </video>
    </div>
    <div v-if="content.interactive.type == 'slide-show'">
        Тут слайд-шоу
    </div>
</template>
<style scoped>
.container-video{
    display:flex;
    height: 100dvh;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
video, h2{
    width: 60%;
    text-align: center;
}
h2{
    font-size: clamp(1rem, 0.5294rem + 0.9412vw, 1.5rem);
}
</style>
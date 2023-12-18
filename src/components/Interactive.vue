<script setup>
import { useRoute } from 'vue-router';
import { useDB } from '../stores/db'

let code = useRoute().query.code
const content = await useDB().getFromCode(code)

let imgUrl = (path) => { return new URL(path, import.meta.url) }

</script>

<template>
    <div v-if="content.interactive.type == 'video'" class="container-video">
        <!-- <h2>{{ content.theme }}</h2> -->
        <video width="320" controls autoplay>
            <source :src="imgUrl(content.interactive.video)" type="video/mp4">
        </video>
    </div>
    <v-row v-if="content.interactive.type == 'slides'" class="d-flex justify-center align-center" style="height: 100dvh">
        <!-- <h2>{{ content.theme }}</h2> -->
        <v-col cols="12" md="8">

            <v-carousel hide-delimiters  style="height: fit-content">
                <v-carousel-item v-for="slide, index in content.interactive.slides" :key="index" style="height: 100%">
                    <div class=" d-flex justify-center align-center" >
                        <img :src="imgUrl(slide)" alt="" style="user-drag: none; width: 100%;">
                    </div>
                </v-carousel-item>
            </v-carousel>

        </v-col>

    </v-row>
</template>
<style scoped>
.container-video {
    display: flex;
    height: 100dvh;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

video,
h2 {
    width: 60%;
    text-align: center;
}

h2 {
    font-size: clamp(1rem, 0.5294rem + 0.9412vw, 1.5rem);
}
</style>
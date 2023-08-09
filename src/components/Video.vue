<script setup>
</script>
<template>
    <div class="container-video">
        <!-- надо поменять на название из JS файла -->
        <h2>Сборка схем освещения с подключением прибора учета электроэнергии</h2>
        <video width="320"  controls>
            <source src="https://storage.yandexcloud.net/coks-video/1301100102.mp4" type="video/mp4">

        </video>
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

</style>
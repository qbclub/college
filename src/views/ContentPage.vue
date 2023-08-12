<template>
    <router-link to="/">
         <v-btn color="#456DB1" style="color: white;"  class="to-home">На главную</v-btn>
    </router-link>
   
    <RouterView />
</template>
<style scoped>
.to-home {
    position: absolute;
    top: 240px;
    left: -50px;
    transform: rotate(-90deg);
    z-index: 10;
}

</style>
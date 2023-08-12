<template>
    <router-link to="/">
         <v-btn color="#456DB1" style="color: white; z-index: 999;"  class="to-home">На главную</v-btn>
    </router-link>
   
    <RouterView />
</template>
<style scoped>
.to-home {
    position: fixed;
    top: 260px;
    left: -50px;
    transform: rotate(-90deg);
    z-index: 10;
}

</style>

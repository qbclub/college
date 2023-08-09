<script setup>
let emit = defineEmits(['close'])
</script>
<template>
  <v-card-text>
  <v-row>
    <v-col cols="12">
    <p>Экран слишком мал</p>
    <p>
      Контент и интерактивные элементы будут работать, но некоторые части страницы могут
      быть недоступны.
    </p>
    <p>
      Некоторые элементы будут слишком малы для взаимодействия. Пожалуйста увеличьте
      рабочую область или используйте устройство с минимальным разрешением 980x500
      пикселей.
    </p>
    </v-col>
    <v-col cols="12" style="display: flex; justify-content: center; align-items: center;">
    
    <v-btn @click="emit('close');">Понятно</v-btn>
    </v-col>
  </v-row>
</v-card-text>
</template>

<script setup>
let props = defineProps({
  right: {
    type: Number
  },
  answersAmount: {
    type: Number
  },
  time: {
    type: String
  }
})

let percents = Math.round(props.right/props.answersAmount*100)
</script>

<template>
  <v-row 
    class="flex-column justify-center"
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"  
  >
    <v-col cols="12" :class="`text-center text-h4 ${percents >= 50 ? 'text-green-darken-2' : 'text-red-darken-2'}`">
      Ваш результат {{ percents }}%
    </v-col>

    <v-col cols="12" class="text-center text-h6 text-grey-darken-1">
      Затраченное время {{ props.time }}
    </v-col>
  </v-row>
</template>
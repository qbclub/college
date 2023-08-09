<script setup>
import content from "../db/1301100102.js"
</script>
<template>
        <v-card-text>
    <span>Ключевые слова</span>
<v-table>
    <tbody>
      <tr
        v-for="item in content.keywords"
        :key="item.word"
      >
        <td class="word">{{ item.word }}</td>
        <td class="description">{{ item.description }}</td>
      </tr>
    </tbody>
</v-table>
</v-card-text>
</template>
<style scoped>
.word {
    width: 35%;
}
.description{
    width: 65%;
}
td {
  border: 1px solid ;
}
span{
    font-size:xx-large;
}
</style>
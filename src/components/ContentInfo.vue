<script setup>
import { useDB } from '../stores/db'
const content = await useDB().getFromCode()
</script>
<template>
    <v-card-text v-html="content.contentinf">
    </v-card-text>
</template>
<script setup>
import { useDB } from '../stores/db';

const content = await useDB().getFromCode()
</script>
<template>
    <v-card-text v-html="content.advice" class="pl-8 pr-8 pb-8 pt-0">

    </v-card-text>
</template>
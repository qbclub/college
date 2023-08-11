<script setup>
import { useRoute } from 'vue-router';
import { useDB } from '../stores/db';

let code = useRoute().query.code
const content = await useDB().getFromCode(code)
</script>

<template>
    <v-card-text>
        {{ content.contentinf }}
    </v-card-text>
</template>
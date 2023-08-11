<script setup>
import { RouterView, useRoute, useRouter } from 'vue-router'

let router = useRouter()
let route = useRoute()

if (!route.query.code)
  router.replace({ query: { code: 1301100102 } })
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

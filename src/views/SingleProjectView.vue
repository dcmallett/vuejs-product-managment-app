<template>
  <div>
    <!-- when we are using a wildcard we add a ? as optional params incase it is not there
      we also use the id for the params so we get the route.params.id
    -->
    <h1>Project {{ route.params?.id }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped></style>

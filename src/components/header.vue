<template>
  <header>
    {{ title }}
    <nav class="h-16 border-b bg-muted/40 flex justify-between px-6 items-center">
      <form class="w-full max-w-96">
        <input class="w-full pl-8 bg-background" type="text" placeholder="Search ...." />
      </form>
      <div class="w-8 h-8 rounded-full bg-white" />
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps({
  title: String
})
</script>

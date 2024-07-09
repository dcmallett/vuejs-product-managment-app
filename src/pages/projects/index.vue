<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/"> Go to home </RouterLink>
    {{ projects }}
  </div>
</template>
<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
//using refs to create reactive variables
import { ref } from 'vue'

const projects = ref()
;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) {
    console.log(error)
  }

  projects.value = data

  console.log('Projects : ', projects.value)
})()
</script>

<!-- This is called IIFE or an imediatlly invoked function expression
logic to fetch the projects from supabase
we need to add await because these properties exist on the response not the promise
so we need to await for the reponse to get the results -->

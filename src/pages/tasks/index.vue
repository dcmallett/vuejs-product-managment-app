<template>
  <div>
    <h1>Tasks Page</h1>
    <RouterLink to="/"> Go to home </RouterLink>
    <!-- we need to add logic to say if the projects is truthy
      we can access the first element of the array else 
      dont do anything 
    -->
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
//using refs to create reactive variables
import { ref } from 'vue'
import type { Tables } from '../../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)
;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) {
    console.log(error)
  }

  tasks.value = data
})()
</script>

<!-- This is called IIFE or an imediatlly invoked function expression
logic to fetch the projects from supabase
we need to add await because these properties exist on the response not the promise
so we need to await for the reponse to get the results -->

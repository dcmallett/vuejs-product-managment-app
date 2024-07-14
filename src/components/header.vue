<template>
  <header>
    {{ title }}
    <nav class="h-16 border-b bg-muted/40 flex justify-between px-6 items-center">
      <form class="w-full max-w-96">
        <Search />
        <Input class="w-full pl-8 bg-background" type="text" placeholder="Search ...." />
      </form>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  </header>
</template>

<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue'
import Search from './icons/search.vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
defineProps<{
  title?: string
}>()
</script>

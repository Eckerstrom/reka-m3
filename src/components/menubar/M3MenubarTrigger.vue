<script setup lang="ts">
import { MenubarTrigger } from 'reka-ui'
import { cn } from '../../utils/cn'
import { menubarTriggerVariants } from './menubar.variants'
import type { M3MenubarTriggerProps } from './types'

const props = defineProps<M3MenubarTriggerProps>()
</script>

<template>
  <MenubarTrigger :class="cn(menubarTriggerVariants(), props.class)">
    <slot />
  </MenubarTrigger>
</template>

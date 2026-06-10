<script setup lang="ts">
import { TooltipProvider } from 'reka-ui'
import type { M3TooltipProviderProps } from './types'

withDefaults(defineProps<M3TooltipProviderProps>(), {
  delayDuration: 200,
})
</script>

<template>
  <TooltipProvider :delay-duration="delayDuration">
    <slot />
  </TooltipProvider>
</template>

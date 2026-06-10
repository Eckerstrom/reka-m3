<script setup lang="ts">
import { ToastProvider, ToastViewport } from 'reka-ui'
import { cn } from '../../utils/cn'
import { snackbarViewportVariants } from './snackbar.variants'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <ToastProvider swipe-direction="down">
    <slot />
    <ToastViewport :class="cn(snackbarViewportVariants(), props.class)" />
  </ToastProvider>
</template>

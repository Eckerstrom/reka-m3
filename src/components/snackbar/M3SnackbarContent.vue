<script setup lang="ts">
import { ToastClose, ToastDescription, ToastTitle } from 'reka-ui'
import { cn } from '../../utils/cn'
import { snackbarDescriptionVariants, snackbarTitleVariants } from './snackbar.variants'
import type { HTMLAttributes } from 'vue'

defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div>
    <ToastTitle :class="snackbarTitleVariants()">
      <slot name="title" />
    </ToastTitle>
    <ToastDescription v-if="$slots.description" :class="snackbarDescriptionVariants()">
      <slot name="description" />
    </ToastDescription>
    <ToastClose class="sr-only" />
  </div>
</template>

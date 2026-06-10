<script setup lang="ts">
import { ToastAction } from 'reka-ui'
import { cn } from '../../utils/cn'
import { snackbarActionVariants } from './snackbar.variants'
import type { M3SnackbarActionProps } from './types'

const props = defineProps<M3SnackbarActionProps>()
</script>

<template>
  <ToastAction alt-text="Dismiss" as-child>
    <button type="button" :class="cn(snackbarActionVariants(), props.class)">
      <slot />
    </button>
  </ToastAction>
</template>

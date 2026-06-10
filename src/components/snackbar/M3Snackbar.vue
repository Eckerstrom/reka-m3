<script setup lang="ts">
import { ToastRoot, type ToastRootEmits } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils/cn'
import { snackbarRootVariants } from './snackbar.variants'
import type { M3SnackbarProps } from './types'

const props = defineProps<M3SnackbarProps>()
const emits = defineEmits<ToastRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ToastRoot
    v-bind="forwarded"
    :class="cn(snackbarRootVariants(), props.class)"
  >
    <slot />
  </ToastRoot>
</template>

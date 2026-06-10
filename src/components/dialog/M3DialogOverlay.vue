<script setup lang="ts">
import { DialogOverlay } from 'reka-ui'
import { cn } from '../../utils/cn'
import { dialogOverlayVariants } from './dialog.variants'
import type { M3DialogOverlayProps } from './types'

const props = defineProps<M3DialogOverlayProps>()
</script>

<template>
  <DialogOverlay :class="cn(dialogOverlayVariants(), props.class)" />
</template>

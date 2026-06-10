<script setup lang="ts">
import { DialogOverlay } from 'reka-ui'
import { cn } from '../../utils/cn'
import { sideSheetOverlayVariants } from './side-sheet.variants'
import type { M3SideSheetOverlayProps } from './types'

const props = defineProps<M3SideSheetOverlayProps>()
</script>

<template>
  <DialogOverlay :class="cn(sideSheetOverlayVariants(), props.class)" />
</template>

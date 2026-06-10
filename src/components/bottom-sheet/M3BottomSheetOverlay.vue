<script setup lang="ts">
import { DialogOverlay } from 'reka-ui'
import { cn } from '../../utils/cn'
import { bottomSheetOverlayVariants } from './bottom-sheet.variants'
import type { M3BottomSheetOverlayProps } from './types'

const props = defineProps<M3BottomSheetOverlayProps>()
</script>

<template>
  <DialogOverlay :class="cn(bottomSheetOverlayVariants(), props.class)" />
</template>

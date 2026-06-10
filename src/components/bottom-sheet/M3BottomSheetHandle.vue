<script setup lang="ts">
import { cn } from '../../utils/cn'
import { bottomSheetHandleVariants } from './bottom-sheet.variants'
import type { M3BottomSheetHandleProps } from './types'

const props = defineProps<M3BottomSheetHandleProps>()
</script>

<template>
  <div :class="cn(bottomSheetHandleVariants(), props.class)" aria-hidden="true" />
</template>

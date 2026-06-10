<script setup lang="ts">
import { DialogContent, DialogPortal, type DialogContentEmits } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils/cn'
import M3SideSheetOverlay from './M3SideSheetOverlay.vue'
import { sideSheetContentVariants } from './side-sheet.variants'
import type { M3SideSheetContentProps } from './types'

const props = defineProps<M3SideSheetContentProps>()
const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogPortal>
    <M3SideSheetOverlay />
    <DialogContent
      v-bind="forwarded"
      :class="cn(sideSheetContentVariants(), props.class)"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

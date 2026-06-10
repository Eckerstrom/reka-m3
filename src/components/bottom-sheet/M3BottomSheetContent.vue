<script setup lang="ts">
import { DialogContent, DialogPortal, type DialogContentEmits } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils/cn'
import M3BottomSheetOverlay from './M3BottomSheetOverlay.vue'
import { bottomSheetContentVariants } from './bottom-sheet.variants'
import type { M3BottomSheetContentProps } from './types'

const props = withDefaults(defineProps<M3BottomSheetContentProps>(), {
  density: 'standard',
})

const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogPortal>
    <M3BottomSheetOverlay />
    <DialogContent
      v-bind="forwarded"
      :class="cn(bottomSheetContentVariants({ density }), props.class)"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

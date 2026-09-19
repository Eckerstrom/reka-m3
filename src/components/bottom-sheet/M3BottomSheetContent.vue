<script setup lang="ts">
import { DialogContent, DialogPortal, type DialogContentEmits } from 'reka-ui'
import { cn } from '../../utils/cn'
import { useM3ForwardPropsEmits } from '../shared/forward-props'
import M3BottomSheetOverlay from './M3BottomSheetOverlay.vue'
import { bottomSheetContentVariants } from './bottom-sheet.variants'
import type { M3BottomSheetContentProps } from './types'

const props = withDefaults(defineProps<M3BottomSheetContentProps>(), {
  density: 'standard',
  autoFocus: true,
})

const emits = defineEmits<DialogContentEmits>()
const forwarded = useM3ForwardPropsEmits(props, emits, ['density', 'autoFocus', 'class'])

function onOpenAutoFocus(event: Event) {
  if (!props.autoFocus) {
    event.preventDefault()
  }
  emits('openAutoFocus', event)
}
</script>

<template>
  <DialogPortal>
    <M3BottomSheetOverlay />
    <DialogContent
      v-bind="forwarded"
      :class="cn(bottomSheetContentVariants({ density }), props.class)"
      @open-auto-focus="onOpenAutoFocus"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

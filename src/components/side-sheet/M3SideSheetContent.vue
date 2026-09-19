<script setup lang="ts">
import { DialogContent, DialogPortal, type DialogContentEmits } from 'reka-ui'
import { cn } from '../../utils/cn'
import { useM3ForwardPropsEmits } from '../shared/forward-props'
import M3SideSheetOverlay from './M3SideSheetOverlay.vue'
import { sideSheetContentVariants } from './side-sheet.variants'
import type { M3SideSheetContentProps } from './types'

const props = withDefaults(defineProps<M3SideSheetContentProps>(), {
  autoFocus: true,
})

const emits = defineEmits<DialogContentEmits>()
const forwarded = useM3ForwardPropsEmits(props, emits, ['autoFocus', 'class'])

function onOpenAutoFocus(event: Event) {
  if (!props.autoFocus) {
    event.preventDefault()
  }
  emits('openAutoFocus', event)
}
</script>

<template>
  <DialogPortal>
    <M3SideSheetOverlay />
    <DialogContent
      v-bind="forwarded"
      :class="cn(sideSheetContentVariants(), props.class)"
      @open-auto-focus="onOpenAutoFocus"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

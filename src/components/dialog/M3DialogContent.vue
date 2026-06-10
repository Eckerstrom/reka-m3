<script setup lang="ts">
import { DialogContent, DialogPortal, type DialogContentEmits } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils/cn'
import M3DialogOverlay from './M3DialogOverlay.vue'
import { dialogContentVariants } from './dialog.variants'
import type { M3DialogContentProps } from './types'

const props = withDefaults(defineProps<M3DialogContentProps>(), {
  variant: 'basic',
})

const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogPortal>
    <M3DialogOverlay />
    <DialogContent
      v-bind="forwarded"
      :class="cn(dialogContentVariants({ variant }), props.class)"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

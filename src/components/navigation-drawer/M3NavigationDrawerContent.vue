<script setup lang="ts">
import { DialogContent, DialogPortal, type DialogContentEmits } from 'reka-ui'
import { cn } from '../../utils/cn'
import { useM3ForwardPropsEmits } from '../shared/forward-props'
import M3NavigationDrawerOverlay from './M3NavigationDrawerOverlay.vue'
import { navigationDrawerContentVariants } from './navigation-drawer.variants'
import type { M3NavigationDrawerContentProps } from './types'

const props = withDefaults(defineProps<M3NavigationDrawerContentProps>(), {
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
    <M3NavigationDrawerOverlay />
    <DialogContent
      v-bind="forwarded"
      :class="cn(navigationDrawerContentVariants(), props.class)"
      @open-auto-focus="onOpenAutoFocus"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

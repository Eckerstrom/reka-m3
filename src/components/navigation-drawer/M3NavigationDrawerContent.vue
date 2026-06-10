<script setup lang="ts">
import { DialogContent, DialogPortal, type DialogContentEmits } from 'reka-ui'
import { useForwardPropsEmits } from 'reka-ui'
import { cn } from '../../utils/cn'
import M3NavigationDrawerOverlay from './M3NavigationDrawerOverlay.vue'
import { navigationDrawerContentVariants } from './navigation-drawer.variants'
import type { M3NavigationDrawerContentProps } from './types'

const props = defineProps<M3NavigationDrawerContentProps>()
const emits = defineEmits<DialogContentEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogPortal>
    <M3NavigationDrawerOverlay />
    <DialogContent
      v-bind="forwarded"
      :class="cn(navigationDrawerContentVariants(), props.class)"
    >
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

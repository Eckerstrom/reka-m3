<script setup lang="ts">
import { DialogOverlay } from 'reka-ui'
import { cn } from '../../utils/cn'
import { navigationDrawerOverlayVariants } from './navigation-drawer.variants'
import type { M3NavigationDrawerOverlayProps } from './types'

const props = defineProps<M3NavigationDrawerOverlayProps>()
</script>

<template>
  <DialogOverlay :class="cn(navigationDrawerOverlayVariants(), props.class)" />
</template>

<script setup lang="ts">
import { DropdownMenuContent } from 'reka-ui'
import { cn } from '../../utils/cn'
import { menuContentVariants } from './menu.variants'
import type { M3MenuContentProps } from './types'

const props = withDefaults(defineProps<M3MenuContentProps>(), {
  sideOffset: 4,
  align: 'start',
})
</script>

<template>
  <DropdownMenuContent
    :side-offset="sideOffset"
    :align="align"
    :class="cn(menuContentVariants(), props.class)"
  >
    <slot />
  </DropdownMenuContent>
</template>

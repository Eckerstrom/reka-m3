<script setup lang="ts">
import { ContextMenuItem } from 'reka-ui'
import { cn } from '../../utils/cn'
import { menuItemVariants } from './context-menu.variants'
import type { M3ContextMenuItemProps } from './types'

const props = defineProps<M3ContextMenuItemProps>()
</script>

<template>
  <ContextMenuItem
    :disabled="disabled"
    :class="cn(menuItemVariants(), props.class)"
  >
    <slot />
  </ContextMenuItem>
</template>

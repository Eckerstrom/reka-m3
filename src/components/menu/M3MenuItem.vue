<script setup lang="ts">
import { DropdownMenuItem } from 'reka-ui'
import { cn } from '../../utils/cn'
import { menuItemVariants } from './menu.variants'
import type { M3MenuItemProps } from './types'

const props = defineProps<M3MenuItemProps>()
</script>

<template>
  <DropdownMenuItem
    :disabled="disabled"
    :class="cn(menuItemVariants(), props.class)"
  >
    <slot />
  </DropdownMenuItem>
</template>

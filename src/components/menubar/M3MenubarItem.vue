<script setup lang="ts">
import { MenubarItem } from 'reka-ui'
import { cn } from '../../utils/cn'
import { menubarItemVariants } from './menubar.variants'
import type { M3MenubarItemProps } from './types'

const props = defineProps<M3MenubarItemProps>()
</script>

<template>
  <MenubarItem
    :disabled="disabled"
    :class="cn(menubarItemVariants(), props.class)"
  >
    <slot />
  </MenubarItem>
</template>

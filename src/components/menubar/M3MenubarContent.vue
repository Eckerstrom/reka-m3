<script setup lang="ts">
import { MenubarContent } from 'reka-ui'
import { cn } from '../../utils/cn'
import { menubarContentVariants } from './menubar.variants'
import type { M3MenubarContentProps } from './types'

const props = defineProps<M3MenubarContentProps>()
</script>

<template>
  <MenubarContent :class="cn(menubarContentVariants(), props.class)">
    <slot />
  </MenubarContent>
</template>

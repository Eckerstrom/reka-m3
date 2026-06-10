<script setup lang="ts">
import { DropdownMenuLabel } from 'reka-ui'
import { cn } from '../../utils/cn'
import { menuLabelVariants } from './menu.variants'
import type { M3MenuLabelProps } from './types'

const props = defineProps<M3MenuLabelProps>()
</script>

<template>
  <DropdownMenuLabel :class="cn(menuLabelVariants(), props.class)">
    <slot />
  </DropdownMenuLabel>
</template>

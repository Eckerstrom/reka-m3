<script setup lang="ts">
import { DropdownMenuSeparator } from 'reka-ui'
import { cn } from '../../utils/cn'
import { menuSeparatorVariants } from './menu.variants'
import type { M3MenuSeparatorProps } from './types'

const props = defineProps<M3MenuSeparatorProps>()
</script>

<template>
  <DropdownMenuSeparator :class="cn(menuSeparatorVariants(), props.class)" />
</template>

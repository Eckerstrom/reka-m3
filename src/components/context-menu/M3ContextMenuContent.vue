<script setup lang="ts">
import { ContextMenuContent } from 'reka-ui'
import { cn } from '../../utils/cn'
import { menuContentVariants } from './context-menu.variants'
import type { M3ContextMenuContentProps } from './types'

const props = defineProps<M3ContextMenuContentProps>()
</script>

<template>
  <ContextMenuContent :class="cn(menuContentVariants(), props.class)">
    <slot />
  </ContextMenuContent>
</template>

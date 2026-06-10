<script setup lang="ts">
import { ToolbarRoot } from 'reka-ui'
import { cn } from '../../utils/cn'
import { toolbarVariants } from './toolbar.variants'
import type { M3ToolbarProps } from './types'

const props = defineProps<M3ToolbarProps>()
</script>

<template>
  <ToolbarRoot :class="cn(toolbarVariants(), props.class)">
    <slot />
  </ToolbarRoot>
</template>

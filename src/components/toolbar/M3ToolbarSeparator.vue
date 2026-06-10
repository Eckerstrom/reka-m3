<script setup lang="ts">
import { ToolbarSeparator } from 'reka-ui'
import { cn } from '../../utils/cn'
import { toolbarSeparatorVariants } from './toolbar.variants'
import type { M3ToolbarSeparatorProps } from './types'

const props = defineProps<M3ToolbarSeparatorProps>()
</script>

<template>
  <ToolbarSeparator :class="cn(toolbarSeparatorVariants(), props.class)" />
</template>

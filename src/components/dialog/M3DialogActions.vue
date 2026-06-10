<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../utils/cn'
import { dialogActionsVariants } from './dialog.variants'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <div :class="cn(dialogActionsVariants(), props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ProgressIndicator, ProgressRoot } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils/cn'
import { progressIndicatorVariants, progressRootVariants } from './progress.variants'
import type { M3ProgressProps } from './types'

const props = withDefaults(defineProps<M3ProgressProps>(), {
  modelValue: 0,
  max: 100,
  variant: 'linear',
})

const progressStyle = computed(() => {
  const value = Math.min(Math.max(props.modelValue ?? 0, 0), props.max)
  const percent = props.max > 0 ? (value / props.max) * 100 : 0
  if (props.variant === 'circular') {
    return { transform: `rotate(${(percent / 100) * 360}deg)` }
  }
  return { transform: `translateX(-${100 - percent}%)` }
})
</script>

<template>
  <ProgressRoot
    :model-value="modelValue"
    :max="max"
    :class="cn(progressRootVariants({ variant }), props.class)"
  >
    <ProgressIndicator
      :class="progressIndicatorVariants({ variant })"
      :style="progressStyle"
    />
  </ProgressRoot>
</template>

<script setup lang="ts">
import { ProgressIndicator, ProgressRoot } from 'reka-ui'
import { computed, ref, watch } from 'vue'
import { cn } from '../../utils/cn'
import {
  progressCircularIndicatorVariants,
  progressCircularTrackVariants,
  progressIndicatorVariants,
  progressRootVariants,
} from './progress.variants'
import type { M3ProgressProps } from './types'

const CIRCLE_RADIUS = 20

const props = withDefaults(defineProps<M3ProgressProps>(), {
  modelValue: 0,
  max: 100,
  variant: 'linear',
})

const circleRef = ref<SVGCircleElement | null>(null)
const circleCircumference = ref(2 * Math.PI * CIRCLE_RADIUS)

const progressPercent = computed(() => {
  const value = Math.min(Math.max(props.modelValue ?? 0, 0), props.max)
  return props.max > 0 ? (value / props.max) * 100 : 0
})

const linearProgressStyle = computed(() => ({
  transform: `scaleX(${progressPercent.value / 100})`,
}))

const circularStrokeDashoffset = computed(() => {
  if (!circleCircumference.value) return 0
  return circleCircumference.value * (1 - progressPercent.value / 100)
})

const circularStrokeDasharray = computed(
  () => `${circleCircumference.value} ${circleCircumference.value}`,
)

function measureCircle() {
  if (circleRef.value) {
    circleCircumference.value = circleRef.value.getTotalLength()
  }
}

watch(circleRef, measureCircle, { immediate: true })
</script>

<template>
  <ProgressRoot
    :model-value="modelValue"
    :max="max"
    :class="cn(progressRootVariants({ variant }), props.class)"
  >
    <ProgressIndicator
      v-if="variant === 'linear'"
      :class="progressIndicatorVariants({ variant: 'linear' })"
      :style="linearProgressStyle"
    />
    <ProgressIndicator
      v-else
      :class="progressIndicatorVariants({ variant: 'circular' })"
      aria-hidden="true"
    >
      <svg class="size-full -rotate-90" viewBox="0 0 48 48" aria-hidden="true">
        <circle
          :class="progressCircularTrackVariants()"
          cx="24"
          cy="24"
          :r="CIRCLE_RADIUS"
          fill="none"
          stroke-width="4"
        />
        <circle
          ref="circleRef"
          :class="progressCircularIndicatorVariants()"
          cx="24"
          cy="24"
          :r="CIRCLE_RADIUS"
          fill="none"
          stroke-width="4"
          stroke-linecap="round"
          :stroke-dasharray="circularStrokeDasharray"
          :stroke-dashoffset="circularStrokeDashoffset"
        />
      </svg>
    </ProgressIndicator>
  </ProgressRoot>
</template>

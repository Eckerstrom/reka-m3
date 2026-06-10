<script setup lang="ts">
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { cn } from '../../utils/cn'
import { useM3ForwardPropsEmits } from '../shared/forward-props'
import type { M3SliderProps } from './types'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<M3SliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  defaultValue: () => [50],
  showValue: false,
})

const emits = defineEmits<{ 'update:modelValue': [value: number[]] }>()
const attrs = useAttrs()

const forwarded = useM3ForwardPropsEmits(props, emits, ['class', 'showValue'])

const displayValue = computed(() => (props.modelValue ?? props.defaultValue ?? [0])[0] ?? 0)
</script>

<template>
  <div :class="cn('m3-slider flex w-full max-w-md flex-col gap-2', props.class)">
    <SliderRoot
      v-bind="{ ...forwarded, ...attrs }"
      :model-value="modelValue"
      :default-value="defaultValue"
      :min="min"
      :max="max"
      :step="step"
      :disabled="disabled"
      :name="name"
      class="relative flex h-10 w-full touch-none select-none items-center"
    >
      <SliderTrack class="relative h-1 grow rounded-full bg-secondary-container">
        <SliderRange class="absolute h-full rounded-full bg-primary" />
      </SliderTrack>
      <SliderThumb
        class="m3-interactive block size-5 rounded-full border-2 border-primary bg-primary outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        aria-label="Slider value"
      />
    </SliderRoot>
    <span
      v-if="showValue"
      class="self-end md-typescale-label-medium text-on-surface-variant"
    >
      {{ displayValue }}
    </span>
  </div>
</template>

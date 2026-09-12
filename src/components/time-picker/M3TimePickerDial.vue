<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../utils/cn'
import { timePickerDialNumberVariants, timePickerDialVariants } from './time-picker.variants'

const props = defineProps<{
  /** Values shown on the dial (hours or minutes). */
  values: number[]
  selected: number
  /** Optional second (inner) ring for 24h hours 12–23. */
  innerValues?: number[]
  class?: string
}>()

const emit = defineEmits<{
  select: [value: number]
}>()

/** Dial is size-64 (16rem). Radii are distance from center to marker center. */
const DIAL_SIZE = 256
const OUTER_RADIUS = 104
const INNER_RADIUS = 68

function markerStyle(index: number, total: number, radius: number) {
  // 12-o'clock start, clockwise
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2
  const x = DIAL_SIZE / 2 + radius * Math.cos(angle)
  const y = DIAL_SIZE / 2 + radius * Math.sin(angle)
  return {
    left: `${x}px`,
    top: `${y}px`,
  }
}

const handAngle = computed(() => {
  const values = props.innerValues?.includes(props.selected)
    ? props.innerValues
    : props.values
  const index = values.indexOf(props.selected)
  if (index < 0) return 0
  return (index / values.length) * 360
})

const handRadius = computed(() =>
  props.innerValues?.includes(props.selected) ? INNER_RADIUS : OUTER_RADIUS,
)
</script>

<template>
  <div
    role="listbox"
    :class="cn(timePickerDialVariants(), props.class)"
    :aria-activedescendant="`dial-${selected}`"
  >
    <!-- Hand from center toward selected marker -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 w-0.5 origin-bottom rounded-full bg-primary"
      :style="{
        height: `${handRadius}px`,
        marginLeft: '-1px',
        marginTop: `-${handRadius}px`,
        transform: `rotate(${handAngle}deg)`,
      }"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
      aria-hidden="true"
    />

    <button
      v-for="(value, index) in values"
      :id="`dial-${value}`"
      :key="`outer-${value}`"
      type="button"
      role="option"
      :aria-selected="selected === value"
      :data-selected="selected === value"
      :class="timePickerDialNumberVariants()"
      :style="markerStyle(index, values.length, OUTER_RADIUS)"
      @click="emit('select', value)"
    >
      {{ String(value).padStart(2, '0') }}
    </button>

    <button
      v-for="(value, index) in innerValues ?? []"
      :id="`dial-${value}`"
      :key="`inner-${value}`"
      type="button"
      role="option"
      :aria-selected="selected === value"
      :data-selected="selected === value"
      :class="timePickerDialNumberVariants()"
      :style="markerStyle(index, innerValues!.length, INNER_RADIUS)"
      @click="emit('select', value)"
    >
      {{ String(value).padStart(2, '0') }}
    </button>
  </div>
</template>

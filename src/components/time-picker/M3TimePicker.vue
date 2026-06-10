<script setup lang="ts">
import { TimeFieldInput, TimeFieldRoot, type TimeValue } from 'reka-ui'
import { cn } from '../../utils/cn'
import { timeFieldInputVariants, timeFieldRootVariants } from './time-picker.variants'
import type { M3TimePickerProps } from './types'

const props = withDefaults(defineProps<M3TimePickerProps>(), {
  hourCycle: 24,
})

const emits = defineEmits<{ 'update:modelValue': [value: TimeValue | undefined] }>()
</script>

<template>
  <TimeFieldRoot
    v-slot="{ segments }"
    :model-value="modelValue ?? undefined"
    :locale="locale"
    :disabled="disabled"
    :hour-cycle="hourCycle"
    @update:model-value="emits('update:modelValue', $event)"
    :class="cn(timeFieldRootVariants(), props.class)"
  >
    <template v-for="segment in segments" :key="segment.part">
      <TimeFieldInput :part="segment.part" :class="timeFieldInputVariants()">
        {{ segment.value }}
      </TimeFieldInput>
    </template>
  </TimeFieldRoot>
</template>

<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { computed, useAttrs, useId } from 'vue'
import { cn } from '../../utils/cn'
import { useM3ForwardPropsEmits } from '../shared/forward-props'
import type { M3CheckboxProps } from './types'

defineOptions({ inheritAttrs: false })

const props = defineProps<M3CheckboxProps>()
const emits = defineEmits<{ 'update:modelValue': [value: boolean | 'indeterminate'] }>()
const attrs = useAttrs()
const generatedId = useId()
const checkboxId = computed(() => props.id ?? generatedId)

const forwarded = useM3ForwardPropsEmits(props, emits, ['class'])
</script>

<template>
  <label
    :class="
      cn(
        'm3-checkbox inline-flex cursor-pointer items-center gap-3',
        disabled && 'cursor-not-allowed opacity-38',
        props.class,
      )
    "
  >
    <CheckboxRoot
      :id="checkboxId"
      v-bind="{ ...forwarded, ...attrs }"
      :model-value="modelValue"
      :default-value="defaultValue"
      :disabled="disabled"
      :required="required"
      :name="name"
      :value="value"
      class="m3-checkbox__root m3-interactive inline-flex size-[18px] shrink-0 items-center justify-center rounded-sm border-2 border-on-surface-variant data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary"
      @update:model-value="emits('update:modelValue', $event)"
    >
      <template #default="{ state }">
        <CheckboxIndicator class="text-on-primary">
          <svg
            v-if="state === 'indeterminate'"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19 13H5v-2h14v2z" />
          </svg>
          <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          </svg>
        </CheckboxIndicator>
      </template>
    </CheckboxRoot>
    <span class="md-typescale-body-large text-on-surface">
      <slot />
    </span>
  </label>
</template>

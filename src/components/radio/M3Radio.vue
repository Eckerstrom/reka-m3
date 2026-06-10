<script setup lang="ts">
import { RadioGroupItem } from 'reka-ui'
import { computed, useAttrs, useId } from 'vue'
import { cn } from '../../utils/cn'
import type { M3RadioProps } from './types'

defineOptions({ inheritAttrs: false })

const props = defineProps<M3RadioProps>()
const attrs = useAttrs()
const generatedId = useId()
const radioId = computed(() => props.id ?? generatedId)
</script>

<template>
  <label
    :class="
      cn(
        'm3-radio inline-flex cursor-pointer items-center gap-3',
        disabled && 'cursor-not-allowed opacity-38',
        props.class,
      )
    "
  >
    <RadioGroupItem
      :id="radioId"
      v-bind="attrs"
      :value="value"
      :disabled="disabled"
      class="m3-radio__item m3-interactive inline-flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-on-surface-variant data-[state=checked]:border-primary"
    >
      <template #default="{ checked }">
        <span
          class="size-2.5 rounded-full bg-primary transition-opacity"
          :class="checked ? 'opacity-100' : 'opacity-0'"
        />
      </template>
    </RadioGroupItem>
    <span class="md-typescale-body-large text-on-surface">
      <slot />
    </span>
  </label>
</template>

<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { computed, useAttrs, useId } from 'vue'
import { cn } from '../../utils/cn'
import { useM3ForwardPropsEmits } from '../shared/forward-props'
import type { M3SwitchProps } from './types'

defineOptions({ inheritAttrs: false })

const props = defineProps<M3SwitchProps>()
const emits = defineEmits<{ 'update:modelValue': [value: boolean] }>()
const attrs = useAttrs()
const generatedId = useId()
const switchId = computed(() => props.id ?? generatedId)

const forwarded = useM3ForwardPropsEmits(props, emits, ['class'])
</script>

<template>
  <label
    :class="
      cn(
        'm3-switch inline-flex cursor-pointer items-center gap-3',
        disabled && 'cursor-not-allowed opacity-38',
        props.class,
      )
    "
  >
    <SwitchRoot
      :id="switchId"
      v-bind="{ ...forwarded, ...attrs }"
      :model-value="modelValue"
      :default-value="defaultValue"
      :disabled="disabled"
      :required="required"
      :name="name"
      class="m3-switch__root relative inline-flex h-8 w-[52px] shrink-0 cursor-pointer items-center rounded-full border-2 border-outline bg-surface-container-highest transition-colors data-[state=checked]:border-primary data-[state=checked]:bg-primary"
      @update:model-value="emits('update:modelValue', $event)"
    >
      <SwitchThumb
        class="pointer-events-none block size-4 translate-x-1 rounded-full bg-outline shadow-sm transition-transform data-[state=checked]:translate-x-7 data-[state=checked]:bg-on-primary"
      />
    </SwitchRoot>
    <span v-if="$slots.default" class="md-typescale-body-large text-on-surface">
      <slot />
    </span>
  </label>
</template>

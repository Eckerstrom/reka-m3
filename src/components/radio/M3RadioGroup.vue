<script setup lang="ts">
import { RadioGroupRoot } from 'reka-ui'
import { useAttrs } from 'vue'
import { cn } from '../../utils/cn'
import { useM3ForwardPropsEmits } from '../shared/forward-props'
import type { M3RadioGroupProps } from './types'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<M3RadioGroupProps>(), {
  orientation: 'vertical',
})

const emits = defineEmits<{ 'update:modelValue': [value: string] }>()
const attrs = useAttrs()

const forwarded = useM3ForwardPropsEmits(props, emits, ['class', 'orientation'])
</script>

<template>
  <RadioGroupRoot
    v-bind="{ ...forwarded, ...attrs }"
    :orientation="orientation"
    :class="
      cn(
        'm3-radio-group flex gap-3',
        orientation === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col',
        props.class,
      )
    "
  >
    <slot />
  </RadioGroupRoot>
</template>

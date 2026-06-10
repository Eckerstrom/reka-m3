<script setup lang="ts">
import { CheckboxGroupRoot } from 'reka-ui'
import { useAttrs } from 'vue'
import { cn } from '../../utils/cn'
import { useM3ForwardPropsEmits } from '../shared/forward-props'
import type { M3CheckboxGroupProps } from './types'

defineOptions({ inheritAttrs: false })

const props = defineProps<M3CheckboxGroupProps>()
const emits = defineEmits<{ 'update:modelValue': [value: string[]] }>()
const attrs = useAttrs()

const forwarded = useM3ForwardPropsEmits(props, emits, ['class'])
</script>

<template>
  <CheckboxGroupRoot
    v-bind="{ ...forwarded, ...attrs }"
    :class="cn('m3-checkbox-group flex flex-col gap-3', props.class)"
  >
    <slot />
  </CheckboxGroupRoot>
</template>

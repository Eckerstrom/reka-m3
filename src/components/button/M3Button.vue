<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { cn } from '../../utils/cn'
import { useM3ForwardPropsEmits } from '../shared/forward-props'
import { buttonVariants } from './button.variants'
import type { M3ButtonProps } from './types'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<M3ButtonProps>(), {
  variant: 'filled',
  color: undefined,
  size: 'md',
  type: 'button',
})

const emits = defineEmits<{ click: [event: MouseEvent] }>()
const attrs = useAttrs()

const forwarded = useM3ForwardPropsEmits(props, emits, ['variant', 'color', 'size', 'class'])

const effectiveColor = computed(() => {
  if (props.color) return props.color
  if (props.variant === 'tonal') return 'secondary'
  return 'primary'
})
</script>

<template>
  <Primitive
    as="button"
    v-bind="{ ...forwarded, ...attrs }"
    :type="type"
    :disabled="disabled"
    :class="cn(buttonVariants({ variant, color: effectiveColor, size }), props.class)"
  >
    <span class="relative z-[1] inline-flex items-center justify-center gap-2">
      <slot />
    </span>
  </Primitive>
</template>

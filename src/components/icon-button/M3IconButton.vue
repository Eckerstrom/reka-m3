<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed, useAttrs, useSlots } from 'vue'
import { cn } from '../../utils/cn'
import { useM3ForwardPropsEmits } from '../shared/forward-props'
import { iconButtonVariants } from './icon-button.variants'
import type { M3IconButtonProps } from './types'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<M3IconButtonProps>(), {
  variant: 'standard',
  color: 'primary',
  size: 'md',
  type: 'button',
})

const emits = defineEmits<{ click: [event: MouseEvent] }>()
const attrs = useAttrs()
const slots = useSlots()

if (import.meta.env.DEV && !props['aria-label'] && !slots.default) {
  console.warn('[M3IconButton] aria-label is required when no visible text is provided.')
}

const forwarded = useM3ForwardPropsEmits(props, emits, [
  'variant',
  'color',
  'size',
  'class',
  'aria-label',
])

const effectiveColor = computed(() => props.color ?? 'primary')
</script>

<template>
  <Primitive
    as="button"
    v-bind="{ ...forwarded, ...attrs }"
    :type="type"
    :disabled="disabled"
    :aria-label="props['aria-label']"
    :class="cn(iconButtonVariants({ variant, color: effectiveColor, size }), props.class)"
  >
    <span class="relative z-[1] inline-flex items-center justify-center">
      <slot />
    </span>
  </Primitive>
</template>

<script setup lang="ts">
import { ToggleGroupItem, ToggleGroupRoot } from 'reka-ui'
import { computed, useAttrs } from 'vue'
import { cn } from '../../utils/cn'
import { useM3ForwardPropsEmits } from '../shared/forward-props'
import {
  segmentedButtonItemVariants,
  segmentedButtonRootVariants,
} from './segmented-button.variants'
import type { M3SegmentedButtonProps } from './types'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<M3SegmentedButtonProps>(), {
  color: 'primary',
  items: () => [],
})

const emits = defineEmits<{ 'update:modelValue': [value: string] }>()
const attrs = useAttrs()

const forwarded = useM3ForwardPropsEmits(props, emits, ['items', 'color', 'class'])

const effectiveColor = computed(() => props.color ?? 'primary')
</script>

<template>
  <ToggleGroupRoot
    v-bind="{ ...forwarded, ...attrs }"
    type="single"
    :class="cn(segmentedButtonRootVariants({ color: effectiveColor }), props.class)"
  >
    <template v-if="items.length">
      <ToggleGroupItem
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
        :class="segmentedButtonItemVariants({ color: effectiveColor })"
      >
        <span v-if="item.icon" aria-hidden="true">{{ item.icon }}</span>
        {{ item.label }}
      </ToggleGroupItem>
    </template>
    <slot v-else />
  </ToggleGroupRoot>
</template>

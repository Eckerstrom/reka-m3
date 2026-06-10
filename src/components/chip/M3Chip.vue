<script setup lang="ts">
import { Primitive, Toggle } from 'reka-ui'
import { computed } from 'vue'
import { cn } from '../../utils/cn'
import { chipVariants } from './chip.variants'
import type { M3ChipProps } from './types'

const props = withDefaults(defineProps<M3ChipProps>(), {
  variant: 'assist',
  color: 'primary',
  selected: false,
})

const emits = defineEmits<{ click: [event: MouseEvent]; 'update:selected': [value: boolean] }>()

const isFilter = computed(() => props.variant === 'filter')

function onToggleUpdate(value: boolean) {
  emits('update:selected', value)
}
</script>

<template>
  <Toggle
    v-if="isFilter"
    :pressed="selected"
    :disabled="disabled"
    :class="cn(chipVariants({ variant, color }), props.class)"
    @update:pressed="onToggleUpdate"
  >
    <span class="relative z-[1] inline-flex items-center gap-1">
      <slot />
    </span>
  </Toggle>

  <Primitive
    v-else
    as="button"
    type="button"
    :disabled="disabled"
    :class="cn(chipVariants({ variant, color }), props.class)"
    @click="emits('click', $event)"
  >
    <span class="relative z-[1] inline-flex items-center gap-1">
      <slot />
    </span>
  </Primitive>
</template>

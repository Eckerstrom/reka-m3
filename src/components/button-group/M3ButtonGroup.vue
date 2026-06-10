<script setup lang="ts">
import { cn } from '../../utils/cn'
import type { M3ButtonGroupProps } from './types'

const props = withDefaults(defineProps<M3ButtonGroupProps>(), {
  connected: false,
})
</script>

<template>
  <div
    :class="
      cn(
        'm3-button-group inline-flex flex-wrap items-center gap-2',
        connected && [
          'gap-0 overflow-hidden rounded-full',
          '[&>.m3-button]:rounded-none [&>.m3-icon-button]:rounded-none',
          '[&>.m3-button:first-child]:rounded-s-full [&>.m3-icon-button:first-child]:rounded-s-full',
          '[&>.m3-button:last-child]:rounded-e-full [&>.m3-icon-button:last-child]:rounded-e-full',
          '[&>.m3-button+.m3-button]:ms-px [&>.m3-icon-button+.m3-icon-button]:ms-px',
          '[&>.m3-button+.m3-icon-button]:ms-px [&>.m3-icon-button+.m3-button]:ms-px',
        ],
        props.class,
      )
    "
    role="group"
  >
    <slot />
  </div>
</template>

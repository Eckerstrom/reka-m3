<script setup lang="ts">
import { cn } from '../../utils/cn'
import M3Fab from '../fab/M3Fab.vue'
import type { M3ExtendedFabProps } from './types'

const props = withDefaults(defineProps<M3ExtendedFabProps>(), {
  color: 'primary',
  size: 'md',
  type: 'button',
})

const emits = defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <M3Fab
    v-bind="props"
    :class="cn('m3-extended-fab h-auto min-h-14 w-auto max-w-full px-4', props.class)"
    @click="emits('click', $event)"
  >
    <span class="inline-flex items-center gap-3 md-typescale-label-large">
      <span class="inline-flex shrink-0 items-center justify-center">
        <slot name="icon" />
      </span>
      <span class="truncate">
        <slot />
      </span>
    </span>
  </M3Fab>
</template>

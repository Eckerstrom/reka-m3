<script setup lang="ts">
import {
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'reka-ui'
import { ref } from 'vue'
import { cn } from '../../utils/cn'
import M3ExtendedFab from '../extended-fab/M3ExtendedFab.vue'
import M3Fab from '../fab/M3Fab.vue'
import type { M3FabMenuProps } from './types'

const props = withDefaults(defineProps<M3FabMenuProps>(), {
  color: 'primary',
  size: 'md',
  actions: () => [],
  'aria-label': 'Open menu',
})

const emits = defineEmits<{ select: [value: string] }>()

const open = ref(false)

function handleSelect(value: string) {
  emits('select', value)
  open.value = false
}
</script>

<template>
  <PopoverRoot v-model:open="open">
    <PopoverTrigger as-child>
      <M3Fab
        :color="color"
        :size="size"
        :disabled="disabled"
        :aria-label="props['aria-label']"
        :class="cn('m3-fab-menu__trigger', props.class)"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          class="transition-transform duration-200 motion-reduce:transition-none"
          :class="open ? 'rotate-45' : ''"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </M3Fab>
    </PopoverTrigger>

    <PopoverPortal>
      <PopoverContent
        align="end"
        side="top"
        :side-offset="12"
        class="m3-fab-menu__content flex flex-col items-end gap-3 outline-none"
      >
        <template v-if="actions.length">
          <M3ExtendedFab
            v-for="action in actions"
            :key="action.value"
            :color="color"
            size="md"
            :disabled="action.disabled"
            class="shadow-md"
            @click="handleSelect(action.value)"
          >
            <template v-if="action.icon" #icon>
              <span aria-hidden="true">{{ action.icon }}</span>
            </template>
            {{ action.label }}
          </M3ExtendedFab>
        </template>
        <slot />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

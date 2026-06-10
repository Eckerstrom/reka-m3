<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'reka-ui'
import { useAttrs } from 'vue'
import { cn } from '../../utils/cn'
import M3Button from '../button/M3Button.vue'
import M3IconButton from '../icon-button/M3IconButton.vue'
import type { M3SplitButtonProps } from './types'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<M3SplitButtonProps>(), {
  variant: 'filled',
  color: 'primary',
  size: 'md',
  menuItems: () => [],
})

const emits = defineEmits<{
  click: [event: MouseEvent]
  'menu-select': [value: string]
}>()

const attrs = useAttrs()
</script>

<template>
  <DropdownMenuRoot>
    <div
      v-bind="attrs"
      :class="cn('m3-split-button inline-flex items-stretch overflow-hidden rounded-full', props.class)"
    >
      <M3Button
        :variant="variant"
        :color="color"
        :size="size"
        :disabled="disabled"
        class="rounded-e-none pe-3"
        @click="emits('click', $event)"
      >
        {{ label }}
      </M3Button>

      <DropdownMenuTrigger as-child :disabled="disabled">
        <M3IconButton
          :variant="variant === 'filled' ? 'filled' : variant === 'tonal' ? 'filled-tonal' : 'outlined'"
          :color="color"
          :size="size"
          :disabled="disabled"
          aria-label="More actions"
          class="rounded-s-none border-s border-[color-mix(in_srgb,currentColor_24%,transparent)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </M3IconButton>
      </DropdownMenuTrigger>
    </div>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="m3-split-button__menu min-w-40 rounded-md border border-outline-variant bg-surface-container py-1 shadow-lg"
        :side-offset="4"
      >
        <DropdownMenuItem
          v-for="item in menuItems"
          :key="item.value"
          :disabled="item.disabled"
          class="m3-split-button__menu-item md-typescale-body-large cursor-pointer px-4 py-2 text-on-surface outline-none data-[highlighted]:bg-on-surface/[0.08]"
          @select="emits('menu-select', item.value)"
        >
          {{ item.label }}
        </DropdownMenuItem>
        <slot name="menu" />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

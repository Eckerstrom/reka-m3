<script setup lang="ts">
import { computed, useSlots } from 'vue'
import { cn } from '../../../utils/cn'
import {
  topAppBarSectionVariants,
  topAppBarSubtitleVariants,
  topAppBarTitleVariants,
  topAppBarToolbarVariants,
  topAppBarVariants,
} from './top-app-bar.variants'
import type { M3TopAppBarProps } from './types'

const props = withDefaults(defineProps<M3TopAppBarProps>(), {
  size: 'small',
})

const slots = useSlots()
const isFlexible = computed(() => props.size === 'medium' || props.size === 'large')
const showToolbar = computed(
  () => !isFlexible.value || Boolean(slots.leading) || Boolean(slots.trailing),
)
</script>

<template>
  <header role="banner" :class="cn(topAppBarVariants({ size }), props.class)">
    <div v-if="showToolbar" :class="topAppBarToolbarVariants()">
      <div v-if="$slots.leading" :class="topAppBarSectionVariants()">
        <slot name="leading" />
      </div>

      <div
        v-if="!isFlexible"
        :class="topAppBarTitleVariants({ size: 'small', placement: 'inline' })"
      >
        <slot>{{ title }}</slot>
      </div>

      <div v-if="$slots.trailing" :class="cn(topAppBarSectionVariants(), 'ml-auto')">
        <slot name="trailing" />
      </div>
    </div>

    <div
      v-if="isFlexible"
      class="flex min-h-0 flex-1 flex-col justify-end"
    >
      <div
        :class="
          topAppBarTitleVariants({
            size: size === 'large' ? 'large' : 'medium',
            placement: 'below',
          })
        "
      >
        <slot>{{ title }}</slot>
      </div>
      <div
        v-if="$slots.subtitle"
        :class="
          topAppBarSubtitleVariants({
            size: size === 'large' ? 'large' : 'medium',
          })
        "
      >
        <slot name="subtitle" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { cn } from '../../../utils/cn'
import {
  navigationRailBadgeVariants,
  navigationRailHeaderVariants,
  navigationRailIconVariants,
  navigationRailIndicatorVariants,
  navigationRailItemVariants,
  navigationRailItemsVariants,
  navigationRailVariants,
} from './navigation-rail.variants'
import type { M3NavigationRailProps } from './types'

const props = defineProps<M3NavigationRailProps>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

function select(value: string) {
  emit('update:modelValue', value)
}
</script>

<template>
  <nav role="navigation" :class="cn(navigationRailVariants(), props.class)" aria-label="Main">
    <div v-if="$slots.header" :class="navigationRailHeaderVariants()">
      <slot name="header" />
    </div>

    <div :class="navigationRailItemsVariants()">
      <button
        v-for="item in items"
        :key="item.value"
        type="button"
        :class="navigationRailItemVariants({ active: modelValue === item.value })"
        :aria-current="modelValue === item.value ? 'page' : undefined"
        @click="select(item.value)"
      >
        <span
          v-if="modelValue === item.value"
          :class="navigationRailIndicatorVariants()"
          aria-hidden="true"
        />
        <span :class="navigationRailIconVariants({ active: modelValue === item.value })">
          <component :is="item.icon" v-if="item.icon" />
          <slot v-else :name="item.value" />
        </span>
        <span class="relative z-[1] max-w-full truncate text-center">{{ item.label }}</span>
        <span
          v-if="item.badge !== undefined"
          :class="navigationRailBadgeVariants()"
          :aria-label="`${item.badge} notifications`"
        >
          {{ item.badge }}
        </span>
      </button>
    </div>
  </nav>
</template>

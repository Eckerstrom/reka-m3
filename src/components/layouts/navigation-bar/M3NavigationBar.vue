<script setup lang="ts">
import { cn } from '../../../utils/cn'
import {
  navigationBarBadgeVariants,
  navigationBarIconContainerVariants,
  navigationBarIconVariants,
  navigationBarIndicatorVariants,
  navigationBarVariants,
} from './navigation-bar.variants'
import M3NavigationBarItem from './M3NavigationBarItem.vue'
import type { M3NavigationBarProps } from './types'

const props = defineProps<M3NavigationBarProps>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

function select(value: string) {
  emit('update:modelValue', value)
}
</script>

<template>
  <nav role="navigation" :class="cn(navigationBarVariants(), props.class)" aria-label="Main">
    <M3NavigationBarItem
      v-for="item in items"
      :key="item.value"
      :active="modelValue === item.value"
      :label="item.label"
      @click="select(item.value)"
    >
      <span :class="navigationBarIconContainerVariants({ active: modelValue === item.value })">
        <span
          v-if="modelValue === item.value"
          :class="navigationBarIndicatorVariants()"
          aria-hidden="true"
        />
        <span :class="navigationBarIconVariants({ active: modelValue === item.value })">
          <component :is="item.icon" v-if="item.icon" />
          <slot v-else :name="item.value" />
        </span>
        <span
          v-if="item.badge !== undefined"
          :class="navigationBarBadgeVariants()"
          :aria-label="`${item.badge} notifications`"
        >
          {{ item.badge }}
        </span>
      </span>
      <span class="max-w-full truncate">{{ item.label }}</span>
    </M3NavigationBarItem>
  </nav>
</template>

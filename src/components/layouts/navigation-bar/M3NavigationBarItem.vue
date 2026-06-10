<script setup lang="ts">
import { cn } from '../../../utils/cn'
import { navigationBarItemVariants } from './navigation-bar.variants'
import type { M3NavigationBarItemProps } from './types'

const props = withDefaults(defineProps<M3NavigationBarItemProps>(), {
  active: false,
})
</script>

<template>
  <button
    type="button"
    :class="cn(navigationBarItemVariants({ active }), props.class)"
    :aria-current="active ? 'page' : undefined"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { cn } from '../../utils/cn'
import { navigationDrawerHeaderVariants } from './navigation-drawer.variants'
import type { M3NavigationDrawerHeaderProps } from './types'

const props = defineProps<M3NavigationDrawerHeaderProps>()
</script>

<template>
  <div :class="cn(navigationDrawerHeaderVariants(), props.class)">
    <slot />
  </div>
</template>

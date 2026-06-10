<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { cn } from '../../utils/cn'
import { navigationDrawerItemVariants } from './navigation-drawer.variants'
import type { M3NavigationDrawerItemProps } from './types'

const props = withDefaults(defineProps<M3NavigationDrawerItemProps>(), {
  active: false,
})
</script>

<template>
  <Primitive
    as="button"
    type="button"
    :class="cn(navigationDrawerItemVariants({ active }), props.class)"
  >
    <slot />
  </Primitive>
</template>

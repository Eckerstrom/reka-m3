<script setup lang="ts">
import { TabsList } from 'reka-ui'
import { cn } from '../../utils/cn'
import { tabsListVariants } from './tabs.variants'
import type { M3TabsListProps } from './types'

const props = withDefaults(defineProps<M3TabsListProps>(), {
  variant: 'primary',
})
</script>

<template>
  <TabsList :class="cn(tabsListVariants({ variant }), props.class)">
    <slot />
  </TabsList>
</template>

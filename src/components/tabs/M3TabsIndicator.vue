<script setup lang="ts">
import { TabsIndicator } from 'reka-ui'
import { cn } from '../../utils/cn'
import { tabsIndicatorVariants } from './tabs.variants'
import type { M3TabsIndicatorProps } from './types'

const props = defineProps<M3TabsIndicatorProps>()
</script>

<template>
  <TabsIndicator :class="cn(tabsIndicatorVariants(), props.class)" />
</template>

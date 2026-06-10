<script setup lang="ts">
import { TabsContent } from 'reka-ui'
import { cn } from '../../utils/cn'
import { tabsContentVariants } from './tabs.variants'
import type { M3TabsContentProps } from './types'

const props = defineProps<M3TabsContentProps>()
</script>

<template>
  <TabsContent
    :value="value"
    :class="cn(tabsContentVariants(), props.class)"
  >
    <slot />
  </TabsContent>
</template>

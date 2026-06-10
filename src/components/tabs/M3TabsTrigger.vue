<script setup lang="ts">
import { TabsTrigger } from 'reka-ui'
import { cn } from '../../utils/cn'
import { tabsTriggerVariants } from './tabs.variants'
import type { M3TabsTriggerProps } from './types'

const props = withDefaults(defineProps<M3TabsTriggerProps>(), {
  variant: 'primary',
})
</script>

<template>
  <TabsTrigger
    :value="value"
    :disabled="disabled"
    :class="cn(tabsTriggerVariants({ variant }), props.class)"
  >
    <slot />
  </TabsTrigger>
</template>

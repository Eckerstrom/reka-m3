<script setup lang="ts">
import { Separator } from 'reka-ui'
import { cn } from '../../utils/cn'
import { dividerVariants } from './divider.variants'
import type { M3DividerProps } from './types'

const props = withDefaults(defineProps<M3DividerProps>(), {
  orientation: 'horizontal',
  decorative: true,
})
</script>

<template>
  <Separator
    :orientation="orientation"
    :decorative="decorative"
    :class="cn(dividerVariants({ orientation }), props.class)"
  />
</template>

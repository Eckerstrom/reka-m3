<script setup lang="ts">
import { TooltipContent, TooltipPortal, TooltipRoot, TooltipTrigger } from 'reka-ui'
import { cn } from '../../utils/cn'
import { tooltipContentVariants, tooltipRichContentVariants } from './tooltip.variants'
import type { M3TooltipContentProps } from './types'

const props = withDefaults(
  defineProps<M3TooltipContentProps & { rich?: boolean }>(),
  {
    sideOffset: 4,
    rich: false,
  },
)
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger as-child>
      <slot name="trigger" />
    </TooltipTrigger>
    <TooltipPortal>
      <TooltipContent
        :side-offset="sideOffset"
        :class="cn(rich ? tooltipRichContentVariants() : tooltipContentVariants(), props.class)"
      >
        <slot />
      </TooltipContent>
    </TooltipPortal>
  </TooltipRoot>
</template>

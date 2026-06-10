import type { HTMLAttributes } from 'vue'

export interface M3TooltipContentProps {
  class?: HTMLAttributes['class']
  sideOffset?: number
}

export interface M3TooltipProviderProps {
  delayDuration?: number
}

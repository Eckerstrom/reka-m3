import type { HTMLAttributes } from 'vue'

export interface M3MenuContentProps {
  class?: HTMLAttributes['class']
  sideOffset?: number
  align?: 'start' | 'center' | 'end'
}

export interface M3MenuItemProps {
  class?: HTMLAttributes['class']
  disabled?: boolean
}

export interface M3MenuLabelProps {
  class?: HTMLAttributes['class']
}

export interface M3MenuSeparatorProps {
  class?: HTMLAttributes['class']
}

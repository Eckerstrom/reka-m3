import type { HTMLAttributes } from 'vue'
import type { M3NavDestination } from '../../../types/navigation'

export type { M3NavDestination }

export interface M3NavigationBarProps {
  modelValue: string
  items: M3NavDestination[]
  class?: HTMLAttributes['class']
}

export interface M3NavigationBarItemProps {
  active?: boolean
  label: string
  class?: HTMLAttributes['class']
}

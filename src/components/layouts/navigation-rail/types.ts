import type { HTMLAttributes } from 'vue'
import type { M3NavDestination } from '../../../types/navigation'

export type { M3NavDestination }

export interface M3NavigationRailProps {
  modelValue: string
  items: M3NavDestination[]
  class?: HTMLAttributes['class']
}

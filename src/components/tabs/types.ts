import type { HTMLAttributes } from 'vue'

export type M3TabsVariant = 'primary' | 'secondary'

export interface M3TabsListProps {
  variant?: M3TabsVariant
  class?: HTMLAttributes['class']
}

export interface M3TabsTriggerProps {
  variant?: M3TabsVariant
  class?: HTMLAttributes['class']
  value: string
  disabled?: boolean
}

export interface M3TabsContentProps {
  class?: HTMLAttributes['class']
  value: string
}

export interface M3TabsIndicatorProps {
  class?: HTMLAttributes['class']
}

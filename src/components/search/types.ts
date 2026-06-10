import type { HTMLAttributes } from 'vue'

export interface M3SearchProps {
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  class?: HTMLAttributes['class']
}

export interface M3SearchItemProps {
  class?: HTMLAttributes['class']
  value: string
}

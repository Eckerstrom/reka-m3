import type { HTMLAttributes } from 'vue'

export type M3FieldVariant = 'filled' | 'outlined'

export interface M3FieldLabelProps {
  for?: string
  required?: boolean
  class?: HTMLAttributes['class']
}

export interface M3FieldSupportTextProps {
  id?: string
  error?: boolean
  class?: HTMLAttributes['class']
}

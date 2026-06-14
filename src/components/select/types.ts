import type { HTMLAttributes } from 'vue'

export type M3SelectVariant = 'filled' | 'outlined'

export interface M3SelectItem {
  label: string
  value: string
  disabled?: boolean
}

export interface M3SelectProps {
  modelValue?: string
  items: M3SelectItem[]
  variant?: M3SelectVariant
  label?: string
  placeholder?: string
  helperText?: string
  error?: boolean
  errorText?: string
  disabled?: boolean
  required?: boolean
  id?: string
  name?: string
  class?: HTMLAttributes['class']
}

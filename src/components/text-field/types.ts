import type { HTMLAttributes, InputHTMLAttributes } from 'vue'

export type M3TextFieldVariant = 'filled' | 'outlined'

export interface M3TextFieldProps {
  modelValue?: string
  defaultValue?: string
  variant?: M3TextFieldVariant
  label?: string
  placeholder?: string
  helperText?: string
  error?: boolean
  errorText?: string
  disabled?: boolean
  required?: boolean
  multiline?: boolean
  rows?: number
  id?: string
  name?: string
  type?: InputHTMLAttributes['type']
  class?: HTMLAttributes['class']
}

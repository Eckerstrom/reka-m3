import type { HTMLAttributes } from 'vue'

export interface M3CheckboxProps {
  modelValue?: boolean | 'indeterminate'
  defaultValue?: boolean | 'indeterminate'
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
  id?: string
  class?: HTMLAttributes['class']
}

export interface M3CheckboxGroupProps {
  modelValue?: string[]
  defaultValue?: string[]
  disabled?: boolean
  required?: boolean
  name?: string
  class?: HTMLAttributes['class']
}

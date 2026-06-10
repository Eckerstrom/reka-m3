import type { HTMLAttributes } from 'vue'

export interface M3RadioProps {
  value: string
  disabled?: boolean
  id?: string
  class?: HTMLAttributes['class']
}

export interface M3RadioGroupProps {
  modelValue?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  name?: string
  orientation?: 'horizontal' | 'vertical'
  class?: HTMLAttributes['class']
}

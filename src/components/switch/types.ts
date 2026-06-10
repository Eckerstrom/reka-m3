import type { HTMLAttributes } from 'vue'

export interface M3SwitchProps {
  modelValue?: boolean
  defaultValue?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  id?: string
  class?: HTMLAttributes['class']
}

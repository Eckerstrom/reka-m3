import type { HTMLAttributes } from 'vue'

export interface M3SliderProps {
  modelValue?: number[]
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  showValue?: boolean
  name?: string
  class?: HTMLAttributes['class']
}

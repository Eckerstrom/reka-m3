import type { HTMLAttributes } from 'vue'

export interface M3ProgressProps {
  modelValue?: number | null
  max?: number
  variant?: 'linear' | 'circular'
  class?: HTMLAttributes['class']
}

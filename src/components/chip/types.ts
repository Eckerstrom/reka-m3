import type { ColorRole } from '../../types/color'
import type { HTMLAttributes } from 'vue'

export type M3ChipVariant = 'assist' | 'filter' | 'suggestion' | 'elevated'

export interface M3ChipProps {
  variant?: M3ChipVariant
  color?: ColorRole
  selected?: boolean
  disabled?: boolean
  class?: HTMLAttributes['class']
}

export interface M3ChipInputProps {
  modelValue?: string[]
  class?: HTMLAttributes['class']
}

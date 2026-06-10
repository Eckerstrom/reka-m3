import type { ColorRole } from '../../types/color'
import type { ComponentSize } from '../shared/size'
import type { HTMLAttributes } from 'vue'

export type M3ButtonVariant = 'filled' | 'tonal' | 'outlined' | 'text' | 'elevated'

export interface M3ButtonProps {
  variant?: M3ButtonVariant
  color?: ColorRole
  size?: ComponentSize
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  class?: HTMLAttributes['class']
}

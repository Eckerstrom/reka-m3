import type { ColorRole } from '../../types/color'
import type { ComponentSize } from '../shared/size'
import type { HTMLAttributes } from 'vue'

export type M3IconButtonVariant = 'standard' | 'filled' | 'filled-tonal' | 'outlined'

export interface M3IconButtonProps {
  variant?: M3IconButtonVariant
  color?: ColorRole
  size?: ComponentSize
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
  class?: HTMLAttributes['class']
}

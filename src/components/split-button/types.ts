import type { ColorRole } from '../../types/color'
import type { ComponentSize } from '../shared/size'
import type { M3ButtonVariant } from '../button/types'
import type { HTMLAttributes } from 'vue'

export interface M3SplitButtonMenuItem {
  label: string
  value: string
  disabled?: boolean
}

export interface M3SplitButtonProps {
  label: string
  variant?: M3ButtonVariant
  color?: ColorRole
  size?: ComponentSize
  disabled?: boolean
  menuItems?: M3SplitButtonMenuItem[]
  class?: HTMLAttributes['class']
}

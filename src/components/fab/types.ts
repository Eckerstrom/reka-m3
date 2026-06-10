import type { FabColorRole } from '../../types/color'
import type { ComponentSize } from '../shared/size'
import type { HTMLAttributes } from 'vue'

export interface M3FabProps {
  color?: FabColorRole
  size?: ComponentSize
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
  class?: HTMLAttributes['class']
}

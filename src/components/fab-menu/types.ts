import type { FabColorRole } from '../../types/color'
import type { ComponentSize } from '../shared/size'
import type { HTMLAttributes } from 'vue'

export interface M3FabMenuAction {
  label: string
  value: string
  icon?: string
  disabled?: boolean
}

export interface M3FabMenuProps {
  actions?: M3FabMenuAction[]
  color?: FabColorRole
  size?: ComponentSize
  disabled?: boolean
  'aria-label'?: string
  class?: HTMLAttributes['class']
}

import type { ColorRole } from '../../types/color'
import type { HTMLAttributes } from 'vue'

export interface M3SegmentedButtonItem {
  value: string
  label: string
  disabled?: boolean
  icon?: string
}

export interface M3SegmentedButtonProps {
  modelValue?: string
  defaultValue?: string
  items?: M3SegmentedButtonItem[]
  color?: ColorRole
  disabled?: boolean
  name?: string
  class?: HTMLAttributes['class']
}

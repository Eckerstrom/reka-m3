import type { HTMLAttributes } from 'vue'
import type { TimeValue } from 'reka-ui'

export interface M3TimePickerProps {
  modelValue?: TimeValue | null
  class?: HTMLAttributes['class']
  locale?: string
  disabled?: boolean
  hourCycle?: 12 | 24
}

export type { TimeValue }

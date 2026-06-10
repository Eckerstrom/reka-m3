import type { HTMLAttributes } from 'vue'
import type { DateValue } from '@internationalized/date'

export interface M3DatePickerProps {
  modelValue?: DateValue | null
  class?: HTMLAttributes['class']
  locale?: string
  disabled?: boolean
}

export type { DateValue }

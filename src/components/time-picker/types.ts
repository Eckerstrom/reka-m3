import type { HTMLAttributes } from 'vue'
import type { TimeValue } from 'reka-ui'

export interface M3TimePickerProps {
  modelValue?: TimeValue | null
  class?: HTMLAttributes['class']
  locale?: string
  disabled?: boolean
  /** 24 (default) shows a concentric 0–23 dial; 12 shows AM/PM period toggle. */
  hourCycle?: 12 | 24
  /** Dialog title (e.g. for i18n). */
  title?: string
  /** Cancel action label. */
  cancelLabel?: string
  /** Confirm action label. */
  confirmLabel?: string
}

export type { TimeValue }

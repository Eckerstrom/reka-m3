import type { HTMLAttributes } from 'vue'

export interface M3DividerProps {
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
  class?: HTMLAttributes['class']
}

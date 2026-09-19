import type { HTMLAttributes } from 'vue'

export type M3TopAppBarSize = 'small' | 'medium' | 'large'

export interface M3TopAppBarProps {
  title?: string
  /** Small = single-row; medium/large = flexible two-row page headline. */
  size?: M3TopAppBarSize
  class?: HTMLAttributes['class']
}

import type { HTMLAttributes } from 'vue'
import type { DialogContentProps } from 'reka-ui'

export type M3BottomSheetDensity = 'standard' | 'modal'

export interface M3BottomSheetContentProps extends DialogContentProps {
  density?: M3BottomSheetDensity
  /**
   * When true (default), focus moves to the first focusable element on open.
   * Set false on mobile sheets with text fields to avoid opening the keyboard.
   */
  autoFocus?: boolean
  class?: HTMLAttributes['class']
}

export interface M3BottomSheetOverlayProps {
  class?: HTMLAttributes['class']
}

export interface M3BottomSheetHandleProps {
  class?: HTMLAttributes['class']
}

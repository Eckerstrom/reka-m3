import type { HTMLAttributes } from 'vue'
import type { DialogContentProps } from 'reka-ui'

export interface M3SideSheetContentProps extends DialogContentProps {
  /**
   * When true (default), focus moves to the first focusable element on open.
   * Set false on sheets with text fields to avoid opening the keyboard on mobile.
   */
  autoFocus?: boolean
  class?: HTMLAttributes['class']
}

export interface M3SideSheetOverlayProps {
  class?: HTMLAttributes['class']
}

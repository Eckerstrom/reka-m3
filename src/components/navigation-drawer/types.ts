import type { HTMLAttributes } from 'vue'
import type { DialogContentProps } from 'reka-ui'

export interface M3NavigationDrawerContentProps extends DialogContentProps {
  /**
   * When true (default), focus moves to the first focusable element on open.
   * Set false to keep focus on the trigger (e.g. avoid mobile keyboards).
   */
  autoFocus?: boolean
  class?: HTMLAttributes['class']
}

export interface M3NavigationDrawerOverlayProps {
  class?: HTMLAttributes['class']
}

export interface M3NavigationDrawerHeaderProps {
  class?: HTMLAttributes['class']
}

export interface M3NavigationDrawerItemProps {
  active?: boolean
  class?: HTMLAttributes['class']
}

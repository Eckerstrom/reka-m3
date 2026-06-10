import type { HTMLAttributes } from 'vue'
import type { DialogContentProps } from 'reka-ui'

export interface M3NavigationDrawerContentProps extends DialogContentProps {
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

import type { HTMLAttributes } from 'vue'
import type { DialogContentProps } from 'reka-ui'

export type M3DialogVariant = 'basic' | 'fullscreen'

export interface M3DialogContentProps extends DialogContentProps {
  variant?: M3DialogVariant
  class?: HTMLAttributes['class']
}

export interface M3DialogOverlayProps {
  class?: HTMLAttributes['class']
}

export interface M3DialogTitleProps {
  class?: HTMLAttributes['class']
}

export interface M3DialogDescriptionProps {
  class?: HTMLAttributes['class']
}

export interface M3DialogCloseProps {
  class?: HTMLAttributes['class']
}

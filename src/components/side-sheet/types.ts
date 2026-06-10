import type { HTMLAttributes } from 'vue'
import type { DialogContentProps } from 'reka-ui'

export interface M3SideSheetContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
}

export interface M3SideSheetOverlayProps {
  class?: HTMLAttributes['class']
}

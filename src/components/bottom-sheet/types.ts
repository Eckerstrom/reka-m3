import type { HTMLAttributes } from 'vue'
import type { DialogContentProps } from 'reka-ui'

export type M3BottomSheetDensity = 'standard' | 'modal'

export interface M3BottomSheetContentProps extends DialogContentProps {
  density?: M3BottomSheetDensity
  class?: HTMLAttributes['class']
}

export interface M3BottomSheetOverlayProps {
  class?: HTMLAttributes['class']
}

export interface M3BottomSheetHandleProps {
  class?: HTMLAttributes['class']
}

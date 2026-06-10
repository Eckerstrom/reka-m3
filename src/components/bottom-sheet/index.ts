export {
  DialogRoot as M3BottomSheetRoot,
  DialogTrigger as M3BottomSheetTrigger,
  DialogTitle as M3BottomSheetTitle,
  DialogDescription as M3BottomSheetDescription,
  DialogClose as M3BottomSheetClose,
} from 'reka-ui'

export { default as M3BottomSheetOverlay } from './M3BottomSheetOverlay.vue'
export { default as M3BottomSheetContent } from './M3BottomSheetContent.vue'
export { default as M3BottomSheetHandle } from './M3BottomSheetHandle.vue'

export type {
  M3BottomSheetDensity,
  M3BottomSheetContentProps,
  M3BottomSheetOverlayProps,
  M3BottomSheetHandleProps,
} from './types'

export {
  bottomSheetContentVariants,
  bottomSheetOverlayVariants,
  bottomSheetHandleVariants,
} from './bottom-sheet.variants'

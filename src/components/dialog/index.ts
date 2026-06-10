export {
  DialogRoot as M3DialogRoot,
  DialogTrigger as M3DialogTrigger,
  DialogPortal as M3DialogPortal,
} from 'reka-ui'

export { default as M3DialogOverlay } from './M3DialogOverlay.vue'
export { default as M3DialogContent } from './M3DialogContent.vue'
export { default as M3DialogTitle } from './M3DialogTitle.vue'
export { default as M3DialogDescription } from './M3DialogDescription.vue'
export { default as M3DialogClose } from './M3DialogClose.vue'
export { default as M3DialogActions } from './M3DialogActions.vue'

export type {
  M3DialogVariant,
  M3DialogContentProps,
  M3DialogOverlayProps,
  M3DialogTitleProps,
  M3DialogDescriptionProps,
  M3DialogCloseProps,
} from './types'

export {
  dialogContentVariants,
  dialogOverlayVariants,
  dialogTitleVariants,
  dialogDescriptionVariants,
} from './dialog.variants'

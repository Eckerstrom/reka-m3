import { cva } from 'class-variance-authority'
import { dialogSurfaceVariants, scrimOverlayVariants } from '../../lib/variants/overlay'

export const bottomSheetOverlayVariants = scrimOverlayVariants

export const bottomSheetContentVariants = cva(
  [
    'fixed inset-x-0 bottom-0 z-50 flex max-h-[90vh] flex-col',
    'rounded-t-xl border-t border-outline-variant',
    dialogSurfaceVariants({ variant: 'basic' }),
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
    'focus:outline-none',
  ],
  {
    variants: {
      density: {
        standard: 'p-4 pt-2',
        modal: 'p-6 pt-3',
      },
    },
    defaultVariants: {
      density: 'standard',
    },
  },
)

export const bottomSheetHandleVariants = cva(
  'mx-auto mb-2 h-1 w-8 shrink-0 rounded-full bg-on-surface-variant/40',
)

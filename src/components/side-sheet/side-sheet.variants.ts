import { cva } from 'class-variance-authority'
import { dialogSurfaceVariants, scrimOverlayVariants } from '../../lib/variants/overlay'

export const sideSheetOverlayVariants = scrimOverlayVariants

export const sideSheetContentVariants = cva([
  'fixed inset-y-0 end-0 z-50 flex w-full max-w-sm flex-col',
  'border-s border-outline-variant',
  dialogSurfaceVariants({ variant: 'basic' }),
  'rounded-s-xl p-6',
  'data-[state=open]:animate-in data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  'data-[state=closed]:slide-out-to-end data-[state=open]:slide-in-from-end',
  'focus:outline-none',
])

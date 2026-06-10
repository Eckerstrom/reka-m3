import { cva } from 'class-variance-authority'
import { dialogSurfaceVariants, scrimOverlayVariants } from '../../lib/variants/overlay'

export const dialogOverlayVariants = scrimOverlayVariants

export const dialogContentVariants = cva(
  [
    'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 p-6',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    'data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]',
    'data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
    'focus:outline-none',
  ],
  {
    variants: {
      variant: {
        basic: dialogSurfaceVariants({ variant: 'basic' }),
        fullscreen: [
          dialogSurfaceVariants({ variant: 'fullscreen' }),
          'inset-0 max-w-none translate-x-0 translate-y-0 rounded-none',
        ],
      },
    },
    defaultVariants: {
      variant: 'basic',
    },
  },
)

export const dialogTitleVariants = cva('md-typescale-headline-small text-on-surface')

export const dialogDescriptionVariants = cva('md-typescale-body-medium text-on-surface-variant')

export const dialogActionsVariants = cva('flex flex-row justify-end gap-2 pt-2')

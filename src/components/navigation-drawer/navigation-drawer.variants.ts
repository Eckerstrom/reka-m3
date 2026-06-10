import { cva } from 'class-variance-authority'
import { dialogSurfaceVariants, scrimOverlayVariants } from '../../lib/variants/overlay'

export const navigationDrawerOverlayVariants = scrimOverlayVariants

export const navigationDrawerContentVariants = cva([
  'fixed inset-y-0 start-0 z-50 flex w-full max-w-[360px] flex-col',
  dialogSurfaceVariants({ variant: 'basic' }),
  'rounded-e-xl border-e border-outline-variant p-2',
  'data-[state=open]:animate-in data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  'data-[state=closed]:slide-out-to-start data-[state=open]:slide-in-from-start',
  'focus:outline-none',
])

export const navigationDrawerHeaderVariants = cva(
  'flex items-center justify-between gap-2 px-2 py-3',
)

export const navigationDrawerItemVariants = cva(
  [
    'm3-interactive',
    'flex w-full items-center gap-3 rounded-full px-4 py-3',
    'md-typescale-label-large text-on-surface',
    '[--m3-state-color:var(--color-on-surface)]',
  ],
  {
    variants: {
      active: {
        true: 'bg-secondary-container text-on-secondary-container [--m3-state-color:var(--color-on-secondary-container)]',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

import { cva } from 'class-variance-authority'

/** M3 scrim overlay — token-based dimming */
export const scrimOverlayVariants = cva(
  'fixed inset-0 z-50 bg-[color-mix(in_srgb,var(--md-sys-color-on-surface)_32%,transparent)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
)

export const dialogSurfaceVariants = cva(
  [
    'bg-surface-container-high text-on-surface',
    'shadow-[0_1px_3px_1px_rgb(0_0_0/0.15),0_1px_2px_0_rgb(0_0_0/0.3)]',
  ],
  {
    variants: {
      variant: {
        basic: 'rounded-xl',
        fullscreen: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'basic',
    },
  },
)

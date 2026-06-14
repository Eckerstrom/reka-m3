import { cva } from 'class-variance-authority'

export const navigationBarVariants = cva([
  'flex h-20 w-full items-stretch justify-around',
  'border-t border-outline-variant bg-surface px-2',
])

export const navigationBarItemVariants = cva(
  [
    'm3-nav-destination',
    'relative flex flex-1 flex-col items-center justify-center gap-1',
    'px-3 py-2',
    'md-typescale-label-medium text-on-surface-variant',
  ],
  {
    variants: {
      active: {
        true: 'text-on-secondary-container',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

export const navigationBarIconContainerVariants = cva(
  [
    'm3-interactive',
    'relative flex h-8 min-w-16 items-center justify-center rounded-full',
    '[--m3-state-color:var(--color-on-surface-variant)]',
  ],
  {
    variants: {
      active: {
        true: '[--m3-state-color:var(--color-on-secondary-container)]',
        false: '',
      },
    },
    defaultVariants: {
      active: false,
    },
  },
)

export const navigationBarIndicatorVariants = cva(
  'absolute inset-0 rounded-full bg-secondary-container',
)

export const navigationBarIconVariants = cva('relative z-[1] size-6', {
  variants: {
    active: {
      true: 'text-on-secondary-container',
      false: 'text-on-surface-variant',
    },
  },
  defaultVariants: {
    active: false,
  },
})

export const navigationBarBadgeVariants = cva([
  'absolute -end-0.5 -top-0.5 z-[2]',
  'flex min-h-4 min-w-4 items-center justify-center rounded-full',
  'bg-error px-1 md-typescale-label-small text-on-error',
])

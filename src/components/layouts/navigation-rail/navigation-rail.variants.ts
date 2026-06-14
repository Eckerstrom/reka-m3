import { cva } from 'class-variance-authority'

export const navigationRailVariants = cva([
  'flex h-full w-20 flex-col',
  'border-e border-outline-variant bg-surface py-3',
])

export const navigationRailHeaderVariants = cva('mb-2 flex flex-col items-center px-3')

export const navigationRailItemsVariants = cva('flex flex-1 flex-col items-stretch gap-1 px-2')

export const navigationRailItemVariants = cva(
  [
    'm3-nav-destination',
    'relative flex flex-col items-center justify-center gap-1',
    'px-3 py-3',
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

export const navigationRailIconContainerVariants = cva(
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

export const navigationRailIndicatorVariants = cva(
  'absolute inset-0 rounded-full bg-secondary-container',
)

export const navigationRailIconVariants = cva('relative z-[1] size-6', {
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

export const navigationRailBadgeVariants = cva([
  'absolute -end-0.5 -top-0.5 z-[2]',
  'flex min-h-4 min-w-4 items-center justify-center rounded-full',
  'bg-error px-1 md-typescale-label-small text-on-error',
])

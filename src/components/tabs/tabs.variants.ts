import { cva } from 'class-variance-authority'

export const tabsListVariants = cva('relative inline-flex items-center gap-1', {
  variants: {
    variant: {
      primary: 'border-b border-outline-variant',
      secondary: 'rounded-full bg-surface-container-high p-1',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const tabsTriggerVariants = cva(
  [
    'm3-interactive',
    'relative inline-flex items-center justify-center px-4 py-3',
    'md-typescale-title-small text-on-surface-variant',
    '[--m3-state-color:var(--color-on-surface-variant)]',
    'outline-none disabled:opacity-38',
  ],
  {
    variants: {
      variant: {
        primary:
          'rounded-none data-[state=active]:text-primary data-[state=active]:[--m3-state-color:var(--color-primary)]',
        secondary:
          'rounded-full data-[state=active]:bg-secondary-container data-[state=active]:text-on-secondary-container data-[state=active]:[--m3-state-color:var(--color-on-secondary-container)]',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export const tabsContentVariants = cva('mt-4 outline-none')

export const tabsIndicatorVariants = cva(
  'absolute bottom-0 h-0.5 bg-primary transition-[left,width] duration-200',
)

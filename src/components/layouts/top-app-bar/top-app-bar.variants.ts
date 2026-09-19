import { cva } from 'class-variance-authority'

export const topAppBarVariants = cva(
  [
    'flex flex-col',
    'pt-[env(safe-area-inset-top)]',
    'border-b border-outline-variant bg-surface px-4',
  ],
  {
    variants: {
      size: {
        small: 'min-h-[calc(4rem+env(safe-area-inset-top))] justify-center',
        // Medium flexible expanded (~112dp) without subtitle
        medium: 'min-h-[calc(7rem+env(safe-area-inset-top))] pb-4',
        // Large flexible expanded (~120dp) without subtitle
        large: 'min-h-[calc(7.5rem+env(safe-area-inset-top))] pb-5',
      },
    },
    defaultVariants: {
      size: 'small',
    },
  },
)

export const topAppBarToolbarVariants = cva('flex min-h-16 items-center gap-2')

export const topAppBarTitleVariants = cva('min-w-0 truncate text-on-surface', {
  variants: {
    size: {
      small: 'flex-1 md-typescale-title-large',
      medium: 'md-typescale-headline-medium',
      large: 'md-typescale-display-small',
    },
    placement: {
      inline: '',
      below: 'mt-auto px-1',
    },
  },
  defaultVariants: {
    size: 'small',
    placement: 'inline',
  },
})

export const topAppBarSubtitleVariants = cva(
  'mt-1 min-w-0 truncate px-1 text-on-surface-variant',
  {
    variants: {
      size: {
        medium: 'md-typescale-label-large',
        large: 'md-typescale-title-medium',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
)

export const topAppBarSectionVariants = cva('flex shrink-0 items-center gap-1')

import { cva } from 'class-variance-authority'

export const progressRootVariants = cva('relative overflow-hidden', {
  variants: {
    variant: {
      linear: 'h-1 w-full rounded-full bg-secondary-container',
      circular: 'inline-flex size-12 items-center justify-center',
    },
  },
  defaultVariants: {
    variant: 'linear',
  },
})

export const progressIndicatorVariants = cva('', {
  variants: {
    variant: {
      linear: 'h-full w-full flex-1 rounded-full bg-primary transition-transform duration-300',
      circular:
        'absolute inset-0 rounded-full border-4 border-secondary-container border-t-primary transition-transform duration-300',
    },
  },
  defaultVariants: {
    variant: 'linear',
  },
})

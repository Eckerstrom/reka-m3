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
      linear:
        'absolute inset-0 origin-left rounded-full bg-primary transition-transform duration-300',
      circular: 'size-full',
    },
  },
  defaultVariants: {
    variant: 'linear',
  },
})

export const progressCircularTrackVariants = cva('stroke-secondary-container')

export const progressCircularIndicatorVariants = cva(
  'stroke-primary transition-[stroke-dashoffset] duration-300',
)

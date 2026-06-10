import { cva } from 'class-variance-authority'

export const dividerVariants = cva('shrink-0 bg-outline-variant', {
  variants: {
    orientation: {
      horizontal: 'h-px w-full',
      vertical: 'h-full w-px min-h-4',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

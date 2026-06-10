import { cva } from 'class-variance-authority'

export const toolbarVariants = cva(
  'flex min-h-16 items-center gap-2 rounded-md bg-surface-container px-4 py-2',
)

export const toolbarSeparatorVariants = cva('mx-1 h-6 w-px shrink-0 bg-outline-variant')

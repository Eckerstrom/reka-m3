import { cva } from 'class-variance-authority'

export const searchRootVariants = cva('relative w-full max-w-md')

export const searchInputVariants = cva(
  [
    'flex h-14 w-full items-center gap-3 rounded-full border border-outline-variant',
    'bg-surface-container-high px-4 text-on-surface',
    'md-typescale-body-large outline-none',
    'focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20',
  ],
)

export const searchContentVariants = cva(
  'z-50 mt-1 max-h-60 overflow-auto rounded-md border border-outline-variant bg-surface-container py-1 shadow-lg',
)

export const searchItemVariants = cva(
  [
    'md-typescale-body-large cursor-default px-4 py-2 text-on-surface outline-none',
    'data-[highlighted]:bg-on-surface/[0.08]',
  ],
)

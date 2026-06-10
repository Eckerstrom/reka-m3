import { cva } from 'class-variance-authority'

export const topAppBarVariants = cva([
  'flex min-h-16 items-center gap-2',
  'border-b border-outline-variant bg-surface-container px-4',
])

export const topAppBarTitleVariants = cva(
  'min-w-0 flex-1 truncate md-typescale-title-large text-on-surface',
)

export const topAppBarSectionVariants = cva('flex shrink-0 items-center gap-1')

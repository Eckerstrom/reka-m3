import { cva } from 'class-variance-authority'

export const tooltipContentVariants = cva(
  [
    'z-50 overflow-hidden rounded-xs border border-outline-variant',
    'bg-on-surface px-3 py-2 text-surface shadow-md',
    'md-typescale-body-small',
    'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
  ],
)

export const tooltipRichContentVariants = cva(
  'z-50 max-w-xs rounded-md border border-outline-variant bg-surface-container-high p-4 shadow-lg',
)

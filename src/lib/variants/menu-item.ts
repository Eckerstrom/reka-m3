import { cva } from 'class-variance-authority'

export const menuContentVariants = cva(
  'z-50 min-w-32 overflow-hidden rounded-md border border-outline-variant bg-surface-container py-1 shadow-lg',
)

export const menuItemVariants = cva(
  [
    'm3-menu-item',
    'md-typescale-body-large',
    'relative flex cursor-default select-none items-center gap-2 rounded-sm px-3 py-2 text-on-surface outline-none',
    'data-[highlighted]:bg-on-surface/[0.08]',
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-38',
  ],
)

export const menuLabelVariants = cva(
  'px-3 py-1.5 md-typescale-label-medium text-on-surface-variant',
)

export const menuSeparatorVariants = cva('-mx-1 my-1 h-px bg-outline-variant')

import { cva } from 'class-variance-authority'
import { menuContentVariants, menuItemVariants } from '../../lib/variants/menu-item'

export const menubarRootVariants = cva(
  'flex h-10 items-center gap-1 rounded-md border border-outline-variant bg-surface-container-low p-1',
)

export const menubarTriggerVariants = cva(
  [
    'm3-interactive',
    'inline-flex items-center rounded-sm px-3 py-1.5',
    'md-typescale-label-large text-on-surface',
    '[--m3-state-color:var(--color-on-surface)]',
    'outline-none data-[state=open]:bg-on-surface/[0.08] data-[highlighted]:bg-on-surface/[0.08]',
  ],
)

export { menuContentVariants as menubarContentVariants, menuItemVariants as menubarItemVariants }

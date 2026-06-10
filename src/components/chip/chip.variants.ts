import { cva } from 'class-variance-authority'
import {
  chipFilterSelectedColorCompounds,
  surfaceColorCompounds,
} from '../../lib/variants/color-roles'

const chipBase = [
  'm3-chip',
  'm3-interactive',
  'inline-flex items-center gap-1 rounded-sm border border-outline-variant',
  'px-3 py-1.5 md-typescale-label-large',
  'transition-colors duration-150',
]

export const chipVariants = cva(chipBase, {
  variants: {
    variant: {
      assist: 'bg-transparent text-on-surface [--m3-state-color:var(--color-on-surface)]',
      filter:
        'bg-transparent text-on-surface-variant [--m3-state-color:var(--color-on-surface-variant)]',
      suggestion:
        'border-none bg-surface-container-low text-on-surface [--m3-state-color:var(--color-on-surface)]',
      elevated: [
        'border-none bg-surface-container-low text-on-surface [--m3-state-color:var(--color-on-surface)]',
        'shadow-[0_1px_2px_rgb(0_0_0/0.3),0_1px_3px_1px_rgb(0_0_0/0.15)]',
      ],
    },
    color: {
      primary: '',
      secondary: '',
      tertiary: '',
      error: '',
    },
  },
  compoundVariants: [
    ...surfaceColorCompounds('text').map(({ color, class: colorClass }) => ({
      variant: 'assist' as const,
      color,
      class: colorClass,
    })),
    ...chipFilterSelectedColorCompounds(),
  ],
  defaultVariants: {
    variant: 'assist',
    color: 'primary',
  },
})

export const chipInputRootVariants = cva(
  'flex min-h-10 flex-wrap items-center gap-2 rounded-sm border border-outline bg-transparent px-3 py-2',
)

export const chipInputItemVariants = cva(
  'inline-flex items-center gap-1 rounded-sm bg-secondary-container px-2 py-1 md-typescale-label-large text-on-secondary-container',
)

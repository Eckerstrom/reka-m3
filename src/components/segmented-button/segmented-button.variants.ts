import { cva, type VariantProps } from 'class-variance-authority'
import { segmentedSelectedColorCompounds } from '../../lib/variants/color-roles'

export const segmentedButtonRootVariants = cva(
  ['m3-segmented-button inline-flex overflow-hidden rounded-full border border-outline bg-transparent'],
  {
    variants: {
      color: {
        primary: '',
        secondary: '',
        tertiary: '',
        error: '',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
)

export const segmentedButtonItemVariants = cva(
  [
    'm3-segmented-button__item',
    'm3-interactive',
    'md-typescale-label-large',
    'inline-flex min-h-10 flex-1 items-center justify-center gap-2 bg-transparent px-4',
    'border-r border-outline text-on-surface [--m3-state-color:var(--color-on-surface)]',
    'last:border-r-0',
  ],
  {
    variants: {
      color: {
        primary: '',
        secondary: '',
        tertiary: '',
        error: '',
      },
    },
    compoundVariants: segmentedSelectedColorCompounds().map(({ color, class: className }) => ({
      color,
      class: className,
    })),
    defaultVariants: {
      color: 'primary',
    },
  },
)

export type SegmentedButtonRootVariantProps = VariantProps<typeof segmentedButtonRootVariants>
export type SegmentedButtonItemVariantProps = VariantProps<typeof segmentedButtonItemVariants>

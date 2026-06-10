import { cva, type VariantProps } from 'class-variance-authority'
import {
  filledColorCompounds,
  filledElevatedOnColorCompounds,
  surfaceColorCompounds,
  tonalColorCompounds,
} from '../../lib/variants/color-roles'

const elevatedShadow =
  'shadow-[0_1px_2px_rgb(0_0_0/0.3),0_1px_3px_1px_rgb(0_0_0/0.15)] hover:shadow-[0_1px_2px_rgb(0_0_0/0.3),0_2px_6px_2px_rgb(0_0_0/0.15)]'

export const buttonVariants = cva(
  [
    'm3-button',
    'm3-interactive',
    'md-typescale-label-large',
    'inline-flex items-center justify-center gap-2',
    'rounded-full overflow-hidden',
    'transition-[box-shadow,background-color] duration-150',
  ],
  {
    variants: {
      variant: {
        filled: 'border-none',
        tonal: 'border-none',
        outlined: 'border border-outline bg-transparent',
        text: 'border-none bg-transparent',
        elevated: ['border-none bg-surface-container-low', elevatedShadow],
      },
      color: {
        primary: '',
        secondary: '',
        tertiary: '',
        error: '',
      },
      size: {
        sm: 'min-h-8 px-3 md-typescale-label-medium',
        md: 'min-h-10 px-6',
        lg: 'min-h-12 px-8',
      },
    },
    compoundVariants: [
      ...filledColorCompounds('filled'),
      ...tonalColorCompounds('tonal'),
      ...surfaceColorCompounds('outlined'),
      ...surfaceColorCompounds('text'),
      ...surfaceColorCompounds('elevated'),
      ...filledElevatedOnColorCompounds(),
    ],
    defaultVariants: {
      variant: 'filled',
      color: 'primary',
      size: 'md',
    },
  },
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

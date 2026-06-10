import { cva, type VariantProps } from 'class-variance-authority'
import {
  iconFilledColorCompounds,
  iconFilledTonalColorCompounds,
  iconOutlinedColorCompounds,
  iconStandardColorCompounds,
} from '../../lib/variants/color-roles'

export const iconButtonVariants = cva(
  [
    'm3-icon-button',
    'm3-interactive',
    'inline-flex shrink-0 items-center justify-center',
    'rounded-full overflow-hidden',
  ],
  {
    variants: {
      variant: {
        standard: 'border-none bg-transparent',
        filled: 'border-none',
        'filled-tonal': 'border-none',
        outlined: 'border border-outline bg-transparent',
      },
      color: {
        primary: '',
        secondary: '',
        tertiary: '',
        error: '',
      },
      size: {
        sm: 'size-8',
        md: 'size-10',
        lg: 'size-12',
      },
    },
    compoundVariants: [
      ...iconStandardColorCompounds(),
      ...iconFilledColorCompounds(),
      ...iconFilledTonalColorCompounds(),
      ...iconOutlinedColorCompounds(),
    ],
    defaultVariants: {
      variant: 'standard',
      color: 'primary',
      size: 'md',
    },
  },
)

export type IconButtonVariantProps = VariantProps<typeof iconButtonVariants>

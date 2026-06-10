import { cva, type VariantProps } from 'class-variance-authority'
import { fabColorCompounds } from '../../lib/variants/color-roles'

const fabShadow =
  'shadow-[0_3px_5px_-1px_rgb(0_0_0/0.2),0_6px_10px_0_rgb(0_0_0/0.14),0_1px_18px_0_rgb(0_0_0/0.12)] hover:shadow-[0_5px_5px_-3px_rgb(0_0_0/0.2),0_8px_10px_1px_rgb(0_0_0/0.14),0_3px_14px_2px_rgb(0_0_0/0.12)]'

export const fabVariants = cva(
  [
    'm3-fab',
    'm3-interactive',
    'inline-flex shrink-0 items-center justify-center',
    'overflow-hidden rounded-lg',
    'transition-[box-shadow] duration-150',
    fabShadow,
  ],
  {
    variants: {
      color: {
        primary: '',
        secondary: '',
        tertiary: '',
        surface: '',
      },
      size: {
        sm: 'size-10',
        md: 'size-14',
        lg: 'size-24',
      },
    },
    compoundVariants: fabColorCompounds(),
    defaultVariants: {
      color: 'primary',
      size: 'md',
    },
  },
)

export type FabVariantProps = VariantProps<typeof fabVariants>

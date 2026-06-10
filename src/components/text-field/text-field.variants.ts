import { cva, type VariantProps } from 'class-variance-authority'

export const textFieldVariants = cva(['m3-text-field flex w-full max-w-md flex-col gap-1'], {
  variants: {
    variant: {
      filled: '',
      outlined: '',
    },
    error: {
      true: '',
      false: '',
    },
    disabled: {
      true: 'opacity-38',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'filled',
    error: false,
    disabled: false,
  },
})

export const textFieldContainerVariants = cva(
  [
    'm3-text-field__container relative transition-colors',
    'focus-within:border-primary',
  ],
  {
    variants: {
      variant: {
        filled: [
          'rounded-t-sm border-b border-on-surface-variant bg-surface-container-highest px-4 pt-6 pb-2',
          'focus-within:border-b-2',
        ],
        outlined: [
          'rounded-sm border border-outline-variant px-4 py-2',
          'focus-within:border-2',
        ],
      },
      error: {
        true: 'border-error focus-within:border-error',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'filled',
        error: true,
        class: 'border-b-error focus-within:border-b-error',
      },
    ],
    defaultVariants: {
      variant: 'filled',
      error: false,
    },
  },
)

export type TextFieldVariantProps = VariantProps<typeof textFieldVariants>
export type TextFieldContainerVariantProps = VariantProps<typeof textFieldContainerVariants>

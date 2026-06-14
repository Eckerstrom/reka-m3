import { cva, type VariantProps } from 'class-variance-authority'

export const fieldRootVariants = cva(['m3-field flex w-full max-w-md flex-col gap-1'], {
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

export const fieldContainerVariants = cva(
  [
    'm3-field__container relative transition-colors',
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

export const fieldLabelVariants = cva(
  'm3-field__label pointer-events-none absolute start-4 top-2 transition-all md-typescale-body-small text-on-surface-variant',
)

export const fieldSupportTextVariants = cva('px-4 md-typescale-body-small', {
  variants: {
    error: {
      true: 'text-error',
      false: 'text-on-surface-variant',
    },
  },
  defaultVariants: {
    error: false,
  },
})

export type FieldRootVariantProps = VariantProps<typeof fieldRootVariants>
export type FieldContainerVariantProps = VariantProps<typeof fieldContainerVariants>
export type FieldSupportTextVariantProps = VariantProps<typeof fieldSupportTextVariants>

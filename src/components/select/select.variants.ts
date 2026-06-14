import { cva, type VariantProps } from 'class-variance-authority'

export { textFieldContainerVariants as selectContainerVariants, textFieldVariants as selectRootVariants } from '../text-field/text-field.variants'

export const selectTriggerVariants = cva([
  'm3-select__trigger',
  'flex w-full items-center gap-2 border-0 bg-transparent px-0 pb-0 text-start outline-none',
  'md-typescale-body-large text-on-surface',
  'disabled:cursor-not-allowed',
  '[&_[data-placeholder]]:text-on-surface-variant',
], {
  variants: {
    variant: {
      filled: 'pt-0',
      outlined: 'pt-4',
    },
  },
  defaultVariants: {
    variant: 'filled',
  },
})

export const selectContentVariants = cva(
  'z-50 min-w-32 overflow-hidden rounded-md border border-outline-variant bg-surface-container py-1 shadow-lg',
)

export const selectItemVariants = cva([
  'm3-select-item',
  'md-typescale-body-large',
  'relative flex cursor-default select-none items-center gap-2 rounded-sm px-3 py-2 text-on-surface outline-none',
  'data-[highlighted]:bg-on-surface/[0.08]',
  'data-[state=checked]:bg-on-surface/[0.08]',
  'data-[disabled]:pointer-events-none data-[disabled]:opacity-38',
])

export type SelectTriggerVariantProps = VariantProps<typeof selectTriggerVariants>
export type SelectContentVariantProps = VariantProps<typeof selectContentVariants>
export type SelectItemVariantProps = VariantProps<typeof selectItemVariants>

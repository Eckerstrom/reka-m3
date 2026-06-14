import type { VariantProps } from 'class-variance-authority'
import { fieldContainerVariants, fieldRootVariants } from '../field/field.variants'

export const textFieldVariants = fieldRootVariants
export const textFieldContainerVariants = fieldContainerVariants

export type TextFieldVariantProps = VariantProps<typeof fieldRootVariants>
export type TextFieldContainerVariantProps = VariantProps<typeof fieldContainerVariants>

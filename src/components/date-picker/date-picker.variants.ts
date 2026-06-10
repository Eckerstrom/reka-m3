import { cva } from 'class-variance-authority'

export const datePickerFieldVariants = cva(
  'inline-flex min-h-14 items-center gap-2 rounded-xs border border-outline bg-surface-container-high px-4',
)

export const datePickerInputVariants = cva(
  'md-typescale-body-large text-on-surface outline-none',
)

export const datePickerTriggerVariants = cva(
  'm3-interactive inline-flex size-10 items-center justify-center rounded-full text-on-surface-variant [--m3-state-color:var(--color-on-surface-variant)]',
)

export const datePickerContentVariants = cva(
  'z-50 rounded-md border border-outline-variant bg-surface-container p-4 shadow-lg',
)

export const datePickerCalendarVariants = cva('space-y-4')

export const datePickerHeaderVariants = cva('flex items-center justify-between gap-2')

export const datePickerNavButtonVariants = cva(
  'm3-interactive inline-flex size-10 items-center justify-center rounded-full text-on-surface [--m3-state-color:var(--color-on-surface)]',
)

export const datePickerHeadingVariants = cva('md-typescale-title-small text-on-surface')

export const datePickerCellTriggerVariants = cva(
  [
    'm3-interactive inline-flex size-10 items-center justify-center rounded-full',
    'md-typescale-body-large text-on-surface [--m3-state-color:var(--color-on-surface)]',
    'data-[selected]:bg-primary data-[selected]:text-on-primary data-[selected]:[--m3-state-color:var(--color-on-primary)]',
    'data-[disabled]:opacity-38 data-[outside-view]:text-on-surface-variant/50',
  ],
)

export const datePickerHeadCellVariants = cva(
  'size-10 md-typescale-label-small text-on-surface-variant',
)

export const timeFieldRootVariants = cva(
  'inline-flex min-h-14 items-center gap-1 rounded-xs border border-outline bg-surface-container-high px-4',
)

export const timeFieldInputVariants = cva(
  'md-typescale-body-large text-on-surface outline-none data-[placeholder]:text-on-surface-variant',
)

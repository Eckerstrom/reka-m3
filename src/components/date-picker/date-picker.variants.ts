import { cva } from 'class-variance-authority'

/** Docked date field — M3 filled surface with clear focus. */
export const datePickerFieldVariants = cva(
  [
    'm3-date-picker__field',
    'inline-flex min-h-14 w-full items-center gap-1 rounded-t-sm',
    'border-b border-on-surface-variant bg-surface-container-highest px-3',
    'focus-within:border-primary focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary',
  ],
)

export const datePickerInputVariants = cva(
  'md-typescale-body-large tabular-nums text-on-surface outline-none data-[placeholder]:text-on-surface-variant',
)

export const datePickerTriggerVariants = cva(
  [
    'm3-interactive inline-flex size-10 shrink-0 items-center justify-center rounded-full',
    'text-on-surface-variant [--m3-state-color:var(--color-on-surface-variant)]',
  ],
)

/** Docked calendar popover surface (M3 menu / docked picker). */
export const datePickerContentVariants = cva(
  [
    'z-[1100] w-[min(100vw-2rem,22.5rem)] rounded-xl border-0 bg-surface-container-high p-3',
    'shadow-[0_1px_3px_1px_rgb(0_0_0/0.15),0_1px_2px_rgb(0_0_0/0.3)]',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
  ],
)

export const datePickerCalendarVariants = cva('space-y-2')

export const datePickerHeaderVariants = cva('flex items-center justify-between gap-1 px-1')

export const datePickerNavButtonVariants = cva(
  [
    'm3-interactive inline-flex size-10 items-center justify-center rounded-full',
    'text-on-surface [--m3-state-color:var(--color-on-surface)]',
  ],
)

export const datePickerHeadingVariants = cva(
  'flex-1 text-center md-typescale-title-small text-on-surface',
)

export const datePickerCellTriggerVariants = cva(
  [
    'm3-interactive inline-flex size-10 items-center justify-center rounded-full',
    'md-typescale-body-large text-on-surface [--m3-state-color:var(--color-on-surface)]',
    'data-[selected]:bg-primary data-[selected]:text-on-primary data-[selected]:[--m3-state-color:var(--color-on-primary)]',
    'data-[today]:border data-[today]:border-primary',
    'data-[disabled]:opacity-38 data-[outside-view]:text-on-surface-variant/50',
    'data-[unavailable]:line-through data-[unavailable]:opacity-38',
  ],
)

export const datePickerHeadCellVariants = cva(
  'size-10 text-center md-typescale-label-small text-on-surface-variant',
)

export const datePickerLabelVariants = cva(
  'mb-1 md-typescale-body-small text-on-surface-variant',
)

/** @deprecated Kept for any consumers that imported time field styles from date-picker. */
export const timeFieldRootVariants = cva(
  [
    'inline-flex min-h-14 w-full items-center gap-1 rounded-t-sm',
    'border-b border-on-surface-variant bg-surface-container-highest px-4',
    'focus-within:border-primary focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary',
  ],
)

/** @deprecated */
export const timeFieldInputVariants = cva(
  'md-typescale-body-large text-on-surface outline-none data-[placeholder]:text-on-surface-variant',
)

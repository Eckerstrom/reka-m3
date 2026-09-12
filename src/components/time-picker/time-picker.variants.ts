import { cva } from 'class-variance-authority'

/** Trigger field that opens the time picker dialog — aligned with M3 filled field. */
export const timePickerFieldVariants = cva(
  [
    'm3-time-picker__field',
    'm3-interactive inline-flex min-h-14 w-full items-center gap-2 rounded-t-sm',
    'border-b border-on-surface-variant bg-surface-container-highest px-4',
    'text-start md-typescale-body-large text-on-surface',
    '[--m3-state-color:var(--color-on-surface)]',
    'focus-visible:border-primary focus-visible:outline-none',
    'focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary',
    'disabled:cursor-not-allowed disabled:opacity-38',
  ],
)

export const timePickerFieldValueVariants = cva(
  'flex-1 tabular-nums tracking-wide text-on-surface',
)

export const timePickerFieldIconVariants = cva(
  'inline-flex size-10 shrink-0 items-center justify-center rounded-full text-on-surface-variant',
)

export const timePickerDialogVariants = cva(
  'w-[min(100%,22.5rem)] max-w-[22.5rem] gap-3 p-6 sm:w-[22.5rem]',
)

export const timePickerHeadlineVariants = cva(
  'md-typescale-label-medium text-on-surface-variant',
)

export const timePickerDisplayVariants = cva(
  'flex items-center justify-center gap-1 py-2',
)

export const timePickerDisplaySegmentVariants = cva(
  [
    'm3-interactive inline-flex min-h-16 min-w-[5.5rem] items-center justify-center rounded-sm',
    'bg-surface-container-highest px-3 md-typescale-display-large tabular-nums text-on-surface',
    '[--m3-state-color:var(--color-on-surface)]',
    'data-[active=true]:bg-primary-container data-[active=true]:text-on-primary-container',
    'data-[active=true]:[--m3-state-color:var(--color-on-primary-container)]',
  ],
)

export const timePickerDisplaySeparatorVariants = cva(
  'md-typescale-display-large text-on-surface',
)

export const timePickerPeriodVariants = cva(
  'ms-2 flex flex-col overflow-hidden rounded-sm border border-outline',
)

export const timePickerPeriodButtonVariants = cva(
  [
    'm3-interactive min-h-8 min-w-[3.25rem] px-2 md-typescale-title-medium text-on-surface-variant',
    '[--m3-state-color:var(--color-on-surface-variant)]',
    'data-[active=true]:bg-tertiary-container data-[active=true]:text-on-tertiary-container',
    'data-[active=true]:[--m3-state-color:var(--color-on-tertiary-container)]',
  ],
)

export const timePickerDialVariants = cva(
  'relative mx-auto size-64 shrink-0 overflow-hidden rounded-full bg-surface-container-highest',
)

export const timePickerDialNumberVariants = cva(
  [
    // !absolute — .m3-interactive sets position:relative and would otherwise break the circle
    '!absolute z-[1] flex size-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer',
    'items-center justify-center rounded-full border-0 bg-transparent',
    'md-typescale-body-large text-on-surface',
    'hover:bg-on-surface/8 focus-visible:outline focus-visible:outline-2',
    'focus-visible:outline-offset-2 focus-visible:outline-primary',
    'data-[selected=true]:bg-primary data-[selected=true]:text-on-primary',
    'data-[selected=true]:hover:bg-primary',
  ],
)

export const timePickerInputGridVariants = cva(
  'mx-auto grid w-full max-w-[16rem] grid-cols-[1fr_auto_1fr] items-center gap-2 py-6',
)

export const timePickerInputBoxVariants = cva(
  [
    'inline-flex min-h-16 min-w-[5.5rem] flex-col items-center justify-center rounded-sm',
    'bg-surface-container-highest px-3 py-2',
    'focus-within:outline focus-within:outline-2 focus-within:outline-primary',
  ],
)

export const timePickerInputFieldVariants = cva(
  [
    'w-full bg-transparent text-center md-typescale-display-medium tabular-nums text-on-surface',
    'outline-none',
  ],
)

export const timePickerActionsVariants = cva(
  'mt-2 flex items-center justify-between gap-2',
)

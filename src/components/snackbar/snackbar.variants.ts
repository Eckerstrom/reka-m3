import { cva } from 'class-variance-authority'

export const snackbarViewportVariants = cva(
  'fixed bottom-4 left-1/2 z-[100] flex max-h-screen w-full max-w-md -translate-x-1/2 flex-col gap-2 p-4',
)

export const snackbarRootVariants = cva(
  [
    'pointer-events-auto flex w-full items-center justify-between gap-4 rounded-xs px-4 py-3',
    'bg-on-surface text-surface shadow-lg',
    'md-typescale-body-medium',
  ],
)

export const snackbarActionVariants = cva(
  'm3-interactive shrink-0 md-typescale-label-large text-secondary-container [--m3-state-color:var(--color-secondary-container)]',
)

export const snackbarTitleVariants = cva('flex-1')

export const snackbarDescriptionVariants = cva('text-surface/80 md-typescale-body-small')

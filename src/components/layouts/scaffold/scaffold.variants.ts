import { cva } from 'class-variance-authority'

export const scaffoldVariants = cva([
  'flex h-full min-h-dvh flex-col',
  'pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]',
  'bg-surface text-on-surface',
])

export const scaffoldTopBarVariants = cva('shrink-0')

export const scaffoldBodyVariants = cva('flex min-h-0 min-w-0 flex-1 overflow-hidden')

export const scaffoldPaneColumnVariants = cva('flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden')

export const scaffoldPaneVariants = cva('min-h-0 flex-1 overflow-auto')

export const scaffoldNavRailVariants = cva('shrink-0')

export const scaffoldRailEndVariants = cva('shrink-0')

export const scaffoldRailBottomVariants = cva('shrink-0')

export const scaffoldBottomBarVariants = cva('shrink-0')

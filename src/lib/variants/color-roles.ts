import type { ColorRole } from '../../types/color'

export const COLOR_ROLES = ['primary', 'secondary', 'tertiary', 'error'] as const satisfies readonly ColorRole[]

type ButtonVariantName = 'filled' | 'tonal' | 'outlined' | 'text' | 'elevated'
type IconButtonVariantName = 'standard' | 'filled' | 'filled-tonal' | 'outlined'
type FabVariantColor = 'primary' | 'secondary' | 'tertiary' | 'surface'

type ColorCompoundVariant<V extends string> = {
  variant: V
  color: ColorRole
  class: string
}

type FabColorCompoundVariant = {
  color: FabVariantColor
  class: string
}

/** filled + color → bg, text, and --m3-state-color */
export function filledColorCompounds(variant: 'filled'): ColorCompoundVariant<'filled'>[] {
  return [
    {
      variant,
      color: 'primary',
      class: 'bg-primary text-on-primary [--m3-state-color:var(--color-on-primary)]',
    },
    {
      variant,
      color: 'secondary',
      class: 'bg-secondary text-on-secondary [--m3-state-color:var(--color-on-secondary)]',
    },
    {
      variant,
      color: 'tertiary',
      class: 'bg-tertiary text-on-tertiary [--m3-state-color:var(--color-on-tertiary)]',
    },
    {
      variant,
      color: 'error',
      class: 'bg-error text-on-error [--m3-state-color:var(--color-on-error)]',
    },
  ]
}

/** tonal + color → container bg/text + --m3-state-color */
export function tonalColorCompounds(variant: 'tonal'): ColorCompoundVariant<'tonal'>[]
export function tonalColorCompounds(variant: 'filled-tonal'): ColorCompoundVariant<'filled-tonal'>[]
export function tonalColorCompounds(
  variant: 'tonal' | 'filled-tonal',
): ColorCompoundVariant<'tonal' | 'filled-tonal'>[] {
  return [
    {
      variant,
      color: 'primary',
      class:
        'bg-primary-container text-on-primary-container [--m3-state-color:var(--color-on-primary-container)]',
    },
    {
      variant,
      color: 'secondary',
      class:
        'bg-secondary-container text-on-secondary-container [--m3-state-color:var(--color-on-secondary-container)]',
    },
    {
      variant,
      color: 'tertiary',
      class:
        'bg-tertiary-container text-on-tertiary-container [--m3-state-color:var(--color-on-tertiary-container)]',
    },
    {
      variant,
      color: 'error',
      class:
        'bg-error-container text-on-error-container [--m3-state-color:var(--color-on-error-container)]',
    },
  ]
}

/** outlined / text / elevated + color → role text + --m3-state-color */
export function surfaceColorCompounds(variant: 'outlined'): ColorCompoundVariant<'outlined'>[]
export function surfaceColorCompounds(variant: 'text'): ColorCompoundVariant<'text'>[]
export function surfaceColorCompounds(variant: 'elevated'): ColorCompoundVariant<'elevated'>[]
export function surfaceColorCompounds(
  variant: 'outlined' | 'text' | 'elevated',
): ColorCompoundVariant<'outlined' | 'text' | 'elevated'>[] {
  return [
    {
      variant,
      color: 'primary',
      class: 'text-primary [--m3-state-color:var(--color-primary)]',
    },
    {
      variant,
      color: 'secondary',
      class: 'text-secondary [--m3-state-color:var(--color-secondary)]',
    },
    {
      variant,
      color: 'tertiary',
      class: 'text-tertiary [--m3-state-color:var(--color-tertiary)]',
    },
    {
      variant,
      color: 'error',
      class: 'text-error [--m3-state-color:var(--color-error)]',
    },
  ]
}

/** filled + elevated share on-{color} text (preserves legacy matrix) */
export function filledElevatedOnColorCompounds(): Array<
  ColorCompoundVariant<'filled' | 'elevated'>
> {
  const onColorClasses: Record<ColorRole, string> = {
    primary: 'text-on-primary [--m3-state-color:var(--color-on-primary)]',
    secondary: 'text-on-secondary [--m3-state-color:var(--color-on-secondary)]',
    tertiary: 'text-on-tertiary [--m3-state-color:var(--color-on-tertiary)]',
    error: 'text-on-error [--m3-state-color:var(--color-on-error)]',
  }

  return COLOR_ROLES.flatMap((color) => [
    { variant: 'filled' as const, color, class: onColorClasses[color] },
    { variant: 'elevated' as const, color, class: onColorClasses[color] },
  ])
}

/** icon button standard variant color tints */
export function iconStandardColorCompounds(): ColorCompoundVariant<'standard'>[] {
  return [
    {
      variant: 'standard',
      color: 'primary',
      class: 'text-on-surface-variant [--m3-state-color:var(--color-on-surface-variant)]',
    },
    {
      variant: 'standard',
      color: 'secondary',
      class: 'text-secondary [--m3-state-color:var(--color-secondary)]',
    },
    {
      variant: 'standard',
      color: 'tertiary',
      class: 'text-tertiary [--m3-state-color:var(--color-tertiary)]',
    },
    {
      variant: 'standard',
      color: 'error',
      class: 'text-error [--m3-state-color:var(--color-error)]',
    },
  ]
}

/** icon button filled-tonal uses same matrix as button tonal */
export function iconFilledTonalColorCompounds(): ColorCompoundVariant<'filled-tonal'>[] {
  return tonalColorCompounds('filled-tonal')
}

/** icon button filled uses same matrix as button filled */
export function iconFilledColorCompounds(): ColorCompoundVariant<'filled'>[] {
  return filledColorCompounds('filled')
}

/** icon button outlined uses same matrix as button surface colors */
export function iconOutlinedColorCompounds(): ColorCompoundVariant<'outlined'>[] {
  return surfaceColorCompounds('outlined')
}

/** FAB container colors (primary | secondary | tertiary | surface) */
export function fabColorCompounds(): FabColorCompoundVariant[] {
  return [
    {
      color: 'primary',
      class:
        'bg-primary-container text-on-primary-container [--m3-state-color:var(--color-on-primary-container)]',
    },
    {
      color: 'secondary',
      class:
        'bg-secondary-container text-on-secondary-container [--m3-state-color:var(--color-on-secondary-container)]',
    },
    {
      color: 'tertiary',
      class:
        'bg-tertiary-container text-on-tertiary-container [--m3-state-color:var(--color-on-tertiary-container)]',
    },
    {
      color: 'surface',
      class: 'bg-surface-container-high text-primary [--m3-state-color:var(--color-primary)]',
    },
  ]
}

/** segmented button selected (data-state=on) colors per color role */
export function segmentedSelectedColorCompounds(): Array<{ color: ColorRole; class: string }> {
  return [
    {
      color: 'primary',
      class:
        'data-[state=on]:bg-secondary-container data-[state=on]:text-on-secondary-container data-[state=on]:[--m3-state-color:var(--color-on-secondary-container)]',
    },
    {
      color: 'secondary',
      class:
        'data-[state=on]:bg-secondary-container data-[state=on]:text-on-secondary-container data-[state=on]:[--m3-state-color:var(--color-on-secondary-container)]',
    },
    {
      color: 'tertiary',
      class:
        'data-[state=on]:bg-tertiary-container data-[state=on]:text-on-tertiary-container data-[state=on]:[--m3-state-color:var(--color-on-tertiary-container)]',
    },
    {
      color: 'error',
      class:
        'data-[state=on]:bg-error-container data-[state=on]:text-on-error-container data-[state=on]:[--m3-state-color:var(--color-on-error-container)]',
    },
  ]
}

/** filter chip selected (data-state=on) colors */
export function chipFilterSelectedColorCompounds(): Array<{ color: ColorRole; class: string }> {
  return [
    {
      color: 'primary',
      class:
        'data-[state=on]:border-primary data-[state=on]:bg-secondary-container data-[state=on]:text-on-secondary-container data-[state=on]:[--m3-state-color:var(--color-on-secondary-container)]',
    },
    {
      color: 'secondary',
      class:
        'data-[state=on]:border-secondary data-[state=on]:bg-secondary-container data-[state=on]:text-on-secondary-container data-[state=on]:[--m3-state-color:var(--color-on-secondary-container)]',
    },
    {
      color: 'tertiary',
      class:
        'data-[state=on]:border-tertiary data-[state=on]:bg-tertiary-container data-[state=on]:text-on-tertiary-container data-[state=on]:[--m3-state-color:var(--color-on-tertiary-container)]',
    },
    {
      color: 'error',
      class:
        'data-[state=on]:border-error data-[state=on]:bg-error-container data-[state=on]:text-on-error-container data-[state=on]:[--m3-state-color:var(--color-on-error-container)]',
    },
  ]
}

export type { ButtonVariantName, FabVariantColor, IconButtonVariantName }

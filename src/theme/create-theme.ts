import { argbFromHex, themeFromSourceColor } from '@material/material-color-utilities'
import { defaultDarkColor, defaultTheme } from './default-theme'
import type {
  ColorScheme,
  PartialThemeConfig,
  ThemeConfig,
  TypographyScaleName,
  TypographyStyle,
} from './types'

const colorKeys = Object.keys(defaultTheme.color) as (keyof ColorScheme)[]

const typographyScaleNames: TypographyScaleName[] = [
  'displayLarge',
  'displayMedium',
  'displaySmall',
  'headlineLarge',
  'headlineMedium',
  'headlineSmall',
  'titleLarge',
  'titleMedium',
  'titleSmall',
  'bodyLarge',
  'bodyMedium',
  'bodySmall',
  'labelLarge',
  'labelMedium',
  'labelSmall',
]

function camelToKebab(value: string): string {
  return value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function typographyScaleToCssPrefix(name: TypographyScaleName): string {
  return `--md-sys-typescale-${camelToKebab(name)}`
}

function argbToHex(argb: number): string {
  const r = (argb >> 16) & 0xff
  const g = (argb >> 8) & 0xff
  const b = argb & 0xff
  return `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`
}

function mergeTypographyStyle(
  base: TypographyStyle,
  override?: Partial<TypographyStyle>,
): TypographyStyle {
  return { ...base, ...override }
}

export function createTheme(overrides: PartialThemeConfig = {}): ThemeConfig {
  const typography = { ...defaultTheme.typography }

  if (overrides.typography?.brand !== undefined) {
    typography.brand = overrides.typography.brand
  }
  if (overrides.typography?.plain !== undefined) {
    typography.plain = overrides.typography.plain
  }

  for (const name of typographyScaleNames) {
    typography[name] = mergeTypographyStyle(
      defaultTheme.typography[name],
      overrides.typography?.[name],
    )
  }

  return {
    color: { ...defaultTheme.color, ...overrides.color },
    typography,
    shape: { ...defaultTheme.shape, ...overrides.shape },
  }
}

export function themeToCssVars(theme: ThemeConfig): Record<string, string> {
  const vars: Record<string, string> = {}

  for (const key of colorKeys) {
    vars[`--md-sys-color-${camelToKebab(key)}`] = theme.color[key]
  }

  vars['--md-ref-typeface-brand'] = theme.typography.brand
  vars['--md-ref-typeface-plain'] = theme.typography.plain

  for (const name of typographyScaleNames) {
    const style = theme.typography[name]
    const prefix = typographyScaleToCssPrefix(name)
    vars[`${prefix}-font`] = style.font
    vars[`${prefix}-size`] = style.size
    vars[`${prefix}-line-height`] = style.lineHeight
    vars[`${prefix}-weight`] = style.weight
    vars[`${prefix}-letter-spacing`] = style.letterSpacing
  }

  for (const [key, value] of Object.entries(theme.shape)) {
    vars[`--md-sys-shape-corner-${camelToKebab(key)}`] = value
  }

  return vars
}

export function createThemeFromSeed(seed: string, scheme: 'light' | 'dark' = 'light'): ThemeConfig {
  const materialTheme = themeFromSourceColor(argbFromHex(seed))
  const palette = materialTheme.schemes[scheme]

  const color = {} as ColorScheme
  for (const key of colorKeys) {
    color[key] = argbToHex(palette[key as keyof typeof palette] as number)
  }

  return createTheme({ color })
}

export function darkColorToCssVars(): Record<string, string> {
  const vars: Record<string, string> = {}
  for (const key of colorKeys) {
    vars[`--md-sys-color-${camelToKebab(key)}`] = defaultDarkColor[key]
  }
  return vars
}

export type ColorScheme = {
  primary: string
  onPrimary: string
  primaryContainer: string
  onPrimaryContainer: string
  secondary: string
  onSecondary: string
  secondaryContainer: string
  onSecondaryContainer: string
  tertiary: string
  onTertiary: string
  tertiaryContainer: string
  onTertiaryContainer: string
  error: string
  onError: string
  errorContainer: string
  onErrorContainer: string
  background: string
  onBackground: string
  surface: string
  onSurface: string
  surfaceVariant: string
  onSurfaceVariant: string
  outline: string
  outlineVariant: string
  surfaceContainerLowest: string
  surfaceContainerLow: string
  surfaceContainer: string
  surfaceContainerHigh: string
  surfaceContainerHighest: string
}

export type TypographyStyle = {
  font: string
  size: string
  lineHeight: string
  weight: string
  letterSpacing: string
}

export type TypographyScaleName =
  | 'displayLarge'
  | 'displayMedium'
  | 'displaySmall'
  | 'headlineLarge'
  | 'headlineMedium'
  | 'headlineSmall'
  | 'titleLarge'
  | 'titleMedium'
  | 'titleSmall'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodySmall'
  | 'labelLarge'
  | 'labelMedium'
  | 'labelSmall'

export type TypographyConfig = {
  brand: string
  plain: string
} & Record<TypographyScaleName, TypographyStyle>

export type ShapeConfig = {
  none: string
  extraSmall: string
  small: string
  medium: string
  large: string
  extraLarge: string
  full: string
}

export type ThemeConfig = {
  color: ColorScheme
  typography: TypographyConfig
  shape: ShapeConfig
}

export type PartialThemeConfig = {
  color?: Partial<ColorScheme>
  typography?: Partial<Pick<TypographyConfig, 'brand' | 'plain'>> &
    Partial<Record<TypographyScaleName, Partial<TypographyStyle>>>
  shape?: Partial<ShapeConfig>
}

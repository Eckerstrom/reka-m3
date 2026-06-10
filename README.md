# Reka + M3

Accessible Vue components built on [Reka UI](https://reka-ui.com) and styled with [Material Design 3](https://m3.material.io) tokens using [Tailwind CSS](https://tailwindcss.com).

## Prerequisites

- Node.js 20+ (or Bun)

## Development

Start the component playground:

```bash
bun run dev
```

Other scripts:

```bash
bun run build      # Vite build (playground)
bun run typecheck  # vue-tsc --noEmit
```

## Using components

```ts
import {
  M3Button,
  M3IconButton,
  M3TextField,
  M3Checkbox,
  M3RadioGroup,
  M3Switch,
  M3Slider,
} from 'reka-m3'
```

Per-component imports are also supported:

```ts
import { M3Button } from 'reka-m3/components/button'
import { M3TextField } from 'reka-m3/components/text-field'
```

### Buttons and forms

| Export | Description |
|--------|-------------|
| `M3Button` | Filled, tonal, outlined, text, elevated variants |
| `M3FilledButton`, `M3TonalButton`, … | Variant aliases for `M3Button` |
| `M3IconButton` | Standard, filled, filled-tonal, outlined |
| `M3SegmentedButton` | Single-select toggle group |
| `M3SplitButton` | Primary action + dropdown menu |
| `M3ButtonGroup` | Layout wrapper for connected buttons |
| `M3Fab` | Floating action button |
| `M3ExtendedFab` | FAB with icon + label |
| `M3FabMenu` | Speed-dial FAB menu |
| `M3TextField` | Filled / outlined text input |
| `M3Checkbox`, `M3CheckboxGroup` | Checkbox with indeterminate support |
| `M3Radio`, `M3RadioGroup` | Radio button group |
| `M3Switch` | Toggle switch |
| `M3Slider` | Range slider with optional value label |

### Dialogs, navigation, and feedback

| Export | Description |
|--------|-------------|
| `M3DialogRoot`, `M3DialogContent`, … | Modal dialog with scrim overlay |
| `M3BottomSheetRoot`, `M3BottomSheetContent`, … | Bottom sheet (slides from bottom) |
| `M3SideSheetRoot`, `M3SideSheetContent`, … | Side sheet (RTL-aware, slides from end) |
| `M3NavigationDrawerRoot`, … | Modal navigation drawer |
| `M3MenuRoot`, `M3MenuContent`, `M3MenuItem`, … | Dropdown menu |
| `M3ContextMenuRoot`, … | Right-click context menu |
| `M3MenubarRoot`, … | Desktop menubar |
| `M3TabsRoot`, `M3TabsList`, `M3TabsTrigger`, … | Primary / secondary tab variants |
| `M3Toolbar`, `M3ToolbarSeparator` | Action toolbar row |
| `M3Search`, `M3SearchItem` | M3 search bar with autocomplete |
| `M3Chip`, `M3ChipInput` | Assist, filter, suggestion, elevated, input chips |
| `M3DatePicker` | Date picker with calendar popover |
| `M3TimePicker` | Time field input |
| `M3Progress` | Linear and circular progress |
| `M3SnackbarProvider`, `M3Snackbar`, … | Toast-style snackbar (inverse surface) |
| `M3TooltipProvider`, `M3Tooltip`, … | Plain and rich tooltips |
| `M3Divider` | Horizontal / vertical separator |

### Layouts

Layout / app-shell components live under `src/components/layouts/` (scaffold, top app bar, navigation bar, navigation rail), separate from interactive UI components.

| Export | Description |
|--------|-------------|
| `M3Scaffold` | M3 scaffold shell with named chrome slots and responsive visibility |
| `M3TopAppBar` | Top app bar with `#leading`, title, and `#trailing` slots |
| `M3NavigationBar` | Bottom navigation bar (compact window size) |
| `M3NavigationRail` | Vertical navigation rail (expanded window size) |

Import from the main barrel or optional layout subpaths:

```ts
import { M3Scaffold } from 'reka-m3'                    // main barrel
import { M3Scaffold } from 'reka-m3/layouts/scaffold'   // layout subpath
import { M3NavigationBar } from 'reka-m3/layouts/navigation-bar'
```

`M3Scaffold` exposes optional `#top-bar`, `#nav-rail`, `#rail-end`, `#rail-bottom`, `#bottom-bar`, and a default pane slot. Chrome regions are shown based on M3 window size classes (compact &lt; 600px, expanded ≥ 840px) and which slots you provide. By default, only the active chrome region is mounted (`v-if`); set `persistSlots` to keep all provided chrome slots mounted and hide inactive regions with `v-show`, `inert`, and `aria-hidden`.

Provide both `#bottom-bar` and `#nav-rail` with the same `v-model` and `items` on `M3NavigationBar` / `M3NavigationRail` — the scaffold shows one at a time (bar on compact, rail on expanded):

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  M3Scaffold,
  M3TopAppBar,
  M3NavigationBar,
  M3NavigationRail,
  type M3NavDestination,
} from 'reka-m3'

const active = ref('home')
const items: M3NavDestination[] = [
  { value: 'home', label: 'Home' },
  { value: 'search', label: 'Search' },
]
</script>

<template>
  <M3Scaffold>
    <template #top-bar>
      <M3TopAppBar title="My app" />
    </template>
    <template #bottom-bar>
      <M3NavigationBar v-model="active" :items="items" />
    </template>
    <template #nav-rail>
      <M3NavigationRail v-model="active" :items="items" />
    </template>
    <div class="p-4">Pane content</div>
  </M3Scaffold>
</template>
```

Some M3 components are intentionally skipped — see [docs/skipped-components.md](docs/skipped-components.md).

Example:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { M3Button, M3TextField } from 'reka-m3'

const email = ref('')
</script>

<template>
  <M3TextField v-model="email" label="Email" variant="outlined" />
  <M3Button variant="filled">Submit</M3Button>
</template>
```

## Customization

Three supported levels — do not rely on overriding internal scoped selectors (components no longer use scoped variant matrices).

### 1. Theme tokens (global brand)

Override `--md-sys-*` CSS variables or use `createTheme()`:

```css
@import 'reka-m3/theme/default.css';

:root {
  --md-sys-color-primary: #006a6a;
}
```

```ts
import { createTheme, themeToCssVars } from 'reka-m3/theme'

const branded = createTheme({ color: { primary: '#6750A4' } })
```

### 2. Component props

Use `variant`, `color`, and `size` props where available:

```vue
<M3Button variant="tonal" color="secondary" size="lg">Save</M3Button>
```

### 3. Per-instance `class` (tailwind-merge)

Pass Tailwind utilities; conflicting classes are merged correctly via `cn()`:

```vue
<M3Button variant="filled" class="min-h-14 px-10">Custom size</M3Button>
<M3DialogContent class="max-w-lg rounded-xl">…</M3DialogContent>
<M3Chip variant="filter" class="rounded-sm">Filter</M3Chip>
<M3BottomSheetContent class="rounded-t-xl">…</M3BottomSheetContent>
```

## Using the theme

### CSS import

Import the default light theme (includes typography and shape tokens):

```css
@import 'reka-m3/theme/default.css';
```

Add dark mode color overrides by importing dark.css and toggling `.dark` on `<html>`:

```css
@import 'reka-m3/theme/default.css';
@import 'reka-m3/theme/dark.css';
```

### JavaScript API

```ts
import { createTheme, themeToCssVars, createThemeFromSeed } from 'reka-m3/theme'

const branded = createTheme({
  color: { primary: '#6750A4' },
  shape: { medium: '8px' },
  typography: { brand: 'Inter, sans-serif' },
})

const cssVars = themeToCssVars(branded)
// Apply to an element: element.style = cssVars (or bind :style in Vue)

// Optional: generate a palette from a seed color
const fromSeed = createThemeFromSeed('#006A6A')
```

`createTheme(partial)` merges overrides into the default theme. `themeToCssVars()` outputs `--md-sys-*` and `--md-ref-*` custom properties.

### Typography note

Typography tokens set font family names only (`--md-ref-typeface-brand`, `--md-ref-typeface-plain`). Your app is responsible for loading font files (e.g. Google Fonts, self-hosted `@font-face`).

## Styling architecture

| Concern | Tool |
|---------|------|
| Theme / brand | `--md-sys-*` tokens |
| `variant` / `color` / `size` | `cva` in `*.variants.ts` |
| Shape | Token-backed `rounded-none` \| `xs` \| `sm` \| `md` \| `lg` \| `xl` \| `full` only — do not use `rounded-2xl`, `rounded-3xl`, or arbitrary radii in component variants |
| Layout, spacing, colors | Tailwind utilities (`bg-primary`, `rounded-full`, …) |
| M3 hover/pressed overlay | `.m3-interactive` in `interaction.css` |
| Consumer tweaks | `class` prop via `cn(variants(...), props.class)` |

Shared color-role compound variants live in `src/lib/variants/color-roles.ts`.

## Package exports

| Export | Description |
|--------|-------------|
| `reka-m3` | Components + theme re-exports |
| `reka-m3/layouts` | All layout / app-shell barrels |
| `reka-m3/layouts/*` | Individual layout barrels (e.g. `scaffold`, `navigation-bar`) |
| `reka-m3/components/*` | Individual interactive component barrels |
| `reka-m3/theme` | `createTheme`, `themeToCssVars`, types |
| `reka-m3/theme/default.css` | Light theme + typography + shape |
| `reka-m3/theme/dark.css` | Dark color overrides (`.dark`) |
| `reka-m3/styles` | Tailwind entry: `@theme inline`, typography, interaction |
| `reka-m3/styles/components.css` | Shared M3 interaction styles only |

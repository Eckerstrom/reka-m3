<script setup lang="ts">
import { computed, ref } from 'vue'
import { parseDate, parseTime, type DateValue } from '@internationalized/date'
import type { TimeValue } from 'reka-ui'
import { createTheme, themeToCssVars } from 'reka-m3/theme'
import {
  M3BottomSheetClose,
  M3BottomSheetContent,
  M3BottomSheetHandle,
  M3BottomSheetRoot,
  M3BottomSheetTitle,
  M3BottomSheetTrigger,
  M3Button,
  M3ButtonGroup,
  M3Checkbox,
  M3Chip,
  M3ChipInput,
  M3ContextMenuContent,
  M3ContextMenuItem,
  M3ContextMenuRoot,
  M3ContextMenuTrigger,
  M3DatePicker,
  M3DialogActions,
  M3DialogClose,
  M3DialogContent,
  M3DialogDescription,
  M3DialogRoot,
  M3DialogTitle,
  M3DialogTrigger,
  M3Divider,
  M3ExtendedFab,
  M3Fab,
  M3FabMenu,
  M3IconButton,
  M3MenuContent,
  M3MenuItem,
  M3MenuRoot,
  M3MenuTrigger,
  M3MenubarContent,
  M3MenubarItem,
  M3MenubarMenu,
  M3MenubarRoot,
  M3MenubarTrigger,
  M3NavigationDrawerClose,
  M3NavigationDrawerContent,
  M3NavigationDrawerHeader,
  M3NavigationDrawerItem,
  M3NavigationDrawerRoot,
  M3NavigationDrawerTitle,
  M3NavigationDrawerTrigger,
  M3Progress,
  M3Radio,
  M3RadioGroup,
  M3Search,
  M3SearchItem,
  M3SegmentedButton,
  M3SideSheetContent,
  M3SideSheetRoot,
  M3SideSheetTitle,
  M3SideSheetTrigger,
  M3Slider,
  M3Snackbar,
  M3SnackbarAction,
  M3SnackbarContent,
  M3SnackbarProvider,
  M3SplitButton,
  M3Switch,
  M3TabsContent,
  M3TabsIndicator,
  M3TabsList,
  M3TabsRoot,
  M3TabsTrigger,
  M3TextField,
  M3TimePicker,
  M3Toolbar,
  M3Tooltip,
  M3TooltipProvider,
} from 'reka-m3'

const isDark = ref(false)

const buttonVariants = ['filled', 'tonal', 'outlined', 'text', 'elevated'] as const

const colorSwatches = [
  { name: 'Primary', bg: 'bg-primary', fg: 'text-on-primary' },
  { name: 'On Primary', bg: 'bg-on-primary', fg: 'text-primary' },
  { name: 'Primary Container', bg: 'bg-primary-container', fg: 'text-on-primary-container' },
  { name: 'Secondary', bg: 'bg-secondary', fg: 'text-on-secondary' },
  { name: 'Secondary Container', bg: 'bg-secondary-container', fg: 'text-on-secondary-container' },
  { name: 'Tertiary', bg: 'bg-tertiary', fg: 'text-on-tertiary' },
  { name: 'Tertiary Container', bg: 'bg-tertiary-container', fg: 'text-on-tertiary-container' },
  { name: 'Error', bg: 'bg-error', fg: 'text-on-error' },
  { name: 'Error Container', bg: 'bg-error-container', fg: 'text-on-error-container' },
  { name: 'Surface', bg: 'bg-surface', fg: 'text-on-surface' },
  { name: 'Surface Variant', bg: 'bg-surface-variant', fg: 'text-on-surface-variant' },
  { name: 'Surface Container', bg: 'bg-surface-container', fg: 'text-on-surface' },
  { name: 'Surface Container High', bg: 'bg-surface-container-high', fg: 'text-on-surface' },
  { name: 'Outline', bg: 'bg-outline', fg: 'text-on-primary' },
  { name: 'Outline Variant', bg: 'bg-outline-variant', fg: 'text-on-surface' },
]

const typographyStyles = [
  { label: 'Display Large', class: 'md-typescale-display-large' },
  { label: 'Display Medium', class: 'md-typescale-display-medium' },
  { label: 'Display Small', class: 'md-typescale-display-small' },
  { label: 'Headline Large', class: 'md-typescale-headline-large' },
  { label: 'Headline Medium', class: 'md-typescale-headline-medium' },
  { label: 'Headline Small', class: 'md-typescale-headline-small' },
  { label: 'Title Large', class: 'md-typescale-title-large' },
  { label: 'Title Medium', class: 'md-typescale-title-medium' },
  { label: 'Title Small', class: 'md-typescale-title-small' },
  { label: 'Body Large', class: 'md-typescale-body-large' },
  { label: 'Body Medium', class: 'md-typescale-body-medium' },
  { label: 'Body Small', class: 'md-typescale-body-small' },
  { label: 'Label Large', class: 'md-typescale-label-large' },
  { label: 'Label Medium', class: 'md-typescale-label-medium' },
  { label: 'Label Small', class: 'md-typescale-label-small' },
]

const shapeSamples = [
  { label: 'None', class: 'rounded-none' },
  { label: 'Extra Small', class: 'rounded-xs' },
  { label: 'Small', class: 'rounded-sm' },
  { label: 'Medium', class: 'rounded-md' },
  { label: 'Large', class: 'rounded-lg' },
  { label: 'Extra Large', class: 'rounded-xl' },
  { label: 'Full', class: 'rounded-full' },
]

const brandedTheme = createTheme({
  color: { primary: '#6750A4', primaryContainer: '#EADDFF', onPrimaryContainer: '#21005D' },
  shape: { medium: '8px' },
  typography: { brand: "'Roboto', system-ui, sans-serif" },
})

const brandedCssVars = computed(() => themeToCssVars(brandedTheme))

const segmentedValue = ref('day')
const splitMenuValue = ref('')
const radioValue = ref('standard')
const checkboxChecked = ref(true)
const checkboxIndeterminate = ref<'indeterminate' | boolean>('indeterminate')
const switchChecked = ref(true)
const sliderValue = ref([40])
const filledField = ref('')
const outlinedField = ref('Invalid')
const errorField = ref('')

const dialogOpen = ref(false)
const bottomSheetOpen = ref(false)
const sideSheetOpen = ref(false)
const navDrawerOpen = ref(false)
const activeNavItem = ref('inbox')
const tabsValue = ref('photos')
const searchQuery = ref('')
const filterTags = ref(['Drafts', 'Sent'])
const chipInputTags = ref(['Vue', 'Tailwind'])
const selectedDate = ref<DateValue | null>(null)
const selectedTime = ref<TimeValue | null>(null)
selectedDate.value = parseDate('2026-06-10')
selectedTime.value = parseTime('14:30')
const progressValue = ref(65)
const snackbarOpen = ref(false)

const searchSuggestions = ['Material Design', 'Reka UI', 'Tailwind CSS', 'Vue 3']

const fabMenuActions = [
  { label: 'Share', value: 'share', icon: '↗' },
  { label: 'Archive', value: 'archive', icon: '📦' },
  { label: 'Delete', value: 'delete', icon: '🗑' },
]

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>

<template>
  <div class="min-h-screen bg-background text-on-background">
    <header class="border-b border-outline-variant px-6 py-4">
      <div class="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <div>
          <h1 class="md-typescale-headline-small">Reka + M3 Playground</h1>
          <p class="md-typescale-body-medium text-on-surface-variant">
            Material Design 3 tokens + Phase 2a & 2b components
          </p>
        </div>
        <M3Button variant="filled" @click="toggleDark">
          {{ isDark ? 'Light mode' : 'Dark mode' }}
        </M3Button>
      </div>
    </header>

    <main class="mx-auto max-w-5xl space-y-12 px-6 py-10">
      <section>
        <h2 class="mb-4 md-typescale-title-large">Phase 2a — Buttons</h2>
        <div class="space-y-6 rounded-lg border border-outline-variant bg-surface-container-low p-6">
          <div>
            <h3 class="mb-3 md-typescale-title-medium">Button variants (primary)</h3>
            <div class="flex flex-wrap gap-3">
              <M3Button v-for="variant in buttonVariants" :key="variant" :variant="variant">
                {{ variant }}
              </M3Button>
            </div>
          </div>

          <div>
            <h3 class="mb-3 md-typescale-title-medium">Consumer class override</h3>
            <M3Button variant="filled" class="min-h-14 px-10">Custom size via class</M3Button>
          </div>

          <div>
            <h3 class="mb-3 md-typescale-title-medium">Icon buttons</h3>
            <div class="flex flex-wrap gap-3">
              <M3IconButton variant="standard" aria-label="Favorite">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </M3IconButton>
              <M3IconButton variant="filled" aria-label="Add">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </M3IconButton>
              <M3IconButton variant="filled-tonal" aria-label="Edit">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                  />
                </svg>
              </M3IconButton>
              <M3IconButton variant="outlined" aria-label="Settings">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96a7.04 7.04 0 0 0-1.63-.94l-.36-2.54A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.49.42l-.36 2.54a7.04 7.04 0 0 0-1.63.94l-2.39-.96a.49.49 0 0 0-.59.22L2.71 8.06a.49.49 0 0 0 .12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.14.24.44.32.68.22l2.39-.96c.5.38 1.04.68 1.63.94l.36 2.54c.05.28.27.42.49.42h4c.22 0 .44-.14.49-.42l.36-2.54c.59-.26 1.13-.56 1.63-.94l2.39.96c.24.1.54.02.68-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.03-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z"
                  />
                </svg>
              </M3IconButton>
            </div>
          </div>

          <div>
            <h3 class="mb-3 md-typescale-title-medium">Segmented button</h3>
            <M3SegmentedButton
              v-model="segmentedValue"
              :items="[
                { value: 'day', label: 'Day' },
                { value: 'week', label: 'Week' },
                { value: 'month', label: 'Month' },
              ]"
            />
          </div>

          <div>
            <h3 class="mb-3 md-typescale-title-medium">Split button</h3>
            <M3SplitButton
              label="Save"
              :menu-items="[
                { label: 'Save draft', value: 'draft' },
                { label: 'Save and publish', value: 'publish' },
              ]"
              @menu-select="splitMenuValue = $event"
            />
            <p v-if="splitMenuValue" class="mt-2 md-typescale-body-small text-on-surface-variant">
              Selected: {{ splitMenuValue }}
            </p>
          </div>

          <div>
            <h3 class="mb-3 md-typescale-title-medium">Button group</h3>
            <M3ButtonGroup connected>
              <M3Button variant="outlined">Left</M3Button>
              <M3Button variant="outlined">Center</M3Button>
              <M3Button variant="outlined">Right</M3Button>
            </M3ButtonGroup>
          </div>

          <div class="flex flex-wrap items-end gap-6">
            <div>
              <h3 class="mb-3 md-typescale-title-medium">FAB</h3>
              <M3Fab aria-label="Create">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </M3Fab>
            </div>
            <div>
              <h3 class="mb-3 md-typescale-title-medium">Extended FAB</h3>
              <M3ExtendedFab>
                <template #icon>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                </template>
                Compose
              </M3ExtendedFab>
            </div>
            <div>
              <h3 class="mb-3 md-typescale-title-medium">FAB menu</h3>
              <M3FabMenu :actions="fabMenuActions" aria-label="Open actions" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-4 md-typescale-title-large">Phase 2a — Form controls</h2>
        <div class="space-y-8 rounded-lg border border-outline-variant bg-surface-container-low p-6">
          <div class="grid gap-6 md:grid-cols-2">
            <M3TextField
              v-model="filledField"
              variant="filled"
              label="Filled text field"
              helper-text="Supporting text"
            />
            <M3TextField
              v-model="outlinedField"
              variant="outlined"
              label="Outlined text field"
              helper-text="Supporting text"
            />
          </div>

          <M3TextField
            v-model="errorField"
            variant="outlined"
            label="Email"
            error
            error-text="Enter a valid email address"
          />

          <div class="grid gap-6 md:grid-cols-2">
            <div class="space-y-3">
              <h3 class="md-typescale-title-medium">Checkbox</h3>
              <M3Checkbox v-model="checkboxChecked">Checked option</M3Checkbox>
              <M3Checkbox v-model="checkboxIndeterminate">Indeterminate option</M3Checkbox>
            </div>

            <div class="space-y-3">
              <h3 class="md-typescale-title-medium">Radio group</h3>
              <M3RadioGroup v-model="radioValue">
                <M3Radio value="standard">Standard</M3Radio>
                <M3Radio value="express">Express</M3Radio>
                <M3Radio value="overnight">Overnight</M3Radio>
              </M3RadioGroup>
            </div>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <M3Switch v-model="switchChecked">Notifications</M3Switch>
            <div>
              <h3 class="mb-3 md-typescale-title-medium">Slider</h3>
              <M3Slider v-model="sliderValue" show-value />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-4 md-typescale-title-large">Phase 2b — Dialogs & sheets</h2>
        <div class="flex flex-wrap gap-3 rounded-lg border border-outline-variant bg-surface-container-low p-6">
          <M3DialogRoot v-model:open="dialogOpen">
            <M3DialogTrigger as-child>
              <M3Button variant="filled">Open dialog</M3Button>
            </M3DialogTrigger>
            <M3DialogContent>
              <M3DialogTitle>Dialog title</M3DialogTitle>
              <M3DialogDescription>
                Basic M3 dialog with text actions composed from M3Button.
              </M3DialogDescription>
              <M3DialogActions>
                <M3DialogClose as-child>
                  <M3Button variant="text">Cancel</M3Button>
                </M3DialogClose>
                <M3DialogClose as-child>
                  <M3Button variant="filled">Confirm</M3Button>
                </M3DialogClose>
              </M3DialogActions>
            </M3DialogContent>
          </M3DialogRoot>

          <M3BottomSheetRoot v-model:open="bottomSheetOpen">
            <M3BottomSheetTrigger as-child>
              <M3Button variant="tonal">Bottom sheet</M3Button>
            </M3BottomSheetTrigger>
            <M3BottomSheetContent class="rounded-t-[28px]">
              <M3BottomSheetHandle />
              <M3BottomSheetTitle class="mb-2 md-typescale-title-large">Bottom sheet</M3BottomSheetTitle>
              <p class="mb-4 md-typescale-body-medium text-on-surface-variant">
                Slides from the bottom with M3 handle and scrim overlay.
              </p>
              <M3BottomSheetClose as-child>
                <M3Button variant="filled" class="w-full">Done</M3Button>
              </M3BottomSheetClose>
            </M3BottomSheetContent>
          </M3BottomSheetRoot>

          <M3SideSheetRoot v-model:open="sideSheetOpen">
            <M3SideSheetTrigger as-child>
              <M3Button variant="outlined">Side sheet</M3Button>
            </M3SideSheetTrigger>
            <M3SideSheetContent>
              <M3SideSheetTitle class="mb-2 md-typescale-title-large">Side sheet</M3SideSheetTitle>
              <p class="md-typescale-body-medium text-on-surface-variant">
                Slides from the end edge (RTL-aware via logical properties).
              </p>
            </M3SideSheetContent>
          </M3SideSheetRoot>

          <M3NavigationDrawerRoot v-model:open="navDrawerOpen">
            <M3NavigationDrawerTrigger as-child>
              <M3Button variant="text">Nav drawer</M3Button>
            </M3NavigationDrawerTrigger>
            <M3NavigationDrawerContent>
              <M3NavigationDrawerHeader>
                <M3NavigationDrawerTitle class="md-typescale-title-large">Navigation</M3NavigationDrawerTitle>
                <M3NavigationDrawerClose as-child>
                  <M3IconButton variant="standard" aria-label="Close drawer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </M3IconButton>
                </M3NavigationDrawerClose>
              </M3NavigationDrawerHeader>
              <nav class="flex flex-col gap-1">
                <M3NavigationDrawerItem
                  :active="activeNavItem === 'inbox'"
                  @click="activeNavItem = 'inbox'"
                >
                  Inbox
                </M3NavigationDrawerItem>
                <M3NavigationDrawerItem
                  :active="activeNavItem === 'starred'"
                  @click="activeNavItem = 'starred'"
                >
                  Starred
                </M3NavigationDrawerItem>
                <M3NavigationDrawerItem
                  :active="activeNavItem === 'sent'"
                  @click="activeNavItem = 'sent'"
                >
                  Sent
                </M3NavigationDrawerItem>
              </nav>
            </M3NavigationDrawerContent>
          </M3NavigationDrawerRoot>
        </div>
      </section>

      <section>
        <h2 class="mb-4 md-typescale-title-large">Phase 2b — Menus & navigation</h2>
        <div class="space-y-6 rounded-lg border border-outline-variant bg-surface-container-low p-6">
          <div class="flex flex-wrap gap-4">
            <M3MenuRoot>
              <M3MenuTrigger as-child>
                <M3Button variant="outlined">Menu</M3Button>
              </M3MenuTrigger>
              <M3MenuContent>
                <M3MenuItem>Cut</M3MenuItem>
                <M3MenuItem>Copy</M3MenuItem>
                <M3MenuItem>Paste</M3MenuItem>
              </M3MenuContent>
            </M3MenuRoot>

            <M3ContextMenuRoot>
              <M3ContextMenuTrigger
                class="flex h-24 w-48 items-center justify-center rounded-md border border-dashed border-outline-variant md-typescale-body-medium text-on-surface-variant"
              >
                Right-click here
              </M3ContextMenuTrigger>
              <M3ContextMenuContent>
                <M3ContextMenuItem>Back</M3ContextMenuItem>
                <M3ContextMenuItem>Reload</M3ContextMenuItem>
                <M3ContextMenuItem>Inspect</M3ContextMenuItem>
              </M3ContextMenuContent>
            </M3ContextMenuRoot>
          </div>

          <M3MenubarRoot>
            <M3MenubarMenu>
              <M3MenubarTrigger>File</M3MenubarTrigger>
              <M3MenubarContent>
                <M3MenubarItem>New tab</M3MenubarItem>
                <M3MenubarItem>New window</M3MenubarItem>
              </M3MenubarContent>
            </M3MenubarMenu>
            <M3MenubarMenu>
              <M3MenubarTrigger>Edit</M3MenubarTrigger>
              <M3MenubarContent>
                <M3MenubarItem>Undo</M3MenubarItem>
                <M3MenubarItem>Redo</M3MenubarItem>
              </M3MenubarContent>
            </M3MenubarMenu>
          </M3MenubarRoot>

          <M3TabsRoot v-model="tabsValue">
            <M3TabsList variant="primary" class="relative">
              <M3TabsTrigger value="photos" variant="primary">Photos</M3TabsTrigger>
              <M3TabsTrigger value="albums" variant="primary">Albums</M3TabsTrigger>
              <M3TabsTrigger value="shared" variant="primary">Shared</M3TabsTrigger>
              <M3TabsIndicator />
            </M3TabsList>
            <M3TabsContent value="photos">Your photos appear here.</M3TabsContent>
            <M3TabsContent value="albums">Your albums appear here.</M3TabsContent>
            <M3TabsContent value="shared">Shared items appear here.</M3TabsContent>
          </M3TabsRoot>

          <M3Toolbar>
            <M3IconButton variant="standard" aria-label="Bold">
              <span class="md-typescale-label-large font-bold">B</span>
            </M3IconButton>
            <M3IconButton variant="standard" aria-label="Italic">
              <span class="md-typescale-label-large italic">I</span>
            </M3IconButton>
            <M3Button variant="text" size="sm">Share</M3Button>
          </M3Toolbar>
        </div>
      </section>

      <section>
        <h2 class="mb-4 md-typescale-title-large">Phase 2b — Search, chips & pickers</h2>
        <div class="space-y-6 rounded-lg border border-outline-variant bg-surface-container-low p-6">
          <M3Search v-model="searchQuery" placeholder="Search docs">
            <M3SearchItem
              v-for="item in searchSuggestions.filter((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))"
              :key="item"
              :value="item"
            />
          </M3Search>

          <div class="flex flex-wrap gap-2">
            <M3Chip variant="assist">Assist chip</M3Chip>
            <M3Chip
              v-for="tag in filterTags"
              :key="tag"
              variant="filter"
              :selected="true"
            >
              {{ tag }}
            </M3Chip>
            <M3Chip variant="suggestion">Suggestion</M3Chip>
            <M3Chip variant="elevated">Elevated</M3Chip>
          </div>

          <M3ChipInput v-model="chipInputTags" class="max-w-md" />

          <div class="grid gap-6 md:grid-cols-2">
            <M3DatePicker
              :model-value="(selectedDate ?? undefined) as DateValue | undefined"
              @update:model-value="selectedDate = ($event ?? null) as DateValue | null"
            />
            <M3TimePicker
              :model-value="(selectedTime ?? undefined) as TimeValue | undefined"
              @update:model-value="selectedTime = ($event ?? null) as TimeValue | null"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-4 md-typescale-title-large">Phase 2b — Feedback</h2>
        <div class="space-y-6 rounded-lg border border-outline-variant bg-surface-container-low p-6">
          <div class="space-y-4">
            <M3Progress :model-value="progressValue" variant="linear" />
            <M3Progress :model-value="progressValue" variant="circular" />
          </div>

          <M3SnackbarProvider>
            <M3Button variant="filled" @click="snackbarOpen = true">Show snackbar</M3Button>
            <M3Snackbar v-model:open="snackbarOpen">
              <M3SnackbarContent>
                <template #title>Snackbar message</template>
              </M3SnackbarContent>
              <M3SnackbarAction>Action</M3SnackbarAction>
            </M3Snackbar>
          </M3SnackbarProvider>

          <M3TooltipProvider>
            <div class="flex flex-wrap gap-6">
              <M3Tooltip>
                <template #trigger>
                  <M3Button variant="outlined">Plain tooltip</M3Button>
                </template>
                Helpful hint text
              </M3Tooltip>

              <M3Tooltip rich class="max-w-xs">
                <template #trigger>
                  <M3Button variant="tonal">Rich tooltip</M3Button>
                </template>
                <p class="md-typescale-title-small">Rich content</p>
                <p class="mt-1 md-typescale-body-small text-on-surface-variant">
                  Tooltips support richer content via the rich variant.
                </p>
              </M3Tooltip>
            </div>
          </M3TooltipProvider>

          <div class="flex items-center gap-4">
            <span class="md-typescale-body-medium">Horizontal</span>
            <M3Divider class="flex-1" />
            <span class="md-typescale-body-medium">Divider</span>
          </div>
          <div class="flex h-12 items-center gap-4">
            <span class="md-typescale-body-medium">Vertical</span>
            <M3Divider orientation="vertical" />
            <span class="md-typescale-body-medium">Divider</span>
          </div>

          <div>
            <h3 class="mb-3 md-typescale-title-medium">Phase 2b class override</h3>
            <M3BottomSheetRoot>
              <M3BottomSheetTrigger as-child>
                <M3Button variant="text">Custom sheet shape</M3Button>
              </M3BottomSheetTrigger>
              <M3BottomSheetContent class="rounded-t-[28px] min-h-48">
                <M3BottomSheetHandle />
                <p class="md-typescale-body-medium">Consumer class override on bottom sheet content.</p>
              </M3BottomSheetContent>
            </M3BottomSheetRoot>
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-4 md-typescale-title-large">Color roles</h2>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <div
            v-for="swatch in colorSwatches"
            :key="swatch.name"
            :class="[swatch.bg, swatch.fg, 'rounded-md p-4 md-typescale-label-medium']"
          >
            {{ swatch.name }}
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-4 md-typescale-title-large">Typography scale</h2>
        <div class="space-y-3 rounded-lg border border-outline-variant bg-surface-container-low p-6">
          <div
            v-for="style in typographyStyles"
            :key="style.label"
            class="flex flex-col gap-1 border-b border-outline-variant pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-4"
          >
            <span class="w-40 shrink-0 md-typescale-label-medium text-on-surface-variant">
              {{ style.label }}
            </span>
            <span :class="style.class">The quick brown fox jumps over the lazy dog</span>
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-4 md-typescale-title-large">Shape corners</h2>
        <div class="flex flex-wrap gap-4">
          <div
            v-for="shape in shapeSamples"
            :key="shape.label"
            class="flex w-28 flex-col items-center gap-2"
          >
            <div
              :class="[
                shape.class,
                'flex h-20 w-full items-center justify-center bg-primary-container text-on-primary-container md-typescale-label-medium',
              ]"
            >
              Aa
            </div>
            <span class="md-typescale-label-small text-on-surface-variant">{{ shape.label }}</span>
          </div>
        </div>
      </section>

      <section>
        <h2 class="mb-2 md-typescale-title-large">JS override via createTheme()</h2>
        <p class="mb-4 md-typescale-body-medium text-on-surface-variant">
          Branded wrapper using primary #6750A4 and medium corner 8px
        </p>
        <div
          class="rounded-lg border border-outline-variant p-6"
          :style="brandedCssVars"
        >
          <M3Button variant="filled">Branded primary button</M3Button>
          <p class="mt-3 md-typescale-body-medium text-on-surface">
            This block uses CSS variables generated from
            <code class="rounded-sm bg-surface-container-high px-1 py-0.5 md-typescale-label-medium">createTheme()</code>.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

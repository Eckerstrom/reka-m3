<script setup lang="ts">
import { computed, provide, toRef, useSlots } from 'vue'
import { useM3WindowSize } from '../../../composables/useM3WindowSize'
import { cn } from '../../../utils/cn'
import { M3_SCAFFOLD_KEY } from './constants'
import {
  scaffoldBodyVariants,
  scaffoldBottomBarVariants,
  scaffoldNavRailVariants,
  scaffoldPaneColumnVariants,
  scaffoldPaneVariants,
  scaffoldRailBottomVariants,
  scaffoldRailEndVariants,
  scaffoldTopBarVariants,
  scaffoldVariants,
} from './scaffold.variants'
import type { M3ScaffoldProps } from './types'

const props = withDefaults(defineProps<M3ScaffoldProps>(), {
  persistSlots: false,
})

const slots = useSlots()
const windowSize = useM3WindowSize()

provide(M3_SCAFFOLD_KEY, {
  windowSize,
  persistSlots: toRef(props, 'persistSlots'),
})

const hasTopBar = computed(() => !!slots['top-bar'])
const hasNavRail = computed(() => !!slots['nav-rail'])
const hasRailEnd = computed(() => !!slots['rail-end'])
const hasRailBottom = computed(() => !!slots['rail-bottom'])
const hasBottomBar = computed(() => !!slots['bottom-bar'])

const showTopBar = computed(() => hasTopBar.value)
const showNavRail = computed(() => windowSize.value !== 'compact' && hasNavRail.value)
const showRailEnd = computed(() => windowSize.value === 'expanded' && hasRailEnd.value)
const showRailBottom = computed(() => windowSize.value === 'compact' && hasRailBottom.value)
const showBottomBar = computed(() => windowSize.value === 'compact' && hasBottomBar.value)
</script>

<template>
  <div :class="cn(scaffoldVariants(), props.class)">
    <div v-if="!persistSlots && showTopBar" :class="scaffoldTopBarVariants()">
      <slot name="top-bar" />
    </div>
    <div
      v-if="persistSlots && hasTopBar"
      v-show="showTopBar"
      :class="scaffoldTopBarVariants()"
      :inert="!showTopBar || undefined"
      :aria-hidden="!showTopBar || undefined"
    >
      <slot name="top-bar" />
    </div>

    <div :class="scaffoldBodyVariants()">
      <aside v-if="!persistSlots && showNavRail" :class="scaffoldNavRailVariants()">
        <slot name="nav-rail" />
      </aside>
      <aside
        v-if="persistSlots && hasNavRail"
        v-show="showNavRail"
        :class="scaffoldNavRailVariants()"
        :inert="!showNavRail || undefined"
        :aria-hidden="!showNavRail || undefined"
      >
        <slot name="nav-rail" />
      </aside>

      <div :class="scaffoldPaneColumnVariants()">
        <main :class="scaffoldPaneVariants()">
          <slot :window-size="windowSize" />
        </main>

        <div v-if="!persistSlots && showRailBottom" :class="scaffoldRailBottomVariants()">
          <slot name="rail-bottom" />
        </div>
        <div
          v-if="persistSlots && hasRailBottom"
          v-show="showRailBottom"
          :class="scaffoldRailBottomVariants()"
          :inert="!showRailBottom || undefined"
          :aria-hidden="!showRailBottom || undefined"
        >
          <slot name="rail-bottom" />
        </div>
      </div>

      <aside v-if="!persistSlots && showRailEnd" :class="scaffoldRailEndVariants()">
        <slot name="rail-end" />
      </aside>
      <aside
        v-if="persistSlots && hasRailEnd"
        v-show="showRailEnd"
        :class="scaffoldRailEndVariants()"
        :inert="!showRailEnd || undefined"
        :aria-hidden="!showRailEnd || undefined"
      >
        <slot name="rail-end" />
      </aside>
    </div>

    <div v-if="!persistSlots && showBottomBar" :class="scaffoldBottomBarVariants()">
      <slot name="bottom-bar" />
    </div>
    <div
      v-if="persistSlots && hasBottomBar"
      v-show="showBottomBar"
      :class="scaffoldBottomBarVariants()"
      :inert="!showBottomBar || undefined"
      :aria-hidden="!showBottomBar || undefined"
    >
      <slot name="bottom-bar" />
    </div>
  </div>
</template>

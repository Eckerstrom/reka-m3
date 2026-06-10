<script setup lang="ts">
import { cn } from '../../../utils/cn'
import {
  topAppBarSectionVariants,
  topAppBarTitleVariants,
  topAppBarVariants,
} from './top-app-bar.variants'
import type { M3TopAppBarProps } from './types'

const props = defineProps<M3TopAppBarProps>()
</script>

<template>
  <header role="banner" :class="cn(topAppBarVariants(), props.class)">
    <div v-if="$slots.leading" :class="topAppBarSectionVariants()">
      <slot name="leading" />
    </div>

    <div :class="topAppBarTitleVariants()">
      <slot>{{ title }}</slot>
    </div>

    <div v-if="$slots.trailing" :class="topAppBarSectionVariants()">
      <slot name="trailing" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { MenubarRoot } from 'reka-ui'
import { cn } from '../../utils/cn'
import { menubarRootVariants } from './menubar.variants'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{ class?: HTMLAttributes['class'] }>()
</script>

<template>
  <MenubarRoot :class="cn(menubarRootVariants(), props.class)">
    <slot />
  </MenubarRoot>
</template>

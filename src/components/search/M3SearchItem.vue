<script setup lang="ts">
import { AutocompleteItem } from 'reka-ui'
import { cn } from '../../utils/cn'
import { searchItemVariants } from './search.variants'
import type { M3SearchItemProps } from './types'

const props = defineProps<M3SearchItemProps>()
</script>

<template>
  <AutocompleteItem
    :value="value"
    :class="cn(searchItemVariants(), props.class)"
  >
    <slot>{{ value }}</slot>
  </AutocompleteItem>
</template>

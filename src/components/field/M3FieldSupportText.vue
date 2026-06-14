<script setup lang="ts">
import { cn } from '../../utils/cn'
import { fieldSupportTextVariants } from './field.variants'
import type { M3FieldSupportTextProps } from './types'

const props = defineProps<M3FieldSupportTextProps>()
</script>

<template>
  <p :id="id" :class="cn(fieldSupportTextVariants({ error: !!error }), props.class)">
    <slot />
  </p>
</template>

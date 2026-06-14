<script setup lang="ts">
import { Label } from 'reka-ui'
import { cn } from '../../utils/cn'
import { fieldLabelVariants } from './field.variants'
import type { M3FieldLabelProps } from './types'

const props = defineProps<M3FieldLabelProps>()
</script>

<template>
  <Label :for="for" :class="cn(fieldLabelVariants(), props.class)">
    <slot />
    <span v-if="required" aria-hidden="true"> *</span>
  </Label>
</template>

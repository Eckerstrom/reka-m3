<script setup lang="ts">
import { DialogDescription } from 'reka-ui'
import { cn } from '../../utils/cn'
import { dialogDescriptionVariants } from './dialog.variants'
import type { M3DialogDescriptionProps } from './types'

const props = defineProps<M3DialogDescriptionProps>()
</script>

<template>
  <DialogDescription :class="cn(dialogDescriptionVariants(), props.class)">
    <slot />
  </DialogDescription>
</template>

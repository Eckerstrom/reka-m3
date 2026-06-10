<script setup lang="ts">
import { DialogTitle } from 'reka-ui'
import { cn } from '../../utils/cn'
import { dialogTitleVariants } from './dialog.variants'
import type { M3DialogTitleProps } from './types'

const props = defineProps<M3DialogTitleProps>()
</script>

<template>
  <DialogTitle :class="cn(dialogTitleVariants(), props.class)">
    <slot />
  </DialogTitle>
</template>

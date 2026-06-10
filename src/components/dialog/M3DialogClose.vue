<script setup lang="ts">
import { DialogClose } from 'reka-ui'
import { cn } from '../../utils/cn'
import type { M3DialogCloseProps } from './types'

const props = defineProps<M3DialogCloseProps>()
</script>

<template>
  <DialogClose v-bind="$attrs" :class="cn(props.class)">
    <slot />
  </DialogClose>
</template>

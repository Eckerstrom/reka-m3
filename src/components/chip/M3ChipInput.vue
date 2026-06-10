<script setup lang="ts">
import {
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
  TagsInputRoot,
} from 'reka-ui'
import { cn } from '../../utils/cn'
import { chipInputItemVariants, chipInputRootVariants } from './chip.variants'
import type { M3ChipInputProps } from './types'

const props = withDefaults(defineProps<M3ChipInputProps>(), {
  modelValue: () => [],
})

const emits = defineEmits<{ 'update:modelValue': [value: string[]] }>()
</script>

<template>
  <TagsInputRoot
    :model-value="modelValue"
    @update:model-value="emits('update:modelValue', $event)"
    :class="cn(chipInputRootVariants(), props.class)"
  >
    <TagsInputItem
      v-for="tag in modelValue"
      :key="tag"
      :value="tag"
      :class="chipInputItemVariants()"
    >
      <TagsInputItemText />
      <TagsInputItemDelete class="ml-1 cursor-pointer opacity-70 hover:opacity-100" aria-label="Remove">
        ×
      </TagsInputItemDelete>
    </TagsInputItem>
    <TagsInputInput
      class="min-w-24 flex-1 bg-transparent outline-none md-typescale-body-large text-on-surface placeholder:text-on-surface-variant"
      placeholder="Add tag"
    />
  </TagsInputRoot>
</template>

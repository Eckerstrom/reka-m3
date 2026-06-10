<script setup lang="ts">
import {
  AutocompleteContent,
  AutocompleteInput,
  AutocompletePortal,
  AutocompleteRoot,
  AutocompleteViewport,
} from 'reka-ui'
import { cn } from '../../utils/cn'
import {
  searchContentVariants,
  searchInputVariants,
  searchRootVariants,
} from './search.variants'
import type { M3SearchProps } from './types'

const props = withDefaults(defineProps<M3SearchProps>(), {
  modelValue: '',
  placeholder: 'Search',
})

const emits = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <AutocompleteRoot
    :model-value="modelValue"
    @update:model-value="emits('update:modelValue', $event)"
  >
    <div :class="cn(searchRootVariants(), props.class)">
      <div :class="searchInputVariants()">
        <slot name="icon">
          <svg
            class="shrink-0 text-on-surface-variant"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 9.5 5 13 7.01 13 9.5 11.99 14 9.5 14z"
            />
          </svg>
        </slot>
        <AutocompleteInput
          :placeholder="placeholder"
          :disabled="disabled"
          class="min-w-0 flex-1 bg-transparent outline-none placeholder:text-on-surface-variant"
        />
      </div>

      <AutocompletePortal>
        <AutocompleteContent :class="searchContentVariants()" :side-offset="4">
          <AutocompleteViewport>
            <slot />
          </AutocompleteViewport>
        </AutocompleteContent>
      </AutocompletePortal>
    </div>
  </AutocompleteRoot>
</template>

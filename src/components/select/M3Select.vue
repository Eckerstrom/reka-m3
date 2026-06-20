<script setup lang="ts">
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'
import { computed, useId } from 'vue'
import { cn } from '../../utils/cn'
import M3FieldLabel from '../field/M3FieldLabel.vue'
import M3FieldSupportText from '../field/M3FieldSupportText.vue'
import {
  selectContainerVariants,
  selectContentVariants,
  selectItemVariants,
  selectRootVariants,
  selectTriggerVariants,
} from './select.variants'
import type { M3SelectProps } from './types'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<M3SelectProps>(), {
  variant: 'filled',
})

const modelValue = defineModel<string | undefined>()

const generatedId = useId()
const fieldId = computed(() => props.id ?? generatedId)
const helperId = computed(() => `${fieldId.value}-helper`)

const supportText = computed(() => (props.error && props.errorText ? props.errorText : props.helperText))
</script>

<template>
  <SelectRoot
    v-model="modelValue"
    :disabled="disabled"
    :required="required"
    :name="name"
  >
    <div
      :class="
        cn(
          selectRootVariants({
            variant,
            error: !!error,
            disabled: !!disabled,
          }),
          props.class,
        )
      "
    >
      <div
        :class="selectContainerVariants({ variant, error: !!error })"
        :data-error="error ? true : undefined"
      >
        <M3FieldLabel :for="fieldId" :required="required">
          {{ label }}
        </M3FieldLabel>

        <SelectTrigger
          :id="fieldId"
          :disabled="disabled"
          :aria-invalid="error || undefined"
          :aria-describedby="supportText ? helperId : undefined"
          :class="selectTriggerVariants({ variant })"
        >
          <SelectValue
            :placeholder="placeholder"
            class="min-w-0 flex-1 truncate"
          />
          <SelectIcon as-child>
            <slot name="trailing">
              <svg
                class="shrink-0 text-on-surface-variant"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </slot>
          </SelectIcon>
        </SelectTrigger>
      </div>

      <M3FieldSupportText
        v-if="supportText"
        :id="helperId"
        :error="!!error"
      >
        {{ supportText }}
      </M3FieldSupportText>
    </div>

    <SelectPortal>
      <SelectContent :class="selectContentVariants()" :side-offset="4" align="start">
        <SelectViewport>
          <SelectItem
            v-for="item in items"
            :key="item.value"
            :value="item.value"
            :disabled="item.disabled"
            :class="selectItemVariants()"
          >
            <SelectItemText>{{ item.label }}</SelectItemText>
            <SelectItemIndicator class="ms-auto shrink-0 text-primary">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
            </SelectItemIndicator>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

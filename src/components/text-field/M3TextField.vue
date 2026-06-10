<script setup lang="ts">
import { Label } from 'reka-ui'
import { computed, useAttrs, useId } from 'vue'
import { cn } from '../../utils/cn'
import { textFieldContainerVariants, textFieldVariants } from './text-field.variants'
import type { M3TextFieldProps } from './types'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<M3TextFieldProps>(), {
  variant: 'filled',
  multiline: false,
  rows: 3,
  type: 'text',
})

const emits = defineEmits<{ 'update:modelValue': [value: string] }>()
const attrs = useAttrs()
const generatedId = useId()
const fieldId = computed(() => props.id ?? generatedId)
const helperId = computed(() => `${fieldId.value}-helper`)

const value = computed({
  get: () => props.modelValue ?? '',
  set: (next: string) => emits('update:modelValue', next),
})

const supportText = computed(() => (props.error && props.errorText ? props.errorText : props.helperText))
</script>

<template>
  <div
    :class="
      cn(
        textFieldVariants({
          variant,
          error: !!error,
          disabled: !!disabled,
        }),
        props.class,
      )
    "
  >
    <div :class="textFieldContainerVariants({ variant, error: !!error })">
      <Label
        :for="fieldId"
        class="m3-text-field__label pointer-events-none absolute start-4 top-2 transition-all md-typescale-body-small text-on-surface-variant"
      >
        {{ label }}
        <span v-if="required" aria-hidden="true"> *</span>
      </Label>

      <textarea
        v-if="multiline"
        :id="fieldId"
        v-model="value"
        v-bind="attrs"
        :name="name"
        :rows="rows"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :aria-invalid="error || undefined"
        :aria-describedby="supportText ? helperId : undefined"
        class="m3-text-field__input block w-full resize-y bg-transparent pt-4 text-on-surface outline-none md-typescale-body-large placeholder:text-on-surface-variant disabled:cursor-not-allowed"
      />
      <input
        v-else
        :id="fieldId"
        v-model="value"
        v-bind="attrs"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :aria-invalid="error || undefined"
        :aria-describedby="supportText ? helperId : undefined"
        class="m3-text-field__input block w-full bg-transparent pt-4 text-on-surface outline-none md-typescale-body-large placeholder:text-on-surface-variant disabled:cursor-not-allowed"
      />
    </div>

    <p
      v-if="supportText"
      :id="helperId"
      class="px-4 md-typescale-body-small"
      :class="error ? 'text-error' : 'text-on-surface-variant'"
    >
      {{ supportText }}
    </p>
  </div>
</template>

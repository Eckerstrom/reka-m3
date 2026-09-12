<script setup lang="ts">
import { Time } from '@internationalized/date'
import { computed, ref, watch } from 'vue'
import {
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'
import { cn } from '../../utils/cn'
import M3Button from '../button/M3Button.vue'
import M3DialogOverlay from '../dialog/M3DialogOverlay.vue'
import M3TimePickerDial from './M3TimePickerDial.vue'
import {
  timePickerActionsVariants,
  timePickerDialogVariants,
  timePickerDisplaySegmentVariants,
  timePickerDisplaySeparatorVariants,
  timePickerDisplayVariants,
  timePickerFieldIconVariants,
  timePickerFieldValueVariants,
  timePickerFieldVariants,
  timePickerHeadlineVariants,
  timePickerInputBoxVariants,
  timePickerInputFieldVariants,
  timePickerPeriodButtonVariants,
  timePickerPeriodVariants,
} from './time-picker.variants'
import type { M3TimePickerProps, TimeValue } from './types'

const props = withDefaults(defineProps<M3TimePickerProps>(), {
  hourCycle: 24,
  title: 'Select time',
  cancelLabel: 'Cancel',
  confirmLabel: 'OK',
})

const emits = defineEmits<{ 'update:modelValue': [value: TimeValue | undefined] }>()

type DialMode = 'hour' | 'minute'
type ViewMode = 'dial' | 'input'

const open = ref(false)
const viewMode = ref<ViewMode>('dial')
const dialMode = ref<DialMode>('hour')

const draftHour = ref(0)
const draftMinute = ref(0)

const is12h = computed(() => props.hourCycle === 12)

const period = computed<'AM' | 'PM'>(() => (draftHour.value >= 12 ? 'PM' : 'AM'))

const displayHour = computed(() => {
  if (!is12h.value) return draftHour.value
  const h = draftHour.value % 12
  return h === 0 ? 12 : h
})

function hour12To24(h12: number, nextPeriod: 'AM' | 'PM'): number {
  if (nextPeriod === 'AM') return h12 === 12 ? 0 : h12
  return h12 === 12 ? 12 : h12 + 12
}

const formattedValue = computed(() => {
  const value = props.modelValue
  if (!value) return '--:--'
  if (is12h.value) {
    const h24 = value.hour
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12
    const suffix = h24 >= 12 ? 'PM' : 'AM'
    return `${pad(h12)}:${pad(value.minute)} ${suffix}`
  }
  return `${pad(value.hour)}:${pad(value.minute)}`
})

const outerHourValues = computed(() =>
  is12h.value
    ? [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
)

const innerHourValues = computed(() =>
  is12h.value ? undefined : [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
)

const minuteValues = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]

const dialSelected = computed(() => {
  if (dialMode.value === 'minute') {
    return minuteValues.reduce((best, n) =>
      Math.abs(n - draftMinute.value) < Math.abs(best - draftMinute.value) ? n : best,
    )
  }
  return is12h.value ? displayHour.value : draftHour.value
})

const hourInput = computed({
  get: () => pad(is12h.value ? displayHour.value : draftHour.value),
  set: (raw: string) => {
    const n = Number.parseInt(raw.replace(/\D/g, ''), 10)
    if (!Number.isFinite(n)) return
    if (is12h.value) {
      const clamped = Math.min(12, Math.max(1, n))
      draftHour.value = hour12To24(clamped, period.value)
    } else {
      draftHour.value = Math.min(23, Math.max(0, n))
    }
  },
})

const minuteInput = computed({
  get: () => pad(draftMinute.value),
  set: (raw: string) => {
    const n = Number.parseInt(raw.replace(/\D/g, ''), 10)
    if (!Number.isFinite(n)) return
    draftMinute.value = Math.min(59, Math.max(0, n))
  },
})

watch(open, (isOpen) => {
  if (!isOpen) return
  const value = props.modelValue
  draftHour.value = value?.hour ?? new Date().getHours()
  draftMinute.value = value?.minute ?? new Date().getMinutes()
  viewMode.value = 'dial'
  dialMode.value = 'hour'
})

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

function setPeriod(next: 'AM' | 'PM') {
  if (!is12h.value) return
  draftHour.value = hour12To24(displayHour.value, next)
}

function onDialSelect(value: number) {
  if (dialMode.value === 'hour') {
    draftHour.value = is12h.value ? hour12To24(value, period.value) : value
    dialMode.value = 'minute'
    return
  }
  draftMinute.value = value
}

function confirm() {
  emits('update:modelValue', new Time(draftHour.value, draftMinute.value) as TimeValue)
  open.value = false
}

function cancel() {
  open.value = false
}

function toggleViewMode() {
  viewMode.value = viewMode.value === 'dial' ? 'input' : 'dial'
}
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger
      as="button"
      type="button"
      :disabled="disabled"
      :class="cn(timePickerFieldVariants(), props.class)"
      :aria-label="formattedValue"
    >
      <span :class="timePickerFieldValueVariants()">{{ formattedValue }}</span>
      <span :class="timePickerFieldIconVariants()" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"
          />
        </svg>
      </span>
    </DialogTrigger>

    <DialogPortal>
      <M3DialogOverlay class="z-[1100]" />
      <DialogContent
        :class="cn(timePickerDialogVariants(), 'fixed left-1/2 top-1/2 z-[1100] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-surface-container-high p-6 shadow-[0_1px_3px_1px_rgb(0_0_0/0.15),0_1px_2px_rgb(0_0_0/0.3)] focus:outline-none')"
        @escape-key-down="cancel"
      >
        <DialogTitle :class="timePickerHeadlineVariants()">
          {{ title }}
        </DialogTitle>

        <!-- Dial mode: large HH:MM chips + clock face (M3 TimePicker) -->
        <template v-if="viewMode === 'dial'">
          <div :class="timePickerDisplayVariants()">
            <button
              type="button"
              :data-active="dialMode === 'hour'"
              :class="timePickerDisplaySegmentVariants()"
              @click="dialMode = 'hour'"
            >
              {{ pad(is12h ? displayHour : draftHour) }}
            </button>
            <span :class="timePickerDisplaySeparatorVariants()" aria-hidden="true">:</span>
            <button
              type="button"
              :data-active="dialMode === 'minute'"
              :class="timePickerDisplaySegmentVariants()"
              @click="dialMode = 'minute'"
            >
              {{ pad(draftMinute) }}
            </button>

            <div v-if="is12h" :class="timePickerPeriodVariants()">
              <button
                type="button"
                :data-active="period === 'AM'"
                :class="timePickerPeriodButtonVariants()"
                @click="setPeriod('AM')"
              >
                AM
              </button>
              <button
                type="button"
                :data-active="period === 'PM'"
                :class="timePickerPeriodButtonVariants()"
                @click="setPeriod('PM')"
              >
                PM
              </button>
            </div>
          </div>

          <M3TimePickerDial
            v-if="dialMode === 'hour'"
            :values="outerHourValues"
            :inner-values="innerHourValues"
            :selected="dialSelected"
            @select="onDialSelect"
          />
          <M3TimePickerDial
            v-else
            :values="minuteValues"
            :selected="dialSelected"
            @select="onDialSelect"
          />
        </template>

        <!-- Input mode: keyboard fields only (M3 TimeInput) — no duplicate headline chips -->
        <div v-else :class="timePickerDisplayVariants()">
          <div :class="timePickerInputBoxVariants()">
            <input
              v-model="hourInput"
              inputmode="numeric"
              maxlength="2"
              aria-label="Hour"
              :class="timePickerInputFieldVariants()"
            >
          </div>
          <span :class="timePickerDisplaySeparatorVariants()" aria-hidden="true">:</span>
          <div :class="timePickerInputBoxVariants()">
            <input
              v-model="minuteInput"
              inputmode="numeric"
              maxlength="2"
              aria-label="Minute"
              :class="timePickerInputFieldVariants()"
            >
          </div>

          <div v-if="is12h" :class="timePickerPeriodVariants()">
            <button
              type="button"
              :data-active="period === 'AM'"
              :class="timePickerPeriodButtonVariants()"
              @click="setPeriod('AM')"
            >
              AM
            </button>
            <button
              type="button"
              :data-active="period === 'PM'"
              :class="timePickerPeriodButtonVariants()"
              @click="setPeriod('PM')"
            >
              PM
            </button>
          </div>
        </div>

        <div :class="timePickerActionsVariants()">
          <M3Button
            variant="text"
            :aria-label="viewMode === 'dial' ? 'Switch to keyboard input' : 'Switch to clock dial'"
            @click="toggleViewMode"
          >
            <span class="inline-flex size-6 items-center justify-center" aria-hidden="true">
              <svg
                v-if="viewMode === 'dial'"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
                />
              </svg>
              <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"
                />
              </svg>
            </span>
          </M3Button>

          <div class="flex gap-2">
            <DialogClose as-child>
              <M3Button variant="text" @click="cancel">{{ cancelLabel }}</M3Button>
            </DialogClose>
            <M3Button variant="text" @click="confirm">{{ confirmLabel }}</M3Button>
          </div>
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

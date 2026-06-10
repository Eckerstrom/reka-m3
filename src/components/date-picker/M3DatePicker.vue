<script setup lang="ts">
import type { DateValue } from '@internationalized/date'
import {
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerContent,
  DatePickerField,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerInput,
  DatePickerNext,
  DatePickerPrev,
  DatePickerRoot,
  DatePickerTrigger,
} from 'reka-ui'
import { cn } from '../../utils/cn'
import {
  datePickerCalendarVariants,
  datePickerCellTriggerVariants,
  datePickerContentVariants,
  datePickerFieldVariants,
  datePickerHeadCellVariants,
  datePickerHeaderVariants,
  datePickerHeadingVariants,
  datePickerInputVariants,
  datePickerNavButtonVariants,
  datePickerTriggerVariants,
} from './date-picker.variants'
import type { M3DatePickerProps } from './types'

const props = defineProps<M3DatePickerProps>()
const emits = defineEmits<{ 'update:modelValue': [value: DateValue | undefined] }>()
</script>

<template>
  <DatePickerRoot
    :model-value="modelValue ?? undefined"
    :locale="locale"
    :disabled="disabled"
    close-on-select
    @update:model-value="emits('update:modelValue', $event)"
  >
    <DatePickerField v-slot="{ segments }" :class="cn(datePickerFieldVariants(), props.class)">
      <template v-for="segment in segments" :key="segment.part">
        <DatePickerInput :part="segment.part" :class="datePickerInputVariants()">
          {{ segment.value }}
        </DatePickerInput>
      </template>
      <DatePickerTrigger :class="datePickerTriggerVariants()" aria-label="Open calendar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path
            d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"
          />
        </svg>
      </DatePickerTrigger>
    </DatePickerField>

    <DatePickerContent :class="datePickerContentVariants()">
      <DatePickerCalendar v-slot="{ weekDays, grid }" :class="datePickerCalendarVariants()">
        <DatePickerHeader :class="datePickerHeaderVariants()">
          <DatePickerPrev :class="datePickerNavButtonVariants()" aria-label="Previous month">
            ‹
          </DatePickerPrev>
          <DatePickerHeading :class="datePickerHeadingVariants()" />
          <DatePickerNext :class="datePickerNavButtonVariants()" aria-label="Next month">
            ›
          </DatePickerNext>
        </DatePickerHeader>

        <DatePickerGrid
          v-for="month in grid"
          :key="month.value.toString()"
          class="w-full border-collapse"
        >
          <DatePickerGridHead>
            <DatePickerGridRow class="grid grid-cols-7">
              <DatePickerHeadCell
                v-for="day in weekDays"
                :key="day"
                :class="datePickerHeadCellVariants()"
              >
                {{ day }}
              </DatePickerHeadCell>
            </DatePickerGridRow>
          </DatePickerGridHead>
          <DatePickerGridBody>
            <DatePickerGridRow
              v-for="(weekDates, rowIndex) in month.rows"
              :key="`week-${rowIndex}`"
              class="grid grid-cols-7"
            >
              <DatePickerCell
                v-for="weekDate in weekDates"
                :key="weekDate.toString()"
                :date="weekDate"
              >
                <DatePickerCellTrigger
                  :day="weekDate"
                  :month="month.value"
                  :class="datePickerCellTriggerVariants()"
                >
                  <template #default="{ dayValue }">
                    {{ dayValue }}
                  </template>
                </DatePickerCellTrigger>
              </DatePickerCell>
            </DatePickerGridRow>
          </DatePickerGridBody>
        </DatePickerGrid>
      </DatePickerCalendar>
    </DatePickerContent>
  </DatePickerRoot>
</template>

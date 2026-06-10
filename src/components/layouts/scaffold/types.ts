import type { HTMLAttributes, Ref } from 'vue'
import type { M3WindowSize } from '../../../composables/useM3WindowSize'

export interface M3ScaffoldProps {
  class?: HTMLAttributes['class']
  /** When true, chrome slots stay mounted; hidden regions use v-show + inert. Default false. */
  persistSlots?: boolean
}

export interface M3ScaffoldContext {
  windowSize: Ref<M3WindowSize>
  persistSlots: Ref<boolean>
}

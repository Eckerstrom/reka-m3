import type { M3FabProps } from '../fab/types'
import type { HTMLAttributes } from 'vue'

export interface M3ExtendedFabProps extends M3FabProps {
  class?: HTMLAttributes['class']
}

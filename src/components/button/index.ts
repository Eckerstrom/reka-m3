export { default as M3Button } from './M3Button.vue'
export type { M3ButtonProps, M3ButtonVariant } from './types'

import M3Button from './M3Button.vue'
import { h, type FunctionalComponent } from 'vue'
import type { M3ButtonProps } from './types'

function createVariantButton(
  variant: M3ButtonProps['variant'],
): FunctionalComponent<Omit<M3ButtonProps, 'variant'>> {
  return (props, { slots, attrs }) =>
    h(M3Button, { ...attrs, ...props, variant }, slots)
}

export const M3FilledButton = createVariantButton('filled')
export const M3TonalButton = createVariantButton('tonal')
export const M3OutlinedButton = createVariantButton('outlined')
export const M3TextButton = createVariantButton('text')
export const M3ElevatedButton = createVariantButton('elevated')

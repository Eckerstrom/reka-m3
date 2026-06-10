import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import { M3_BREAKPOINT_MEDIUM, M3_BREAKPOINT_EXPANDED } from '../components/layouts/shared/constants'

export type M3WindowSize = 'compact' | 'medium' | 'expanded'

export function useM3WindowSize(): Ref<M3WindowSize> {
  const windowSize = ref<M3WindowSize>('compact')

  let mediumMq: MediaQueryList | undefined
  let expandedMq: MediaQueryList | undefined

  function update() {
    if (expandedMq?.matches) {
      windowSize.value = 'expanded'
    } else if (mediumMq?.matches) {
      windowSize.value = 'medium'
    } else {
      windowSize.value = 'compact'
    }
  }

  onMounted(() => {
    mediumMq = window.matchMedia(`(min-width: ${M3_BREAKPOINT_MEDIUM}px)`)
    expandedMq = window.matchMedia(`(min-width: ${M3_BREAKPOINT_EXPANDED}px)`)
    update()
    mediumMq.addEventListener('change', update)
    expandedMq.addEventListener('change', update)
  })

  onUnmounted(() => {
    mediumMq?.removeEventListener('change', update)
    expandedMq?.removeEventListener('change', update)
  })

  return windowSize
}

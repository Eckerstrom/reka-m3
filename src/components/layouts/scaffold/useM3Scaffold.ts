import { inject } from 'vue'
import { M3_SCAFFOLD_KEY } from './constants'
import type { M3ScaffoldContext } from './types'

export function useM3Scaffold(): M3ScaffoldContext {
  const context = inject(M3_SCAFFOLD_KEY)

  if (!context) {
    if (import.meta.env.DEV) {
      throw new Error('[useM3Scaffold] must be used within M3Scaffold.')
    }
    throw new Error('useM3Scaffold must be used within M3Scaffold.')
  }

  return context
}

import { computed, type ComputedRef } from 'vue'
import { useForwardPropsEmits } from 'reka-ui'

export function useM3ForwardPropsEmits<T extends Record<string, unknown>>(
  props: T,
  emits: unknown,
  omitKeys: (keyof T)[],
) {
  const delegated = computed(() => {
    const result = { ...props } as Record<string, unknown>
    for (const key of omitKeys) {
      delete result[key as string]
    }
    return result
  }) as ComputedRef<Omit<T, typeof omitKeys[number]>>

  return useForwardPropsEmits(
    delegated,
    emits as (name: string, ...args: unknown[]) => void,
  )
}

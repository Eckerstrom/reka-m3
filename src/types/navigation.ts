import type { Component } from 'vue'

export interface M3NavDestination {
  value: string
  label: string
  icon?: Component | string
  badge?: string | number
}

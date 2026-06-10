export {
  DialogRoot as M3NavigationDrawerRoot,
  DialogTrigger as M3NavigationDrawerTrigger,
  DialogTitle as M3NavigationDrawerTitle,
  DialogClose as M3NavigationDrawerClose,
} from 'reka-ui'

export { default as M3NavigationDrawerOverlay } from './M3NavigationDrawerOverlay.vue'
export { default as M3NavigationDrawerContent } from './M3NavigationDrawerContent.vue'
export { default as M3NavigationDrawerHeader } from './M3NavigationDrawerHeader.vue'
export { default as M3NavigationDrawerItem } from './M3NavigationDrawerItem.vue'

export type {
  M3NavigationDrawerContentProps,
  M3NavigationDrawerOverlayProps,
  M3NavigationDrawerHeaderProps,
  M3NavigationDrawerItemProps,
} from './types'

export {
  navigationDrawerContentVariants,
  navigationDrawerItemVariants,
} from './navigation-drawer.variants'

export {
  DropdownMenuRoot as M3MenuRoot,
  DropdownMenuTrigger as M3MenuTrigger,
  DropdownMenuPortal as M3MenuPortal,
  DropdownMenuGroup as M3MenuGroup,
  DropdownMenuSub as M3MenuSub,
  DropdownMenuSubTrigger as M3MenuSubTrigger,
  DropdownMenuSubContent as M3MenuSubContent,
  DropdownMenuCheckboxItem as M3MenuCheckboxItem,
  DropdownMenuRadioGroup as M3MenuRadioGroup,
  DropdownMenuRadioItem as M3MenuRadioItem,
} from 'reka-ui'

export { default as M3MenuContent } from './M3MenuContent.vue'
export { default as M3MenuItem } from './M3MenuItem.vue'
export { default as M3MenuLabel } from './M3MenuLabel.vue'
export { default as M3MenuSeparator } from './M3MenuSeparator.vue'

export type {
  M3MenuContentProps,
  M3MenuItemProps,
  M3MenuLabelProps,
  M3MenuSeparatorProps,
} from './types'

export {
  menuContentVariants,
  menuItemVariants,
  menuLabelVariants,
  menuSeparatorVariants,
} from './menu.variants'

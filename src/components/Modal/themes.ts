import { ModalPropTypes } from "./types"

const wrapper = ({ isOpen }: Pick<ModalPropTypes, 'isOpen'>) => new Map([
  ['display', isOpen ? 'flex' : 'hidden'],
  ['position', 'fixed'],
  ['top', 'top-0'],
  ['left', 'left-0'],
  ['width', 'w-full'],
  ['height', 'h-full'],
  ['background-color', 'bg-transparent'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-center'],
  ['z-index', 'z-[9999]']
])

const dialog = ({ isOpen }: Pick<ModalPropTypes, 'isOpen'>) => new Map([
  ['display', isOpen ? 'block' : 'hidden'],
  ['border-size', 'border'],
  ['border-type', 'border-solid'],
  ['border-color', 'border-grayscale-10'],
  ['border-radius', 'rounded-md'],
  ['padding', 'p-4'],
])

export default {
  wrapper,
  dialog
}
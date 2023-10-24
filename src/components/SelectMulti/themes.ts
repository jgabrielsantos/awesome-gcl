const wrapper = () => new Map([
  ['width', 'w-full'],
  ['display', 'flex'],
  ['flex-direction', 'flex-col'],
  ['align-items', 'items-start'],
  ['justify-content', 'justify-center'],
  ['gap', 'gap-1.5'],
  ['position', 'relative']
])

const label = () => new Map([
  ['width', 'w-full'],
  ['color', 'text-grayscale-100']
])

const input = () => new Map([
  ['width', 'w-full'],
  ['display', 'flex'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-between'],
  ['border-size', 'border'],
  ['border-type', 'border-solid'],
  ['border-color', 'border-grayscale-40'],
  ['border-radius', 'rounded-md'],

  // Hover state
  ['hover-border-color', 'hover:border-primary-50']
])

const placeholder = () => new Map([
  ['width', 'w-full'],
  ['color', 'color-grayscale-60'],
  ['white-space', 'whitespace-nowrap']
])

const selectedItem = () => new Map([
  ['width', 'w-fit'],
  ['display', 'flex'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-between'],
  ['border-radius', 'rounded-md'],
  ['background-color', 'bg-grayscale-0'],

  // Hover state
  ['hover-background-color', 'hover:bg-support-alert-5']
])

const selectedList = () => new Map([
  ['width', 'w-full'],
  ['display', 'flex'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-start'],
  ['flex-wrap', 'flex-wrap']
])

const optionList = () => new Map([
  ['width', 'w-full'],
  ['flex-direction', 'flex-col'],
  ['align-items', 'items-start'],
  ['justify-content', 'justify-center'],
  ['border-size', 'border'],
  ['border-style', 'border-solid'],
  ['border-color', 'border-grayscale-40'],
  ['border-radius', 'rounded-lg'],
  ['position', 'absolute'],
  ['right', 'right-0'],
  ['background-color', 'bg-white-100']
])

const optionItem = () => new Map([
  ['cursor', 'cursor-pointer'],
  ['width', 'w-full'],
  ['display', 'flex'],
  ['align-items', 'items-start'],
  ['justify-content', 'justify-start'],
  ['color', 'text-color-grayscale-100'],
  ['overflow', 'overflow-hidden'],
  ['white-space', 'whitespace-nowrap'],
  ['text-overflow', 'text-ellipsis']
])

export default {
  wrapper,
  label,
  input,
  placeholder,
  selectedItem,
  selectedList,
  optionItem,
  optionList
}
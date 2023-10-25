const wrapper = () => new Map([
  ['width', 'w-full'],
  ['position', 'relative'],
  ['display', 'flex'],
  ['flex-direction', 'flex-col'],
  ['align-items', 'items-start'],
  ['justify-content', 'justify-center'],
  ['gap', 'gap-1.5']
])

const label = () => new Map([
  ['width', 'w-full'],
  ['color', 'text-grayscale-100']
])

const inputWrapper = () => new Map([
  ['width', 'w-full'],
  ['display', 'flex'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-between'],
  ['border-width', 'border'],
  ['border-type', 'border-solid'],
  ['border-color', 'border-grayscale-40'],
  ['border-color', 'rounded-md']
])

const input = () => new Map([
  ['width', 'w-full'],
  ['color', 'text-grayscale-100'],
  ['border', 'border-none'],
  ['cursor', 'cursor-inherit'],
  ['background-color', 'bg-transparent'],

  // Focus visible state
  ['focus-visible-outline', 'focus-visible:outline-0']
])

const optionList = () => new Map([
  ['width', 'w-full'],
  ['flex-direction', 'flex-col'],
  ['align-items', 'items-start'],
  ['justify-content', 'justify-center'],
  ['border-width', 'border'],
  ['border-type', 'border-solid'],
  ['border-color', 'border-grayscale-40'],
  ['border-radius', 'rounded-lg'],
  ['padding-vertical', 'py-3'],
  ['padding-horizontal', 'px-4'],
  ['background-color', 'bg-white-100'],
  ['position', 'absolute'],
  ['right', 'right-0'],
  ['z-index', 'z-[1]']
])

const optionItem = () => new Map([
  ['width', 'w-full'],
  ['color', 'text-grayscale-100'],
  ['cursor', 'cursor-pointer'],
  ['overflow', 'overflow-hidden'],
  ['white-space', 'whitespace-nowrap'],
  ['text-overflow', 'text-ellipsis']
])

export default {
  wrapper,
  label,
  inputWrapper,
  input,
  optionList,
  optionItem
}

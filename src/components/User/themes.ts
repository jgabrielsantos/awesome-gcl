const wrapper = () => new Map([
  ['width', 'w-full'],
  ['display', 'flex'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-between'],
  ['gap', 'gap-2']
])

const avatar = () => new Map([
  ['height', 'h-auto'],
  ['border-radius', 'rounded-full']
])

const initials = () => new Map([
  ['display', 'flex'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-center'],
  ['border-radius', 'rounded-full'],
  ['color', 'text-white-100'],
  ['background-color', 'bg-grayscale-40'],
])

const info = () => new Map([
  ['width', 'w-full'],
  ['display', 'flex'],
  ['flex-direction', 'flex-col'],
  ['align-items', 'items-start'],
  ['justify-content', 'justify-between']
])

const name = () => new Map([])

const description = () => new Map([
  ['overflow', 'overflow-hidden'],
  ['overflow', 'whitespace-nowrap'],
  ['overflow', 'text-ellipsis']
])

export default {
  wrapper,
  avatar,
  initials,
  info,
  name,
  description
}

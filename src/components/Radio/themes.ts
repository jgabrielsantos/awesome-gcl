const wrapper = () => new Map([
  ['display', 'flex'],
  ['align-items', 'items-start'],
  ['justify-content', 'justify-start'],
  ['flex-wrap', 'flex-nowrap'],
  ['cursor', 'cursor-pointer']
])

const input = () => new Map([
  ['display', 'hidden'],
  ['width', 'w-0'],
  ['height', 'h-0'],
  ['peer', 'peer']
])

const spanWrapper = () => new Map([
  ['position', 'relative']
])

const span = () => new Map([
  ['display', 'block'],
  ['border-width', 'border'],
  ['border-style', 'border-solid'],
  ['border-color', 'border-grayscale-40'],
  ['border-radius', 'rounded-full'],
  ['background-color', 'bg-white-100'],

  // Hover state
  ['hover-border-color', 'hover:border-primary-50'],
  ['hover-background-color', 'hover:bg-primary-0'],

  // Before pseudo element
  ['before-visibility', 'before:invisible'],
  ['before-border-radius', 'before:rounded-full'],
  ['before-position', 'before:absolute'],
  ['before-content', "before:content-['']"],
  ['before-background-color', "before:bg-primary-50"],

  // On input disabled
  ['peer-disabled-border-color', 'peer-disabled:border-grayscale-40'],
  ['peer-disabled-background-color', 'peer-disabled:bg-grayscale-5'],
  ['peer-disabled-before-background-color', 'peer-disabled:before:bg-grayscale-60'],

  // On input checked
  ['peer-checked-border-width', 'peer-checked:border-2'],
  ['peer-checked-border-color', 'peer-checked:border-primary-50'],
  ['peer-checked-before-visibility', 'peer-checked:before:visible']
])

const section = () => new Map([
  ['display', 'flex'],
  ['flex-direction', 'flex-col'],
  ['align-items', 'items-start'],
])

const label = () => new Map([
  ['color', 'text-grayscale-100'],
  ['cursor', 'cursor-pointer'],

  // On input disabled
  ['peer-disabled-color', 'peer-disabled:text-grayscale-60']
])

const caption = () => new Map([
  ['color', 'text-grayscale-100'],

  // On input disabled
  ['peer-disabled-color', 'peer-disabled:text-grayscale-60']
])

export default {
  wrapper,
  input,
  spanWrapper,
  span,
  section,
  label,
  caption
}

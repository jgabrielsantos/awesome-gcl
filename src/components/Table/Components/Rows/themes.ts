const row = () => new Map([
  ['width', 'w-full'],
  ['display', 'flex'],
  ['flex-direction', 'flex-col'],
  ['gap', 'gap-0'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-between'],
  ['padding-vertical', 'py-4'],
  ['padding-horizontal', 'px-2'],
  ['border-bottom-size', 'border-b'],
  ['border-style', 'border-solid'],
  ['border-color', 'border-grayscale-10'],

  // Last child
  ['last-child-border-bottom', 'last:border-b-0']
])

// row main
const dataWrapper = () => new Map([
  ['width', 'w-full'],
  ['display', 'flex'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-between'],
  ['gap', 'gap-2.5']
])

// data
const data = () => new Map([
  ['width', 'w-full'],
  ['display', 'flex'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-start']
])

const iconWrapper = () => new Map([
  ['width', 'w-fit'],
  ['display', 'flex'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-center'],
  ['border-radius', 'rounded-md'],
  ['padding', 'p-1.5'],

  // Hover state
  ['hover-background-color', 'hover:bg-grayscale-5']
])

const details = () => new Map([
  ['width', 'w-full'],
  ['overflow', 'overflow-hidden'],
  ['transition-property', 'transition-all'],
  ['transition-durantion', 'duration-100'],
  ['transition-timing', 'ease-out'],
  ['transition-timing', 'bg-grayscale-5']
])

export default {
  row,
  dataWrapper,
  data,
  iconWrapper,
  details
}
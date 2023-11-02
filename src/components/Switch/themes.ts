const wrapper = () => new Map([
  ['display', 'flex'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-start'],
  ['flex-wrap', 'flex-nowrap'],
  ['cursor', 'cursor-pointer']
])

const label = () => new Map([
  ['cursor', 'cursor-pointer'],
  ['font-color', 'text-grayscale-100']
])

const switchWrapper = () => new Map([
  ['cursor', 'cursor-pointer'],
  ['position', 'relative'],
  ['display', 'flex'],
  ['border-width', 'border-4'],
  ['border-style', 'border-solid'],
  ['border-color', 'border-transparent'],
  ['border-radius', 'rounded-full'],

  // Hover state
  ['hover-border-color', 'hover:border-primary-5']
])

const input = () => new Map([
  ['opacity', 'invisible'],
  ['width', 'w-0'],
  ['height', 'h-0'],
  ['peer', 'peer']
])

const span = () => new Map([
  ['position', 'absolute'],
  ['cursor', 'cursor-pointer'],
  ['top', 'top-0'],
  ['left', 'left-0'],
  ['right', 'right-0'],
  ['bottom', 'bottom-0'],
  ['background-color', 'bg-grayscale-80'],
  ['border-radius', 'rounded-full'],

  // Before pseudoclass
  ['before-position', 'before:absolute'],
  ['before-content', "before:content-['']"],
  ['before-top', 'before:top-0.5'],
  ['before-bottom', 'before:bottom-0.5'],
  ['before-left', 'before:left-0.5'],
  ['before-background-color', 'before:bg-white-100'],
  ['before-transition', 'before:duration-300'],
  ['before-border-radius', 'before:rounded-full'],

  // On Input checked
  ['peer-checked-background-color', 'peer-checked:bg-primary-50'],
  ['peer-checked-before-right', 'before:peer-checked:right-0.5'],
  ['peer-checked-before-translate', 'before:peer-checked:translate-x-full'],

  // On Input disabled
  ['peer-disabled-background-color', 'peer-disabled:bg-grayscale-5'],
  ['peer-disabled-before-background-color', 'before:peer-disabled:bg-grayscale-60'],

  // On Input checked and disabled
  ['peer-checked-disabled-background-color', 'peer-checked:peer-disabled:bg-primary-5'],
  ['peer-checked-disabled-before-background-color', 'before:peer-checked:peer-disabled:bg-white-100'],

])

export default {
  wrapper,
  label,
  switchWrapper,
  input,
  span
}

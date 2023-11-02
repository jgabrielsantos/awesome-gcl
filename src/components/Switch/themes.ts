const wrapper = () => new Map([
  ['display', 'flex'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-between']
])

const label = () => new Map([
  ['font-color', 'text-grayscale-100']
])

const switchWrapper = () => new Map([
  ['position', 'relative'],
  ['display', 'flex']
])

const input = () => new Map([
  ['opacity', 'opacity-0'],
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

  // On Input checked
  ['peer-checked-background-color', 'peer-checked:bg-primary-50'],

  // Before pseudoclass
  ['before-position', 'before:absolute'],
  ['before-content', "before:content-['']"],
  ['before-left', 'before:left-1'],
  ['before-bottom', 'before:bottom-1'],
  ['before-background-color', 'before:bg-white-100'],
  ['before-transition', 'before:duration-300'],
  ['before-border-radius', 'before:rounded-full'],

  // On Input checked
  ['before-translate', 'peer-checked:before:translate-x-full'],
])

export default {
  wrapper,
  label,
  switchWrapper,
  input,
  span
}

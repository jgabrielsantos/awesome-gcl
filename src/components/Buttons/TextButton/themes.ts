const base = () => new Map([
  ['cursor', 'cursor-pointer'],
  ['border-width', 'border-b'],
  ['border-styled', 'border-solid'],
  ['border-color', 'border-transparent'],
  ['font-weight', 'font-medium'],

  // Disabled state
  ['disabled-color', 'disabled:text-grayscale-60'],
])

const primary = () => new Map([
  ['text-color', 'text-primary-50'],

  // Hover state
  ['hover-border-color', 'hover:border-primary-50'],
])

const secondary = () => new Map([
  ['text-color', 'text-grayscale-100'],

  // Hover state
  ['hover-border-color', 'hover:border-grayscale-100'],
])

const destructive = () => new Map ([
  ['text-color', 'text-support-alert-50'],

  // Hover state
  ['hover-border-color', 'hover:border-support-alert-50'],
])

const success = () => new Map ([
  ['text-color', 'text-support-success-50'],

  // Hover state
  ['hover-border-color', 'hover:border-support-success-50'],
])

const contrast = () => new Map ([
  ['text-color', 'text-white-100'],

  // Hover state
  ['hover-border-color', 'hover:border-white-100'],
])


export default {
  base,
  primary,
  secondary,
  destructive,
  success,
  contrast
}

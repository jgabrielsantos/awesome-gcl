const base = () => new Map([
  ['cursor', 'cursor-pointer'],
  ['width', 'w-fit'],
  ['height', 'h-fit'],
  ['display', 'flex'],
  ['flex-wrap', 'flex-wrap'],
  ['justify-content', 'justify-center'],
  ['align-items', 'items-center'],
  ['border-width', 'border'],
  ['border-styled', 'border-solid'],
  ['border-radius', 'rounded-md'],
  ['font-weight', 'font-medium'],

  // Disabled state
  ['disabled-cursor', 'disabled:cursor-not-allowed'],
  ['disabled-border-color', 'disabled:border-grayscale-40'],
  ['disabled-color', 'disabled:text-grayscale-60'],
])

const primary = () => new Map([
  ['border-color', 'border-primary-50'],
  ['text-color', 'text-white-100'],
  ['background-color', 'bg-primary-50'],

  // Hover state
  ['hover-border-color', 'hover:border-primary-100'],
  ['hover-background-color', 'hover:bg-primary-100'],

  // Disable state
  ['disabled-background-color', 'disabled:bg-grayscale-5']
])

const secondary = () => new Map([
  ['border-color', 'border-primary-50'],
  ['text-color', 'text-primary-50'],
  ['background-color', 'bg-white-100'],

  // Hover state
  ['hover-border-color', 'hover:border-primary-50'],
  ['hover-background-color', 'hover:bg-primary-0'],

  // Disabled state
  ['disabled-background-color', 'disabled:bg-white-0']
])

const tertiary = () => new Map([
  ['border-color', 'border-grayscale-40'],
  ['text-color', 'text-grayscale-100'],
  ['background-color', 'bg-white-100'],

  // Hover state
  ['hover-border-color', 'hover:border-grayscale-100'],
  ['hover-background-color', 'hover:bg-white-100'],

  // Disabled state
  ['disabled-background-color', 'disabled:bg-white-0']
])

const destructivePrimary = () => new Map ([
  ['border-color', 'border-support-alert-50'],
  ['text-color', 'text-white-100'],
  ['background-color', 'bg-support-alert-50'],

  // Hover state
  ['hover-border-color', 'hover:border-support-alert-100'],
  ['hover-background-color', 'hover:bg-support-alert-100'],

  // Disabled state
  ['disabled-background-color', 'disabled:bg-grayscale-5']
])

const destructiveSecondary = () => new Map ([
  ['border-color', 'border-support-alert-50'],
  ['text-color', 'text-support-alert-50'],
  ['background-color', 'bg-white-100'],

  // Hover state
  ['hover-border-color', 'hover:border-support-alert-50'],
  ['hover-background-color', 'hover:bg-support-alert-5'],

  // Disabled state
  ['disabled-background-color', 'disabled:bg-white-0']
])

const successPrimary = () => new Map ([
  ['border-color', 'border-support-success-50'],
  ['text-color', 'text-white-100'],
  ['background-color', 'bg-support-success-50'],

  // Hover state
  ['hover-border-color', 'hover:border-support-success-100'],
  ['hover-background-color', 'hover:bg-support-success-100'],

  // Disabled state
  ['disabled-background-color', 'disabled:bg-grayscale-5']
])

const successSecondary = () => new Map ([
  ['border-color', 'border-support-success-50'],
  ['text-color', 'text-support-success-50'],
  ['background-color', 'bg-white-100'],

  // Hover state
  ['hover-border-color', 'hover:border-support-success-50'],
  ['hover-background-color', 'hover:bg-support-success-5'],

  // Disabled state
  ['disabled-background-color', 'disabled:bg-white-0']
])

const contrastPrimary = () => new Map ([
  ['border-color', 'border-primary-50'],
  ['text-color', 'text-primary-50'],
  ['background-color', 'bg-white-100'],

  // Hover state
  ['hover-border-color', 'hover:border-primary-50'],
  ['hover-background-color', 'hover:bg-primary-0'],

  // Disabled state
  ['disabled-background-color', 'disabled:bg-grayscale-5']
])

const contrastSecondary = () => new Map ([
  ['border-color', 'border-white-100'],
  ['text-color', 'text-white-100'],
  ['background-color', 'bg-grayscale-100'],

  // Hover state
  ['hover-border-color', 'hover:border-white-100'],
  ['hover-background-color', 'hover:bg-white-40'],

  // Disabled state
  ['disabled-background-color', 'disabled:bg-white-0']
])

export default {
  base,
  primary,
  secondary,
  tertiary,
  destructivePrimary,
  destructiveSecondary,
  successPrimary,
  successSecondary,
  contrastPrimary,
  contrastSecondary
}

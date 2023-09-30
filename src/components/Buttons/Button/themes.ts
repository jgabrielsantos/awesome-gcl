const defaultRules = new Map([
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
  ['disabled-cursor', 'disabled:cursor-not-allowed'],
  ['disabled-border-color', 'disabled:border-grayscale-40'],
  ['disabled-color', 'disabled:text-grayscale-60'],
])

const primaryRules = new Map([
  ['border-color', 'border-primary-50'],
  ['text-color', 'text-white-100'],
  ['background-color', 'bg-primary-50'],
  ['hover-border-color', 'hover:border-primary-100'],
  ['hover-background-color', 'hover:bg-primary-100'],
  ['disabled-background-color', 'disabled:bg-grayscale-5']
])

const secondaryRules = new Map([
  ['border-color', 'border-primary-50'],
  ['text-color', 'text-primary-50'],
  ['background-color', 'bg-white-100'],
  ['hover-border-color', 'hover:border-primary-50'],
  ['hover-background-color', 'hover:bg-primary-0'],
  ['disabled-background-color', 'disabled:bg-white-0']
])

const tertiaryRules = new Map([
  ['border-color', 'border-grayscale-40'],
  ['text-color', 'text-grayscale-100'],
  ['background-color', 'bg-white-100'],
  ['hover-border-color', 'hover:border-grayscale-100'],
  ['hover-background-color', 'hover:bg-white-100'],
  ['disabled-background-color', 'disabled:bg-white-0']
])

const destructivePrimaryRules = new Map ([
  ['border-color', 'border-support-alert-50'],
  ['text-color', 'text-white-100'],
  ['background-color', 'bg-support-alert-50'],
  ['hover-border-color', 'hover:border-support-alert-100'],
  ['hover-background-color', 'hover:bg-support-alert-100'],
  ['disabled-background-color', 'disabled:bg-grayscale-5']
])

const destructiveSecondaryRules = new Map ([
  ['border-color', 'border-support-alert-50'],
  ['text-color', 'text-support-alert-50'],
  ['background-color', 'bg-white-100'],
  ['hover-border-color', 'hover:border-support-alert-50'],
  ['hover-background-color', 'hover:bg-support-alert-5'],
  ['disabled-background-color', 'disabled:bg-white-0']
])

const successPrimaryRules = new Map ([
  ['border-color', 'border-support-success-50'],
  ['text-color', 'text-white-100'],
  ['background-color', 'bg-support-success-50'],
  ['hover-border-color', 'hover:border-support-success-100'],
  ['hover-background-color', 'hover:bg-support-success-100'],
  ['disabled-background-color', 'disabled:bg-grayscale-5']
])

const successSecondaryRules = new Map ([
  ['border-color', 'border-support-success-50'],
  ['text-color', 'text-support-success-50'],
  ['background-color', 'bg-white-100'],
  ['hover-border-color', 'hover:border-support-success-50'],
  ['hover-background-color', 'hover:bg-support-success-5'],
  ['disabled-background-color', 'disabled:bg-white-0']
])

const contrastPrimaryRules = new Map ([
  ['border-color', 'border-primary-50'],
  ['text-color', 'text-primary-50'],
  ['background-color', 'bg-white-100'],
  ['hover-border-color', 'hover:border-primary-50'],
  ['hover-background-color', 'hover:bg-primary-0'],
  ['disabled-background-color', 'disabled:bg-grayscale-5']
])

const contrastSecondaryRules = new Map ([
  ['border-color', 'border-white-100'],
  ['text-color', 'text-white-100'],
  ['background-color', 'bg-grayscale-100'],
  ['hover-border-color', 'hover:border-white-100'],
  ['hover-background-color', 'hover:bg-white-40'],
  ['disabled-background-color', 'disabled:bg-white-0']
])

export default {
  defaultRules,
  primaryRules,
  secondaryRules,
  tertiaryRules,
  destructivePrimaryRules,
  destructiveSecondaryRules,
  successPrimaryRules,
  successSecondaryRules,
  contrastPrimaryRules,
  contrastSecondaryRules
}

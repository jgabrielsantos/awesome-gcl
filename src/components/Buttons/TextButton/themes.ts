const defaultRules = new Map([
  ['cursor', 'cursor-pointer'],
  ['border-width', 'border-b-2'],
  ['border-styled', 'border-solid'],
  ['border-color', 'border-transparent'],
  ['font-weight', 'font-medium'],
  ['disabled-color', 'disabled:text-grayscale-60'],
])

const primaryRules = new Map([
  ['text-color', 'text-primary-50'],
  ['border-border-color', 'hover:border-primary-50'],
])

const secondaryRules = new Map([
  ['text-color', 'text-grayscale-100'],
  ['border-border-color', 'hover:border-grayscale-100'],
])

const destructiveRules = new Map ([
  ['text-color', 'text-support-alert-50'],
  ['border-border-color', 'hover:border-support-alert-50'],
])

const successRules = new Map ([
  ['text-color', 'text-support-success-50'],
  ['border-border-color', 'hover:border-support-success-50'],
])

const contrastRules = new Map ([
  ['text-color', 'text-white-100'],
  ['border-border-color', 'hover:border-white-100'],
])


export default {
  defaultRules,
  primaryRules,
  secondaryRules,
  destructiveRules,
  successRules,
  contrastRules
}

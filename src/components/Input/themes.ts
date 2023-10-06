const wrapper = () => new Map([
  ['width', 'w-full'],
  ['display', 'flex'],
  ['flex-direction', 'flex-col'],
  ['align-items', 'items-start'],
  ['justify-content', 'justify-center'],
  ['gap', 'gap-1.5']
])

const label = () => new Map([
  ['width', 'w-full'],
  ['color', 'text-grayscale-100'],

  // Disabled state
  ['disabled-color', 'peer-disabled/input:text-grayscale-60']
])

const input = () => new Map([
  ['peer', ' peer/input'], // for customizing the caption color when input is invalid
  ['border-width', 'border'],
  ['border-style', 'border-solid'],
  ['border-color', 'border-grayscale-40'],
  ['border-radius', 'rounded-md'],
  ['background-color', 'bg-white-100'],
  ['padding-horizontal', 'px-3'],
  ['padding-vertical', 'py-3'],
  ['color', 'text-grayscale-100'],

  // Hover state
  ['hover-border-color', 'hover:border-primary-50'],
  
  // Focus state
  ['focus-border-width', 'focus:border'],
  ['focus-border-color', 'focus:border-primary-50'],

  // Disabled state
  ['disabled-cursor', 'disabled:cursor-not-allowed'],
  ['disabled-border-color', 'disabled:border-grayscale-60'],
  ['disabled-color', 'disabled:text-grayscale-40'],
  ['disabled-background', 'disabled:bg-grayscale-5'],

  // Invalid (Alert) state
  ['invalid-border-color', 'invalid:border-support-alert-50'],

  // Placeholder state
  ['placeholder-color', 'text-grayscale-80'],
  ['placeholder-font-size', 'text-base'],

  // Password type
  ['after-icon', 'after:content: \'\f023\'']
])

const caption = () => new Map([
  // Disabled state
  ['disabled-color', 'peer-disabled/input:text-grayscale-60'],

  // Invalid state
  ['invalid-color', 'peer-invalid/input:text-support-alert-50'],
])

export default {
  wrapper,
  label,
  input,
  caption
}
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
  ['font-size', 'text-base'],
])

const input = () => new Map([
  ['border-width', 'border'],
  ['border-style', 'border-solid'],
  ['border-color', 'border-grayscale-40'],
  ['border-radius', 'round'],
  ['background-color', 'bg-white-100'],
  ['padding-horizontal', 'px-3'],
  ['padding-vertical', 'py-3'],
  ['color', 'text-grayscale-100'],
  ['peer', ' peer'], // for customizing the caption color when input is invalid

  // Hover state
  ['hover-border-color', 'hover:border-primary-50'],

  // Focus state
  ['focus-border-color', 'focus:border-primary-50'],

  // Disabled state
  ['disabled-cursor', 'disabled:cursor-not-allowed'],
  ['disabled-border-color', 'disabled:border-grayscale-60'],
  ['disabled-color', 'disabled:text-grayscale-40'],
  ['disabled-background', 'disabled:bg-grayscale-40'],

  // Invalid (Alert) state
  ['inavlid-border-color', 'invalid:border-support-alert-50'],

  // Placeholder state
  ['placeholder-color', 'text-grayscale-80'],
  ['placeholder-font-size', 'text-base']
])

const caption = () => new Map([
  ['', '']
])
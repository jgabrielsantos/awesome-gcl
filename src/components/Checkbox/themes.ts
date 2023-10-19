const wrapper = () => new Map([
  ['display', 'flex'],
  ['flex-shrink', 'shrink-0'],
  ['justify-content', 'justify-center'],
  ['align-items', 'items-center'],
  ['gap', 'gap-1.5'], // gap: 0.375rem (6px)
  ['position', 'relative']
])

const input = () => new Map([
  ['cursor', 'cursor-pointer'],
  ['border-width', 'border'],
  ['border-style', 'border-solid'],
  ['border-color', 'border-grayscale-40'],
  ['border-radius', 'rounded'], // border-radius: 0.25rem (4px)
  ['background-color', 'bg-white-100'],
  ['appearance', 'appearance-none'],

  // Checked state
  ['checked-border-color', 'checked:border-primary-50'],
  ['checked-background-color', 'checked:bg-primary-50'],

  // Hover state
  ['hover-border-color', 'hover:border-primary-50'],
  ['hover-background-color', 'hover:bg-primary-0'],

  // Disabled state
  ['disabled-cursor', 'disabled:cursor-not-allowed'],
  ['disabled-border-color', 'disabled:border-grayscale-40'],
  ['disabled-background-color', 'disabled:bg-grayscale-5'],

  // Combined states for hover while checked or while disabled
  ['combined-hover-checked-border-color', 'hover:checked:border-primary-50'],
  ['combined-hover-checked-background-color', 'hover:checked:bg-primary-50'],
  ['combined-hover-disabled-border-color', 'hover:disabled:border-grayscale-40'],
  ['combined-hover-disabled-background-color', 'hover:disabled:bg-grayscale-40'],
  ['combined-checked-disabled-background-color', 'checked:disabled:bg-grayscale-40'],
])

const icon = () => new Map([
  ['cursor', 'cursor-pointer'],
  ['position', 'absolute'],
  ['color', 'text-white-100'],
  ['flex-shrink', 'shrink-0']
])

const label = () => new Map([
  ['cursor', 'cursor-pointer']
])

export default {
  wrapper,
  input,
  icon,
  label
}
import { CheckboxPropTypes } from "./types"

const wrapperRules = () => new Map([
  ['display', 'flex'],
  ['flex-shrink', 'shrink-0'],
  ['justify-content', 'justify-center'],
  ['align-items', 'items-center'],
  ['gap', 'gap-1.5'], // gap: 0.375rem (6px)
  ['position', 'relative']
])

const inputRules = () => new Map([
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

const iconRules = ({ size }: Pick<CheckboxPropTypes, 'size'>) => {
  const sizes = {
    large: {
      left: 'left-2px',
      width: 'w-5',
      height: 'h-5'
    },
    medium: {
      left: 'left-0.5',
      width: 'w-4',
      height: 'h-4'
    },
    small: {
      left: 'left-2px',
      width: 'w-3',
      height: 'h-3'
    },
  }

  return new Map([
    ['cursor', 'cursor-pointer'],
    ['position', 'absolute'],
    ['color', 'text-white-100'],
    ['flex-shrink', 'shrink-0'],
    ['left', sizes[size].left],
    ['height', sizes[size].height],
    ['width', sizes[size].width]
  ])
}

const labelRules = () => new Map([
  ['cursor', 'cursor-pointer']
])

export default {
  wrapperRules,
  inputRules,
  iconRules,
  labelRules
}
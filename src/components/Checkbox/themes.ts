import { CheckboxPropTypes } from "./types"

const wrapperRules = () => new Map([
  // ['width', 'w-full'],
  ['display', 'flex'],
  ['flex-shrink', 'shrink-0'],
  ['justify-content', 'justify-center'],
  ['align-items', 'items-center'],
  ['gap', 'gap-1.5'], // gap: 0.375rem (6px)
  ['position', 'relative']
])

const teste = {
  checked: 'border-primary-50',
  error: 'teste',
  default: 'border-grayscale-40',
}

const inputRules = ({ checked }: Pick<CheckboxPropTypes, 'checked'>) => new Map([
  ['cursor', 'cursor-pointer'],
  ['border-width', 'border'],
  ['border-style', 'border-solid'],
  ['border-radius', 'rounded'], // border-radius: 0.25rem (4px)
  ['border-color', 'border-grayscale-40'],
  ['background-color', 'bg-white-100'],
  
  // Checked state
  ['border-color', 'checked:border-primary-50'],
  ['background-color', 'checked:bg-primary-50'],

  // Hover state
  ['hover-border-color', 'hover:border-primary-50'],
  ['hover-background-color', 'hover:bg-primary-0'],

  // Disabled state
  ['disabled-cursor', 'disabled:cursor-not-allowed'],
  ['disabled-border-color', 'disabled:border-grayscale-40'],
  ['disabled-background-color', 'disabled:bg-grayscale-40'],
])

const labelRules = () => new Map([
  ['font-size', 'text-base']
])

export default {
  wrapperRules,
  inputRules,
  labelRules
}
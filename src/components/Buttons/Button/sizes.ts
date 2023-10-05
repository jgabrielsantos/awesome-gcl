const largeSize = () => new Map([
  ['font-size', 'text-base'], // font-size: 1rem (16px) & line-height: 1.5rem (24px)
  ['padding-vertical', 'py-3'], //  padding-top: 0.75rem (12px) & padding-bottom: 0.75rem (12px)
  ['padding-horizontal', 'px-6'] // padding-left: 1.5rem (24px) & padding-right: 1.5rem (24px)
])

const mediumSize = () => new Map([
  ['font-size', 'text-sm'], // font-size: 0.875rem (14px) & line-height: 1.25rem (20px)
  ['padding-vertical', 'py-2.5'], // padding-top: 0.625rem (10px) & padding-bottom: 0.625rem (10px)
  ['padding-horizontal', 'px-5'] // padding-left: 1.25 (20px) & padding-right: 1.25 (20px)
])

const smallSize = () => new Map([
  ['font-size', 'text-xs'], // font-size: 0.75rem (12px) & line-height: 1rem (16px)
  ['padding-vertical', 'py-2'], // padding-top: 0.5rem (8px) & padding-bottom: 0.5rem (8px)
  ['padding-horizontal', 'px-3'] // padding-left: 0.75rem (12px) & padding-right: 0.75rem (12px)
])

export default {
  largeSize,
  mediumSize,
  smallSize
}

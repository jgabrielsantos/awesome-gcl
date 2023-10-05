const largeSize = () => new Map([
  ['font-size', 'text-base'], // font-size: 1rem (16px) & line-height: 1.5rem (24px)
])

const mediumSize = () => new Map([
  ['font-size', 'text-sm'], // font-size: 0.875rem (14px) & line-height: 1.25rem (20px)
])

const smallSize = () => new Map([
  ['font-size', 'text-xs'], // font-size: 0.75rem (12px) & line-height: 1rem (16px)
])

export default {
  largeSize,
  mediumSize,
  smallSize
}

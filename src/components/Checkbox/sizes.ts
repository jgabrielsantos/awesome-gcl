const largeSize = () => ({
  input: new Map([
    ['width', 'w-6'], // width: 1.5rem (24px)
    ['height', 'h-6'] // height: 1.5re, (24px)
  ]),
  label: new Map([
    ['font-size', 'text-base']
  ])
})
const mediumSize = () => ({
  input: new Map([
   ['width', 'w-5'], // width: 1.25rem (20px)
   ['height', 'h-5'] // height: 1.25rem (20px)
  ]),
  label: new Map([
    ['font-size', 'text-sm']
  ])
})
const smallSize = () => ({
  input: new Map([
    ['width', 'w-4'], // width: 1rem (16px)
    ['height', 'h-4'] // height: 1rem (16px)
  ]),
  label: new Map([
    ['font-size', 'text-xs']
  ])
})

export default {
  largeSize,
  mediumSize,
  smallSize
}
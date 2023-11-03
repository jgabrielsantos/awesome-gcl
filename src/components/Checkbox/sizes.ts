const large = () => ({
  input: new Map([
    ['min-width', 'min-w-[24px]'],
    ['width', 'w-6'], // width: 1.5rem (24px)
    ['height', 'h-6'] // height: 1.5re, (24px)
  ]),
  label: new Map([
    ['font-size', 'text-base']
  ]),
  icon: new Map([
    ['left', 'left-2px'],
    ['height', 'h-5'],
    ['width', 'w-5']
  ])
})
const medium = () => ({
  input: new Map([
    ['min-width', 'min-w-[20px]'],
    ['width', 'w-5'], // width: 1.25rem (20px)
    ['height', 'h-5'] // height: 1.25rem (20px)
  ]),
  label: new Map([
    ['font-size', 'text-sm']
  ]),
  icon: new Map([
    ['left', 'left-0.5'],
    ['height', 'h-4'],
    ['width', 'w-4']
  ])
})
const small = () => ({
  input: new Map([
    ['min-width', 'min-w-[16px]'],
    ['width', 'w-4'], // width: 1rem (16px)
    ['height', 'h-4'] // height: 1rem (16px)
  ]),
  label: new Map([
    ['font-size', 'text-xs']
  ]),
  icon: new Map([
    ['left', 'left-2px'],
    ['height', 'h-3'],
    ['width', 'w-3']
  ])
})

export default {
  large,
  medium,
  small
}
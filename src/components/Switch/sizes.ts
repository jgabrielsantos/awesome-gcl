const large = () => ({
  wrapper: new Map([
    ['gap', 'gap-6']
  ]),
  label: new Map([
    ['font-size', 'text-base']
  ]),
  span: new Map([
    ['width', 'w-11'],
    ['height', 'h-6'],
    ['before-widht', 'before:w-5'],
    ['before-height', 'before:h-5']
  ])
})

const medium = () => ({
  wrapper: new Map([
    ['gap', 'gap-4']
  ]),
  label: new Map([
    ['font-size', 'text-sm']
  ]),
  span: new Map([
    ['width', 'w-9'],
    ['height', 'h-5'],
    ['before-widht', 'before:w-4'],
    ['before-height', 'before:h-4']
  ])
})

const small = () => ({
  wrapper: new Map([
    ['gap', 'gap-4']
  ]),
  label: new Map([
    ['font-size', 'text-xs']
  ]),
  span: new Map([
    ['width', 'w-7'],
    ['height', 'h-4'],
    ['widht', 'before-w-3'],
    ['height', 'before-h-3']
  ])
})

export default {
  large,
  medium,
  small
}

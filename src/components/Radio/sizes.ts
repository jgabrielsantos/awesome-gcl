const large = () => ({
  wrapper: new Map([
    ['gap-vertical', '8'],
    ['gap-horizontal', '16']
  ]),
  span: new Map([
    ['width', '24'],
    ['before-width', 'before:12'],
  ]),
  label: new Map([
    ['font-size', 'text-base']
  ]),
  caption: new Map([
    ['font-size', 'text-sm']
  ])
})

const medium = () => ({
  wrapper: new Map([
    ['gap-vertical', '8'],
    ['gap-horizontal', '12']
  ]),
  span: new Map([
    ['width', '20'],
    ['before-width', 'before:10'],
  ]),
  label: new Map([
    ['font-size', 'text-sm']
  ]),
  caption: new Map([
    ['font-size', 'text-xs']
  ])
})

const small = () => ({
  wrapper: new Map([
    ['gap-vertical', '4'],
    ['gap-horizontal', '8']
  ]),
  span: new Map([
    ['width', '16'],
    ['before-width', 'before:8'],
  ]),
  label: new Map([
    ['font-size', 'text-xs']
  ]),
  caption: new Map([
    ['font-size', 'text-xs']
  ])
})

export default {
  large,
  medium,
  small
}

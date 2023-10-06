const large = () => ({
  label: new Map([
    ['font-size', 'text-base']
  ]),
  input: new Map([
    ['padding-vertical', 'py-3'],
    ['padding-horizontal', 'px-4'],
    ['font-size', 'text-base'],
  ]),
  caption: new Map([
    ['font-size', 'text-sm']
  ])
})

const medium = () => ({
  label: new Map([
    ['font-size', 'text-sm']
  ]),
  input: new Map([
    ['padding-vertical', 'py-2.5'],
    ['padding-horizontal', 'px-4'],
    ['font-size', 'text-sm'],
  ]),
  caption: new Map([
    ['font-size', 'text-xs']
  ])
})

const small = () => ({
  label: new Map([
    ['font-size', 'text-xs']
  ]),
  input: new Map([
    ['padding-vertical', 'py-2'],
    ['padding-horizontal', 'px-3'],
    ['font-size', 'text-xs'],
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
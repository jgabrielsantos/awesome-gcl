const large = () => ({
  wrapper: new Map([
    ['padding-vertical', 'py-3'],
    ['padding-horizontal', 'px-5']
  ]),
  children: new Map([
    ['font-size', 'text-base']
  ])
})

const medium = () => ({
  wrapper: new Map([
    ['padding-vertical', 'py-2.5'],
    ['padding-horizontal', 'px-4']
  ]),
  children: new Map([
    ['font-size', 'text-sm']
  ])
})

const small = () => ({
  wrapper: new Map([
    ['padding-vertical', 'py-2'],
    ['padding-horizontal', 'px-3']
  ]),
  children: new Map([
    ['font-size', 'text-xs']
  ])
})

export default {
  large,
  medium,
  small
}

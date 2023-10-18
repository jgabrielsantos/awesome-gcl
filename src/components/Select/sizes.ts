const large = () => ({
  label: new Map([
    ['font-size', 'text-base']
  ]),
  inputWrapper: new Map([
    ['padding-vertical', 'py-3'],
    ['padding-horizontal', 'px-4']
  ]),
  input: new Map([
    ['font-size', 'text-base']
  ]),
  optionList: new Map([
    ['gap', 'gap-2'],
    ['top', 'top-[110%]']
  ])
})

const medium = () => ({
  label: new Map([
    ['font-size', 'text-sm']
  ]),
  inputWrapper: new Map([
    ['padding-vertical', 'py-3'],
    ['padding-horizontal', 'px-4']
  ]),
  input: new Map([
    ['font-size', 'text-sm']
  ]),
  optionList: new Map([
    ['gap', 'gap-2'],
    ['top', 'top-[100%]']
  ])
})

const small = () => ({
  label: new Map([
    ['font-size', 'text-xs']
  ]),
  inputWrapper: new Map([
    ['padding-vertical', 'py-3'],
    ['padding-horizontal', 'px-4']
  ]),
  input: new Map([
    ['font-size', 'text-xs']
  ]),
  optionList: new Map([
    ['gap', 'gap-2'],
    ['top', 'top-[95%]']
  ])
})

export default {
  large,
  medium,
  small
}

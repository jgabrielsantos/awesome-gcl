const large = () => ({
  label: new Map([
    ['font-size', 'text-base']
  ]),
  input: new Map([
    ['gap', 'gap-2.5'],
    ['padding-vertical', 'py-2'],
    ['padding-horizontal', 'px-3'],
    ['min-height', 'min-h-[50px]'],
    ['font-size', 'text-base']
  ]),
  selectedItem: new Map([
    ['gap', 'gap-1.5'],
    ['padding-vertical', 'py-0.5'],
    ['padding-horizontal', 'px-2'],
    ['font-size', 'text-base']
  ]),
  selectedList: new Map([
    ['gap', 'gap-2.5']
  ]),
  optionList: new Map([
    ['gap', 'gap-2'],
    ['padding-vertical', 'py-3'],
    ['padding-horizontal', 'px-4'],
    ['top', 'top-[110%]'],
  ]),
})

const medium = () => ({
  label: new Map([
    ['font-size', 'text-sm']
  ]),
  input: new Map([
    ['gap', 'gap-2.5'],
    ['padding-vertical', 'py-2.5'],
    ['padding-horizontal', 'px-3'],
    ['min-height', 'min-h-[46px]'],
    ['font-size', 'text-sm']
  ]),
  selectedItem: new Map([
    ['gap', 'gap-1.5'],
    ['padding-vertical', 'py-0.5'],
    ['padding-horizontal', 'px-2'],
    ['font-size', 'text-sm']
  ]),
  selectedList: new Map([
    ['gap', 'gap-2']
  ]),
  optionList: new Map([
    ['gap', 'gap-2'],
    ['padding-vertical', 'py-3'],
    ['padding-horizontal', 'px-4'],
    ['top', 'top-[105%]'],
  ]),
})

const small = () => ({
  label: new Map([
    ['font-size', 'text-xs']
  ]),
  input: new Map([
    ['gap', 'gap-2.5'],
    ['padding-vertical', 'py-2'],
    ['padding-horizontal', 'px-2.5'],
    ['min-height', 'min-h-[42px]'],
    ['font-size', 'text-xs']
  ]),
  selectedItem: new Map([
    ['gap', 'gap-1.5'],
    ['padding-vertical', 'py-1'],
    ['padding-horizontal', 'px-2'],
    ['font-size', 'text-xs']
  ]),
  selectedList: new Map([
    ['gap', 'gap-1.5']
  ]),
  optionList: new Map([
    ['gap', 'gap-2'],
    ['padding-vertical', 'py-2'],
    ['padding-horizontal', 'px-3'],
    ['top', 'top-[95%]'],
  ]),
})

export default {
  large,
  medium,
  small
}
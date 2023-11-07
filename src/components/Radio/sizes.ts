const large = () => ({
  wrapper: new Map([
    ['gap-horizontal', 'gap-x-4']
  ]),
  span: new Map([
    ['width', 'w-6'],
    ['heihgt', 'h-6'],
    ['before-width', 'before:w-3'],
    ['before-heihgt', 'before:h-3'],
    ['before-top', 'before:top-1.5'],
    ['before-left', 'before:left-1.5']
  ]),
  section: new Map([
    ['gap-vertical', 'gap-y-2']
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
    ['gap-horizontal', 'gap-x-3']
  ]),
  span: new Map([
    ['width', 'w-5'],
    ['height', 'h-5'],
    ['before-width', 'before:w-2.5'],
    ['before-height', 'before:h-2.5'],
    ['before-top', 'before:top-[5px]'],
    ['before-left', 'before:left-[5px]']
  ]),
  section: new Map([
    ['gap-vertical', 'gap-y-2']
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
    ['gap-horizontal', 'gap-x-2']
  ]),
  span: new Map([
    ['width', 'w-4'],
    ['height', 'h-4'],
    ['before-width', 'before:w-2'],
    ['before-height', 'before:h-2'],
    ['before-top', 'before:top-1'],
    ['before-left', 'before:left-1']
  ]),
  section: new Map([
    ['gap-vertical', 'gap-y-1']
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

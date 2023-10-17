const large = () => ({
  avatar: new Map([
    ['width', 'w-[48px]'],
    ['height', 'h-[48px]']
  ]),
  initials: new Map([
    ['width', 'w-[48px]'],
    ['height', 'h-[42px]'],
    ['font-size', 'text-base']
  ]),
  info: new Map([
    ['gap', 'gap-1']
  ]),
  name: new Map([
    ['font-size', 'text-base']
  ]),
  description: new Map([
    ['font-size', 'text-sm']
  ])
})

const medium = () => ({
  avatar: new Map([
    ['width', 'w-[40px]'],
    ['height', 'h-[40px]']
  ]),
  initials: new Map([
    ['width', 'w-[40px]'],
    ['height', 'h-[35px]'],
    ['font-size', 'text-sm']
  ]),
  info: new Map([
    ['gap', 'gap-1']
  ]),
  name: new Map([
    ['font-size', 'text-sm']
  ]),
  description: new Map([
    ['font-size', 'text-xs']
  ])
})

const small = () => ({
  avatar: new Map([
    ['width', 'w-[32px]'],
    ['height', 'h-[32px]']
  ]),
  initials: new Map([
    ['width', 'w-[32px]'],
    ['height', 'h-[30px]'],
    ['font-size', 'text-sm']
  ]),
  info: new Map([
    ['', '']
  ]),
  name: new Map([
    ['font-size', 'text-sm']
  ]),
  description: new Map([
    ['font-size', 'text-xs']
  ])
})

export default {
  large,
  medium,
  small
}

const toast = (isOpen: boolean, type: string) => new Map([
  ['width', 'w-fit'],
  ['max-width', 'max-w-[760px]'],
  ['display', isOpen ? 'flex' : 'hidden'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-between'],
  ['padding-vertical', 'py-2.5'],
  ['padding-horizontal', 'px-3'],
  ['gap', 'gap-2'],
  ['border-radius', 'rounded-lg'],
  ['background-color', type]
])

export default {
  toast
}

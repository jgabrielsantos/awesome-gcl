const table = () => new Map([
  ['width', 'w-full']
])

const tableHead = () => new Map([
  ['', '']
])

const headerRow = () => new Map([
  ['width', 'w-full'],
  ['display', 'flex'],
  ['flex-direction', 'flex-row'],
  ['gap', 'gap-2.5'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-between'],
  ['padding-vertical', 'py-4'],
  ['padding-horizontal', 'px-2']
])

const hiddenIconRep = () => new Map([
  ['min-width', 'min-w-[28px]']
])

export default {
  table,
  tableHead,
  headerRow,
  hiddenIconRep
}
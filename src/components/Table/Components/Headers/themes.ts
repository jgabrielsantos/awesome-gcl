const header = () => new Map([
  ['width', 'w-full'],
  ['display', 'flex'],
  ['align-items', 'items-center'],
  ['justify-content', 'justify-start'],
  ['gap', 'gap-1.5']
])

const icon = () => new Map([
  ['color', 'text-bg-grayscale-80']
])

export default {
  header,
  icon
}
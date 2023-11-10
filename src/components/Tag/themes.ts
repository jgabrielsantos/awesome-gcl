const wrapper = () => new Map([
  ['display', 'flex'],
  ['width', 'w-fit'],
  ['border-radius', 'rounded-full'],
  ['background-color', 'bg-grayscale-5'],
  
  // Hover state
  ['hover-background-color', 'hover:bg-primary-5']
])

const children = () => new Map([
  ['color', 'text-grayscale-100']
])

export default {
  wrapper,
  children
}

# Awesome GCL

Foundation React UI components for shipping new projects faster

## Instalation

```bash
npm i awesome-gcl
```

## Getting started with Awesome GCL

**React:**
```jsx
import { Button } from 'awesome-gcl'
```

**Next js:**
```jsx
'use client'
import { Button } from 'awesome-gcl'
```

## Components
All components are built based on the styled-components library!
- Button
- Figure
- Select
_ Input

### Customize a component
Add new css rules or overwrite the existing ones

**Import the [styled components](https://styled-components.com/docs/basics#installation) library**

```jsx
import styled from 'styled-components'
import { Button } from 'awesgome-gcl'

const customButton = styled(Button)`
  width: 100%;
`
```

## Customize the color set
### Take advange of the default colors found in the theme file
```jsx
import { setColor, colors } from 'awesome-gcl'

const customColor = {
  primary = {
    ...colors.primary,
    100: 'change this default color'
  }
}
```

### Add new colors
```jsx
import { setColor } from 'awesome-gcl'

const customColor = {
  black: {
    100: '#000000'
  }
}
```
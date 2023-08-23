export let colors = {
  white: {
    100: '#FFFFFF',
    72: '#FFFFFFB8',
    40: '#FFFFFF66',
  },
  grayscale: {
    100: '#202532',
    80: '#50545E',
    60: '#838791',
    40: '#BEC0C5',
    10: '#D9DADD',
    5: '#EAEAEB',
    0: '#F2F2F3',
  },
  primary: {
    100: '#2648A4',
    50: '#2C5DE5',
    20: '#91ADFA',
    10: '#BFD0FD',
    5: '#D7E1FE',
    0: '#EEF3FF',
  },
  support: {
    success: {
      100: '#086343',
      50: '#008556',
      5: '#D6F3E2',
    },
    warning: {
      100: '#A64F21',
      50: '#E86825',
      5: '#FFE1BE',
    },
    alert: {
      100: '#9F1B1F',
      50: '#DE1C22',
      5: '#FFD6D7',
    },
  }
}

export const setColor = (customColor: Record<string, any>) => {
  colors = {
    ...colors,
    ...customColor
  }
}
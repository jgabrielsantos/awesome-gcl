import { ToastListStyles } from "./styles";
import Themes from "./themes";
import { ToastListComponentsEnum } from "./types";

type TestThemePropTypes = {
  additionalClasses?: string[]
  componentName: ToastListComponentsEnum
}

describe('Toast List styles', () => {
  describe('Components', () => {
    const testThemes = ({
      additionalClasses,
      componentName
    }: TestThemePropTypes) => {
      const styles = new ToastListStyles(additionalClasses)
      const themes = styles.buildStyleRules()
      const expectedResult = [
        ...Themes[componentName]().values(),
      ]
      if(additionalClasses) expectedResult.push(...additionalClasses)

      expect(themes[`${componentName}Class`]).toEqual(expectedResult.join(' '))
    }
    describe('Wrapper', () => {
      it('Default classes', () => testThemes({
        componentName: 'wrapper'
      }))

      it('Additional classes', () => testThemes({
        additionalClasses: [
          'outline-0',
          'box-shadow-0'
        ],
        componentName: 'wrapper'
      }))
    })
  })

  describe('Style Builder', () => {
    
  })
})

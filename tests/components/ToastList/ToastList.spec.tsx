import { ToastListStyles } from "../../../src/components/ToastList/styles";
import Themes from "../../../src/components/ToastList/themes";
import { ToastListComponentsEnum } from "../../../src/components/ToastList/types";

type TestThemePropTypes = {
  additionalClasses?: string[]
  componentName: ToastListComponentsEnum
}

describe('Toast List styles', () => {
  describe('Components', () => {
    const testStyleRuleBuilder = ({
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
      it('Default classes', () => testStyleRuleBuilder({
        componentName: 'wrapper'
      }))

      it('Additional classes', () => testStyleRuleBuilder({
        additionalClasses: [
          'outline-0',
          'box-shadow-0'
        ],
        componentName: 'wrapper'
      }))
    })
  })
})

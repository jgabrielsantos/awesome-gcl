import Themes from '../../../../src/components/Buttons/TextButton/themes'
import Sizes from '../../../../src/components/Buttons/TextButton/sizes'
import { TextButtonStyles } from "../../../../src/components/Buttons/TextButton/styles"
import { TextButtonAdditionalClassesPropTypes, TextButtonComponentsEnum, TextButtonThemeEnum } from "../../../../src/components/Buttons/TextButton/types"
import { GSizeEnum } from "../../../../src/components/types"

type TestThemePropTypes = {
  component: TextButtonComponentsEnum
  theme?: TextButtonThemeEnum
  size?: GSizeEnum
  additionalClasses?: TextButtonAdditionalClassesPropTypes
}

describe('Button styles', () => {
  const testTheme = ({
    component,
    theme = 'primary',
    size = 'large',
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new TextButtonStyles({
      theme,
      size,
      additionalClasses
    })

    const themes = styles.buildStyleRules()

    const expectedStyle = [
      ...Themes.base().values(),
      ...Sizes[size]().values(),
      ...Themes[theme]().values()
    ]

    if (additionalClasses !== undefined) expectedStyle.push(...additionalClasses[component])

    expect(themes[`${component}Class`]).toEqual(expectedStyle.join(' '))
  }

  describe('Sizes', () => {
    it('Should pass large size class', () => {
      testTheme({
        component: 'button',
        size: 'large'
      })
    })

    it('Should pass medium size class', () => {
      testTheme({
        component: 'button',
        size: 'medium'
      })
    })

    it('Should pass small size class', () => {
      testTheme({
        component: 'button',
        size: 'small'
      })
    })
  })

  describe('Themes', () => {
    it('Should pass primary theme class', () => {
      testTheme({
        component: 'button',
        theme: 'primary'
      })
    })

    it('Should pass secondary theme class', () => {
      testTheme({
        component: 'button',
        theme: 'secondary'
      })
    })

    it('Should pass destructive theme class', () => {
      testTheme({
        component: 'button',
        theme: 'destructive'
      })
    })

    it('Should pass success theme class', () => {
      testTheme({
        component: 'button',
        theme: 'success'
      })
    })

    it('Should pass contrast theme class', () => {
      testTheme({
        component: 'button',
        theme: 'contrast'
      })
    })
  })

  describe('Additional Classes', () => {
    it('Should not have additional classes', () => {
      testTheme({
        component: 'button'
      })
    })

    it('Should pass additional classes', () => {
      testTheme({
        component: 'button',
        additionalClasses: {
          button: [
            'outline-0'
          ]
        }
      })
    })
  })
})

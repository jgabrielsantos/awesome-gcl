import Themes from '../../../../src/components/Buttons/IconButton/themes'
import Sizes from '../../../../src/components/Buttons/IconButton/sizes'
import { IconButtonStyles } from '../../../../src/components/Buttons/IconButton/styles';
import {
  IconButtonAdditionalClassesPropTypes,
  IconButtonComponentsEnum,
  IconButtonThemesEnum
} from "../../../../src/components/Buttons/IconButton/types";
import { GSizeEnum } from "../../../../src/components/types";

type TestThemePropTypes = {
  component: IconButtonComponentsEnum
  theme?: IconButtonThemesEnum
  size?: GSizeEnum
  additionalClasses?: IconButtonAdditionalClassesPropTypes
}

describe('Button styles', () => {
  const testTheme = ({
    component,
    additionalClasses,
    theme = 'primary',
    size = 'large'
  }: TestThemePropTypes) => {
    const styles = new IconButtonStyles({
      additionalClasses,
      theme,
      size
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
    it('Should pass large size classes', () => {
      testTheme({
        component: 'button',
        size: 'large'
      })
    })

    it('Should pass medium size classes', () => {
      testTheme({
        component: 'button',
        size: 'medium'
      })
    })

    it('Should pass small size classes', () => {
      testTheme({
        component: 'button',
        size: 'small'
      })
    })
  })

  describe('Themes', () => {
    it('Should pass Primary size classes', () => {
      testTheme({
        component: 'button',
        theme: 'primary'
      })
    })

    it('Should pass Secondary size classes', () => {
      testTheme({
        component: 'button',
        theme: 'secondary'
      })
    })

    it('Should pass Tertiary size classes', () => {
      testTheme({
        component: 'button',
        theme: 'tertiary'
      })
    })

    it('Should pass Destructive Primary size classes', () => {
      testTheme({
        component: 'button',
        theme: 'destructivePrimary'
      })
    })

    it('Should pass Destructive Secondary size classes', () => {
      testTheme({
        component: 'button',
        theme: 'destructiveSecondary'
      })
    })

    it('Should pass Success Primary size classes', () => {
      testTheme({
        component: 'button',
        theme: 'successPrimary'
      })
    })

    it('Should pass Success Secondary size classes', () => {
      testTheme({
        component: 'button',
        theme: 'successSecondary'
      })
    })

    it('Should pass Contrast Primary size classes', () => {
      testTheme({
        component: 'button',
        theme: 'contrastPrimary'
      })
    })

    it('Should pass Constrast Secondary size classes', () => {
      testTheme({
        component: 'button',
        theme: 'contrastSecondary'
      })
    })
  })

  describe('Additional Classes', () => {
    it('Should not have additional classes', () => {
      testTheme({
        component: 'button',
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
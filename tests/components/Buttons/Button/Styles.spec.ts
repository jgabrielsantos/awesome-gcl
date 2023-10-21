import Themes from "../../../../src/components/Buttons/Button/themes";
import Sizes from '../../../../src/components/Buttons/Button/sizes'
import { ButtonStyles } from "../../../../src/components/Buttons/Button/styles";
import {
  ButtonAdditionalClassesPropTypes,
  ButtonComponentsEnum,
  ButtonThemesEnum
} from "../../../../src/components/Buttons/Button/types";
import { GSizeEnum } from "../../../../src/components/types";

type TestThemePropTypes = {
  component: ButtonComponentsEnum,
  theme?: ButtonThemesEnum,
  size?: GSizeEnum,
  additionalClasses?: ButtonAdditionalClassesPropTypes
}

describe('Button styles', () => {
  const testTheme = ({
    component,
    theme = 'primary',
    size = 'large',
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new ButtonStyles({
      theme,
      size,
      additionalClasses,
    })
    const themes = styles.buildStyleRules()

    const expectedStyle = [
      ...Themes.base().values(),
      ...Sizes[size]().values(),
      ...Themes[theme]().values(),
      additionalClasses?.button
    ]

    if (additionalClasses !== undefined) expectedStyle.push(...additionalClasses[component])

    expect(themes[`${component}Class`]).toEqual(expectedStyle.join(' '))
  }

  describe('Sizes', () => {
    it('Should pass large size classes', () => testTheme({
      component: 'button',
      size: 'large'
    }))

    it('Should pass medium size classes', () => testTheme({
      component: 'button',
      size: 'medium'
    }))

    it('Should pass small size classes', () => testTheme({
      component: 'button',
      size: 'small'
    }))
  })

  describe('Themes', () => {
    it('Should pass primary theme classes', () => testTheme({
      component: 'button',
      theme: 'primary'
    }))

    it('Should pass secondary theme classes', () => testTheme({
      component: 'button',
      theme: 'secondary'
    }))

    it('Should pass tertiary theme classes', () => testTheme({
      component: 'button',
      theme: 'tertiary'
    }))

    it('Should pass destructive primary theme classes', () => testTheme({
      component: 'button',
      theme: 'destructivePrimary'
    }))

    it('Should pass destructive secondary theme classes', () => testTheme({
      component: 'button',
      theme: 'destructiveSecondary'
    }))

    it('Should pass success primary theme classes', () => testTheme({
      component: 'button',
      theme: 'successPrimary'
    }))

    it('Should pass success secondary theme classes', () => testTheme({
      component: 'button',
      theme: 'successSecondary'
    }))

    it('Should pass contrast primary theme classes', () => testTheme({
      component: 'button',
      theme: 'contrastPrimary'
    }))

    it('Should pass contrast secondary theme classes', () => testTheme({
      component: 'button',
      theme: 'contrastSecondary'
    }))
  })
})

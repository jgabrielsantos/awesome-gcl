import Themes from '../../../src/components/Tag/themes'
import Sizes from '../../../src/components/Tag/sizes'
import { TagAdditionalClassesPropTypes, TagComponentsEnum } from "../../../src/components/Tag/types"
import { GSizeEnum } from "../../../src/components/types"
import { TagStyles } from '../../../src/components/Tag/styles'

type TestThemePropTypes = {
  component: TagComponentsEnum
  size?: GSizeEnum
  additionalClasses?: TagAdditionalClassesPropTypes
}

describe('Styles', () => {
  const testThemes = ({
    component,
    size = 'large',
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new TagStyles({
      size,
      additionalClasses
    })
    const themes = styles.buildStyleRules()

    const expectedStyle = [
      ...Themes[component]().values(),
      ...Sizes[size]()[component].values()
    ]

    if(additionalClasses !== undefined) {
      const additional = {
        wrapper: additionalClasses.wrapper || [],
        children: additionalClasses.children || []
      }
      expectedStyle.push(...additional[component])
    }

    expect(themes[`${component}Class`]).toBe(expectedStyle.join(' '))
  }

  describe('Wrapper', () => {
    describe('Themes', () => {
      it('Should pass wrapper class rules', () => testThemes({
        component: 'wrapper'
      }))
    })

    describe('Sizes', () => {
      it('Should pass large class rules', () => testThemes({
        component: 'wrapper',
        size: 'large'
      }))
      it('Should pass medium class rules', () => testThemes({
        component: 'wrapper',
        size: 'medium'
      }))
      it('Should pass small class rules', () => testThemes({
        component: 'wrapper',
        size: 'small'
      }))
    })

    describe('AdditionalClasses', () => {
      it('Should have additional classes', () => testThemes({
        component: 'wrapper',
        additionalClasses: {
          wrapper: ['wrapper-custom-style']
        }
      }))

      it('Should not have additional classes', () => testThemes({
        component: 'wrapper',
        additionalClasses: {
          wrapper: []
        }
      }))
    })
  })

  describe('Children', () => {
    describe('Themes', () => {
      it('Should pass children class rules', () => testThemes({
        component: 'children'
      }))
    })

    describe('Sizes', () => {
      it('Should pass large class rules', () => testThemes({
        component: 'children',
        size: 'large'
      }))
      it('Should pass medium class rules', () => testThemes({
        component: 'children',
        size: 'medium'
      }))
      it('Should pass small class rules', () => testThemes({
        component: 'children',
        size: 'small'
      }))
    })

    describe('AdditionalClasses', () => {
      it('Should have additional classes', () => testThemes({
        component: 'children',
        additionalClasses: {
          children: ['children-custom-style']
        }
      }))

      it('Should not have additional classes', () => testThemes({
        component: 'children',
        additionalClasses: {
          children: []
        }
      }))
    })
  })
})

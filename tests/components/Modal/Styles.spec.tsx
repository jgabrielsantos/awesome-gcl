import Themes from '../../../src/components/Modal/themes'
import { ModalStyles } from "../../../src/components/Modal/styles"
import { ModalAdditionalClassesPropTypes, ModalComponentsEnum } from "../../../src/components/Modal/types"

type TestThemePropTypes = {
  component: ModalComponentsEnum
  isOpen?: boolean
  additionalClasses?: ModalAdditionalClassesPropTypes
}

describe('Modal styles', () => {
  const testTheme = ({
    component,
    isOpen = false,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new ModalStyles({
      additionalClasses,
      isOpen
    })

    const themes = styles.buildStyleRules()

    const expectedStyle = [
      ...Themes[component]({ isOpen }).values()
    ]

    if(additionalClasses !== undefined) {
      const additional = {
        wrapper: additionalClasses.wrapper || [],
        dialog: additionalClasses.dialog || []
      }

      expectedStyle.push(...additional[component])
    }

    expect(themes[`${component}Class`]).toEqual(expectedStyle.join(' '))
  }

  describe('Components', () => {
    describe('Wrapper', () => {
      describe('Themes', () => {
        it('Should pass wrapper theme class', () => testTheme({
          component: 'wrapper'
        }))
      })

      describe('Display', () => {
        it('Opened wrapper', () => testTheme({
          component: 'wrapper',
          isOpen: true
        }))

        it('Hidden wrapper', () => testTheme({
          component: 'wrapper',
          isOpen: false
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'wrapper',
        }))

        it('Should pass additional classes', () => testTheme({
          component: 'wrapper',
          additionalClasses: {
            wrapper: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Dialog', () => {
      describe('Themes', () => {
        it('Should pass dialog theme class', () => testTheme({
          component: 'dialog'
        }))
      })

      describe('Display', () => {
        it('Opened dialog', () => testTheme({
          component: 'dialog',
          isOpen: true
        }))

        it('Hidden dialog', () => testTheme({
          component: 'dialog',
          isOpen: false
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'dialog',
        }))

        it('Should pass additional classes', () => testTheme({
          component: 'dialog',
          additionalClasses: {
            dialog: [
              'outline-0'
            ]
          }
        }))
      })
    })
  })
})
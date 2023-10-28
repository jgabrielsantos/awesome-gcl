import Themes from '../../../../../src/components/ToastList/Components/Toast/themes'
import {
  ToastStyles
} from "../../../../../src/components/ToastList/Components/Toast/styles"
import {
  ToastAdditionalClassesPropTypes,
  ToastComponentsEnum,
  ToastUseCaseEnums
} from "../../../../../src/components/ToastList/Components/Toast/types"

type TestThemePropTypes = {
  additionalClasses?: ToastAdditionalClassesPropTypes
  componentName: ToastComponentsEnum
  useCase?: ToastUseCaseEnums
  isOpen?: boolean
}

describe('Toast styles', () => {
  describe('Components', () => {
    const testTheme = ({
      additionalClasses,
      componentName,
      useCase = 'primary',
      isOpen = false
    }: TestThemePropTypes) => {
      const styles = new ToastStyles({
        additionalClasses,
        useCase,
        isOpen
      })
      const themes = styles.buildStyleRules()

      const expectedBackground = useCase === 'primary' ?
      `bg-${useCase}-5` :
      `bg-support-${useCase}-5`

      const expectedDisplay = isOpen ? 'flex' : 'hidden'

      const expectedStyle = [
        ...Themes[componentName]().values(),
        expectedBackground,
        expectedDisplay
      ]
      if(additionalClasses) expectedStyle.push(...additionalClasses[componentName])

      expect(themes[`${componentName}Class`]).toEqual(expectedStyle.join(' '))
    }

    describe('Toast', () => {
      describe('Background-color key', () => {
        it('Should pass bg-primary-5 class', () => testTheme({
          componentName: 'toast',
          useCase: 'primary'
        }))

        it('Should pass bg-support-success-5 class', () => testTheme({
          componentName: 'toast',
          useCase: 'success'
        }))

        it('Should pass bg-support-fail-5 class', () => testTheme({
          componentName: 'toast',
          useCase: 'alert'
        }))

        it('Should pass bg-support-warning-5 class', () => testTheme({
          componentName: 'toast',
          useCase: 'warning'
        }))
      })

      describe('Display key', () => {
        it('Should pass flex class', () => testTheme({
          componentName: 'toast',
          isOpen: true
        }))

        it('Should pass hidden class', () => testTheme({
          componentName: 'toast',
          isOpen: false
        }))
      })

      describe('Additional classes', () => {
        it('Should pass default classes only', () => {
          testTheme({
            componentName: 'toast',
          })
        })

        it('Should pass additional classes', () => {
          testTheme({
            additionalClasses: {
              toast: [
                'outline-0'
              ]
            },
            componentName: 'toast',
          })
        })
      })
    })
  })
})

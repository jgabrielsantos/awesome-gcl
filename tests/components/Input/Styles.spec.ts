import Themes from '../../../src/components/Input/themes'
import Sizes from '../../../src/components/Input/sizes'
import { InputStyles } from "../../../src/components/Input/styles"
import { InputAdditionalClassesPropTypes, InputComponentsEnum, InputSizeComponentsEnum } from "../../../src/components/Input/types"
import { GSizeEnum } from "../../../src/components/types"

type TestThemePropTypes = {
  component: InputComponentsEnum
  size?: GSizeEnum
  sizeComponent?: InputSizeComponentsEnum
  additionalClasses?: InputAdditionalClassesPropTypes
}

describe('Input styles', () => {
  const testTheme = ({
    component,
    size = 'large',
    sizeComponent,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new InputStyles({
      additionalClasses,
      size
    })

    const themes = styles.buildStyleRules()

    const expectedStyle = [
      ...Themes[component]().values(),
    ]

    if(sizeComponent !== undefined) {
      const sizes = Sizes[size]()
      expectedStyle.push(...sizes[sizeComponent].values())
    }

    if(additionalClasses !== undefined) {
      const additional = {
        wrapper: additionalClasses.wrapper || [],
        label: additionalClasses.label || [],
        inputWrapper: additionalClasses.inputWrapper || [],
        input: additionalClasses.input || [],
        passwordButton: additionalClasses.passwordButton || [],
        caption: additionalClasses.caption || []
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

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'wrapper'
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

    describe('Label', () => {
      describe('Themes', () => {
        it('Should pass label theme class', () => testTheme({
          component: 'label',
          sizeComponent: 'label'
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'label',
          size: 'large',
          sizeComponent: 'label'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'label',
          size: 'medium',
          sizeComponent: 'label'
        }))
        it('Should pass small size class', () => testTheme({
          component: 'label',
          size: 'small',
          sizeComponent: 'label'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'label',
          sizeComponent: 'label'
        }))

        it('Should pass additional classes', () => testTheme({
          component: 'label',
          sizeComponent: 'label',
          additionalClasses: {
            label: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Input Wrapper', () => {
      describe('Themes', () => {
        it('Should pass input wrapper theme class', () => testTheme({
          component: 'inputWrapper'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'inputWrapper'
        }))

        it('Should pass additional classes', () => testTheme({
          component: 'inputWrapper',
          additionalClasses: {
            inputWrapper: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Input', () => {
      describe('Themes', () => {
        it('Should pass input theme class', () => testTheme({
          component: 'input',
          sizeComponent: 'input'
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'input',
          size: 'large',
          sizeComponent: 'input'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'input',
          size: 'medium',
          sizeComponent: 'input'
        }))
        it('Should pass small size class', () => testTheme({
          component: 'input',
          size: 'small',
          sizeComponent: 'input'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'input',
          sizeComponent: 'input'
        }))

        it('Should pass additional classes', () => testTheme({
          component: 'input',
          sizeComponent: 'input',
          additionalClasses: {
            input: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Password Button', () => {
      describe('Themes', () => {
        it('Should pass password button theme class', () => testTheme({
          component: 'passwordButton',
          sizeComponent: 'passwordButton'
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'passwordButton',
          size: 'large',
          sizeComponent: 'passwordButton'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'passwordButton',
          size: 'medium',
          sizeComponent: 'passwordButton'
        }))
        it('Should pass small size class', () => testTheme({
          component: 'passwordButton',
          size: 'small',
          sizeComponent: 'passwordButton'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'passwordButton',
          sizeComponent: 'passwordButton'
        }))

        it('Should pass additional classes', () => testTheme({
          component: 'passwordButton',
          sizeComponent: 'passwordButton',
          additionalClasses: {
            passwordButton: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('caption', () => {
      describe('Themes', () => {
        it('Should pass caption theme class', () => testTheme({
          component: 'caption',
          sizeComponent: 'caption'
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'caption',
          size: 'large',
          sizeComponent: 'caption'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'caption',
          size: 'medium',
          sizeComponent: 'caption'
        }))
        it('Should pass small size class', () => testTheme({
          component: 'caption',
          size: 'small',
          sizeComponent: 'caption'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'caption',
          sizeComponent: 'caption'
        }))

        it('Should pass additional classes', () => testTheme({
          component: 'caption',
          sizeComponent: 'caption',
          additionalClasses: {
            caption: [
              'outline-0'
            ]
          }
        }))
      })
    })
  })
})
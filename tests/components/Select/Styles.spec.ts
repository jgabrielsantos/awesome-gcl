import Themes from '../../../src/components/Select/themes'
import Sizes from '../../../src/components/Select/sizes'
import { SelectStyles } from "../../../src/components/Select/styles"
import { SelectAdditionalClassesPropTypes, SelectComponentsEnum, SelectSizeComponentEnums } from "../../../src/components/Select/types"
import { GSizeEnum } from "../../../src/components/types"

type TestThemePropTypes = {
  component: SelectComponentsEnum
  isOpen?: boolean
  disabled?: boolean
  size?: GSizeEnum
  sizeComponent?: SelectSizeComponentEnums
  additionalClasses?: SelectAdditionalClassesPropTypes
}

describe('Select styles', () => {
  const testTheme = ({
    component,
    isOpen = false,
    disabled = false,
    size = 'medium',
    sizeComponent,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new SelectStyles({
      additionalClasses,
      size,
      disabled,
      isOpen
    })

    const themes = styles.buildStyleRules()

    const expectedDisplay = isOpen ? 'flex' : 'hidden'
    const expectedCursor = disabled ? 'cursor-not-allowed' : 'cursor-pointer'
    const expectedBackgroundColor = disabled ? 'bg-grayscale-0' : 'bg-white-100'
    const expectedStyle = [
      ...Themes[component]().values(),
      expectedCursor,
      expectedBackgroundColor,
      expectedDisplay
    ]

    if(sizeComponent !== undefined) {
      const sizes = Sizes[size]()
      expectedStyle.push(...sizes[sizeComponent].values())
    }

    if(additionalClasses !== undefined) {
      const additional = {
        wrapper: additionalClasses?.wrapper || [],
        label: additionalClasses?.label || [],
        inputWrapper: additionalClasses?.inputWrapper || [],
        input: additionalClasses?.input || [],
        optionList: additionalClasses?.optionList || [],
        optionItem: additionalClasses?.optionItem || []
      }

      expectedStyle.push(...additional[component])
    }
  }

  describe('Components', () => {
    describe('Wrapper', () => {
      describe('Themes', () => {
        it('Should pass wrapper theme class', () => testTheme({
          component: 'wrapper'
        }))
      })

      describe('Additional Classes', () => {
        it('Should pass aditional classes', () => testTheme({
          component: 'wrapper',
          additionalClasses: {
            wrapper: [
              'outline-0'
            ]
          }
        }))

        it('Should not pass aditional classes', () => testTheme({
          component: 'wrapper',
          additionalClasses: {
            wrapper: []
          }
        }))
      })
    })

    describe('Label', () => {
      describe('Themes', () => {
        it('Should pass label theme class', () => testTheme({
          component: 'label'
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
        it('Should pass aditional classes', () => testTheme({
          component: 'label',
          additionalClasses: {
            label: [
              'outline-0'
            ]
          }
        }))

        it('Should not pass aditional classes', () => testTheme({
          component: 'label',
          additionalClasses: {
            label: []
          }
        }))
      })
    })

    describe('Input Wrapper', () => {
      describe('Themes', () => {
        it('Should pass input theme class', () => testTheme({
          component: 'inputWrapper'
        }))

        it('Should pass disabled style rules class', () => testTheme({
          component: 'inputWrapper',
          sizeComponent: 'inputWrapper',
          disabled: true
        }))

        it('Should not pass disabled style rules class', () => testTheme({
          component: 'inputWrapper',
          sizeComponent: 'inputWrapper',
          disabled: false
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'inputWrapper',
          size: 'large',
          sizeComponent: 'inputWrapper'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'inputWrapper',
          size: 'medium',
          sizeComponent: 'inputWrapper'
        }))

        it('Should pass small size class', () => testTheme({
          component: 'inputWrapper',
          size: 'small',
          sizeComponent: 'inputWrapper'
        }))
      })

      describe('Additional Classes', () => {
        it('Should pass aditional classes', () => testTheme({
          component: 'inputWrapper',
          additionalClasses: {
            inputWrapper: [
              'outline-0'
            ]
          }
        }))

        it('Should not pass aditional classes', () => testTheme({
          component: 'inputWrapper',
          additionalClasses: {
            inputWrapper: []
          }
        }))
      })
    })

    describe('Input', () => {
      describe('Themes', () => {
        it('Should pass input theme class', () => testTheme({
          component: 'input'
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
        it('Should pass aditional classes', () => testTheme({
          component: 'input',
          additionalClasses: {
            input: [
              'outline-0'
            ]
          }
        }))

        it('Should not pass aditional classes', () => testTheme({
          component: 'input',
          additionalClasses: {
            input: []
          }
        }))
      })
    })

    describe('Option List', () => {
      describe('Themes', () => {
        it('Should pass option list theme class', () => testTheme({
          component: 'optionList'
        }))

        it('Should pass display style rules class', () => testTheme({
          component: 'optionList',
          isOpen: true
        }))

        it('Should not pass display style rules class', () => testTheme({
          component: 'optionList',
          isOpen: false
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'optionList',
          size: 'large',
          sizeComponent: 'optionList'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'optionList',
          size: 'medium',
          sizeComponent: 'optionList'
        }))

        it('Should pass small size class', () => testTheme({
          component: 'optionList',
          size: 'small',
          sizeComponent: 'optionList'
        }))
      })

      describe('Additional Classes', () => {
        it('Should pass aditional classes', () => testTheme({
          component: 'optionList',
          additionalClasses: {
            optionList: [
              'outline-0'
            ]
          }
        }))

        it('Should not pass aditional classes', () => testTheme({
          component: 'optionList',
          additionalClasses: {
            optionList: []
          }
        }))
      })
    })

    describe('Option Item', () => {
      describe('Themes', () => {
        it('Should pass option item theme class', () => testTheme({
          component: 'optionItem'
        }))
      })

      describe('Additional Classes', () => {
        it('Should pass aditional classes', () => testTheme({
          component: 'optionItem',
          additionalClasses: {
            optionItem: [
              'outline-0'
            ]
          }
        }))

        it('Should not pass aditional classes', () => testTheme({
          component: 'optionItem',
          additionalClasses: {
            optionItem: []
          }
        }))
      })
    })
  })
})

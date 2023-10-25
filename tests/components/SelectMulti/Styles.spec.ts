import Themes from "../../../src/components/SelectMulti/themes"
import Sizes from "../../../src/components/SelectMulti/sizes"
import { SelectMultiAdditionalClassesPropTypes, SelectMultiComponentsEnum, SelectMultiSizeComponentsEnum } from "../../../src/components/SelectMulti/types"
import { GSizeEnum } from "../../../src/components/types"
import { SelectMultiStyles } from "../../../src/components/SelectMulti/styles"

type TestThemePropTypes = {
  component: SelectMultiComponentsEnum
  size?: GSizeEnum
  sizeComponent?: SelectMultiSizeComponentsEnum
  disabled?: boolean
  isOpen?: boolean
  additionalClasses?: SelectMultiAdditionalClassesPropTypes
}

describe('Select Multi styles', () => {
  const testTheme = ({
    component,
    size = 'medium',
    sizeComponent,
    disabled,
    isOpen = false,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new SelectMultiStyles({
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
        input: additionalClasses?.input || [],
        placeholder: additionalClasses?.placeholder || [],
        selectedList: additionalClasses?.optionList || [],
        selectedItem: additionalClasses?.optionItem || [],
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
        it('Should have additional classes', () => testTheme({
          component: 'wrapper',
          additionalClasses: {
            wrapper: [
              'outline-0'
            ]
          }
        }))

        it('Should not have additional classes', () => testTheme({
          component: 'wrapper',
          additionalClasses: {
            wrapper: []
          }
        }))
      })
    })
    describe('Label', () => {
      describe('Themes', () => {
        it('Should pass wrapper theme class', () => testTheme({
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
        it('Should have additional classes', () => testTheme({
          component: 'label',
          additionalClasses: {
            label: [
              'outline-0'
            ]
          }
        }))

        it('Should not have additional classes', () => testTheme({
          component: 'label',
          additionalClasses: {
            label: []
          }
        }))
      })
    })
    describe('Input', () => {
      describe('Themes', () => {
        it('Should pass input theme class', () => testTheme({
          component: 'input'
        }))

        it('Should pass correct disabled style rule', () => {
          testTheme({
            component: 'input',
            disabled: true
          })

          testTheme({
            component: 'input',
            disabled: false
          })
        })
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
        it('Should have additional classes', () => testTheme({
          component: 'input',
          additionalClasses: {
            input: [
              'outline-0'
            ]
          }
        }))

        it('Should not have additional classes', () => testTheme({
          component: 'input',
          additionalClasses: {
            input: []
          }
        }))
      })
    })
    describe('Placeholder', () => {
      describe('Themes', () => {
        it('Should pass placeholder theme class', () => testTheme({
          component: 'placeholder'
        }))
      })

      describe('Additional Classes', () => {
        it('Should have additional classes', () => testTheme({
          component: 'placeholder',
          additionalClasses: {
            placeholder: [
              'outline-0'
            ]
          }
        }))

        it('Should not have additional classes', () => testTheme({
          component: 'placeholder',
          additionalClasses: {
            placeholder: []
          }
        }))
      })
    })
    describe('Selected Item', () => {
      describe('Themes', () => {
        it('Should pass selected item theme class', () => testTheme({
          component: 'selectedItem'
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'selectedItem',
          size: 'large',
          sizeComponent: 'selectedItem'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'selectedItem',
          size: 'medium',
          sizeComponent: 'selectedItem'
        }))

        it('Should pass small size class', () => testTheme({
          component: 'selectedItem',
          size: 'small',
          sizeComponent: 'selectedItem'
        }))
      })

      describe('Additional Classes', () => {
        it('Should have additional classes', () => testTheme({
          component: 'selectedItem',
          additionalClasses: {
            selectedItem: [
              'outline-0'
            ]
          }
        }))

        it('Should not have additional classes', () => testTheme({
          component: 'selectedItem',
          additionalClasses: {
            selectedItem: []
          }
        }))
      })
    })
    describe('Selected List', () => {
      describe('Themes', () => {
        it('Should pass selectedL list theme class', () => testTheme({
          component: 'selectedList'
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'selectedList',
          size: 'large',
          sizeComponent: 'selectedList'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'selectedList',
          size: 'medium',
          sizeComponent: 'selectedList'
        }))

        it('Should pass small size class', () => testTheme({
          component: 'selectedList',
          size: 'small',
          sizeComponent: 'selectedList'
        }))
      })

      describe('Additional Classes', () => {
        it('Should have additional classes', () => testTheme({
          component: 'selectedList',
          additionalClasses: {
            selectedList: [
              'outline-0'
            ]
          }
        }))

        it('Should not have additional classes', () => testTheme({
          component: 'selectedList',
          additionalClasses: {
            selectedList: []
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
        it('Should have additional classes', () => testTheme({
          component: 'optionItem',
          additionalClasses: {
            optionItem: [
              'outline-0'
            ]
          }
        }))

        it('Should not have additional classes', () => testTheme({
          component: 'optionItem',
          additionalClasses: {
            optionItem: []
          }
        }))
      })
    })
    describe('Option List', () => {
      describe('Themes', () => {
        it('Should pass option list theme class', () => testTheme({
          component: 'optionList'
        }))

        it('Should pass correct display style rule', () => {
          testTheme({
            component: 'optionList',
            isOpen: true
          })

          testTheme({
            component: 'optionList',
            isOpen: false
          })
        })
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
        it('Should have additional classes', () => testTheme({
          component: 'optionList',
          additionalClasses: {
            optionList: [
              'outline-0'
            ]
          }
        }))

        it('Should not have additional classes', () => testTheme({
          component: 'optionList',
          additionalClasses: {
            optionList: []
          }
        }))
      })
    })
  })
})

import Themes from '../../../src/components/Checkbox/themes'
import Sizes from '../../../src/components/Checkbox/sizes'
import { CheckboxStyles } from "../../../src/components/Checkbox/styles"
import { CheckboxAdditionalClassesPropTypes, CheckboxComponentsEnum, CheckboxSizeComponentsEnum } from "../../../src/components/Checkbox/types"
import { GSizeEnum } from "../../../src/components/types"

type TestThemePropTypes = {
  component: CheckboxComponentsEnum
  size?: GSizeEnum
  sizeComponent?: CheckboxSizeComponentsEnum
  additionalClasses?: CheckboxAdditionalClassesPropTypes
}

describe('Checkbox styles', () => {
  const testTheme = ({
    component,
    size = 'large',
    sizeComponent,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new CheckboxStyles({
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
        input: additionalClasses.input || [],
        icon: additionalClasses.icon || []
      }
      expectedStyle.push(...additional[component])
    }

    expect(themes[`${component}Class`]).toEqual(expectedStyle.join(' '))
  }

  describe('Components', () => {
    describe('Wrapper', () => {
      describe('Themes', () => {
        it('Should pass wrapper class', () => testTheme({
          component: 'wrapper'
        }))
      })

      describe('Additional Classes', () => {
        it('Should pass additional Classes', () => testTheme({
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
        it('Should pass wrapper theme class', () => testTheme({
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
        it('Should pass additional Classes', () => {
          testTheme({
            component: 'label',
            sizeComponent: 'label',
            additionalClasses: {
              label: [
                'outline-0'
              ]
            }
          })
        })
      })
    })

    describe('Input', () => {
      describe('Themes', () => {
        it('Should pass wrapper theme class', () => testTheme({
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
        it('Should pass additional Classes', () => {
          testTheme({
            component: 'input',
            sizeComponent: 'input',
            additionalClasses: {
              input: [
                'outline-0'
              ]
            }
          })
        })
      })
    })

    describe('Icon', () => {
      describe('Themes', () => {
        it('Should pass icon class', () => testTheme({
          component: 'icon',
          sizeComponent: 'icon'
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'icon',
          size: 'large',
          sizeComponent: 'icon'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'icon',
          size: 'medium',
          sizeComponent: 'icon'
        }))

        it('Should pass small size class', () => testTheme({
          component: 'icon',
          size: 'small',
          sizeComponent: 'icon'
        }))
      })

      describe('Additional Classes', () => {
        it('Should pass additional Classes', () => testTheme({
          component: 'icon',
          sizeComponent: 'icon',
          additionalClasses: {
            icon: [
              'outline-0'
            ]
          }
        }))
      })
    })
  })
})
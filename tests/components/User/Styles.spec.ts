import Themes from "../../../src/components/User/themes"
import Sizes from "../../../src/components/User/sizes"
import { UserStyles } from "../../../src/components/User/styles"
import { UserAdditionalClassesPropTypes, UserComponentsEnum, UserSizeComponentsEnum } from "../../../src/components/User/types"
import { GSizeEnum } from "../../../src/components/types"

type TestThemePropTypes = {
  component: UserComponentsEnum
  size?: GSizeEnum
  sizeComponent?: UserSizeComponentsEnum
  additionalClasses?: UserAdditionalClassesPropTypes
}

describe('Component designs', () => {
  const testTheme = ({
    component,
    size = 'large',
    sizeComponent,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new UserStyles({
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
        wrapper: additionalClasses?.wrapper || [],
        avatar: additionalClasses?.avatar || [],
        initials: additionalClasses?.initials || [],
        info: additionalClasses?.info || [],
        name: additionalClasses?.name || [],
        description: additionalClasses?.description || []
      }
      expectedStyle.push(...additional[component])
    }

    expect(themes[`${component}Class`]).toBe(expectedStyle.join(' '))
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
          component: 'wrapper',
          additionalClasses: {
            wrapper: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'wrapper',
          additionalClasses: {
            wrapper: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Avatar', () => {
      describe('Themes', () => {
        it('Should pass avatar theme class', () => testTheme({
          component: 'avatar',
          sizeComponent: 'avatar'
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'avatar',
          size: 'large',
          sizeComponent: 'avatar'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'avatar',
          size: 'medium',
          sizeComponent: 'avatar'
        }))

        it('Should pass small size class', () => testTheme({
          component: 'avatar',
          size: 'small',
          sizeComponent: 'avatar'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'avatar',
          sizeComponent: 'avatar',
          additionalClasses: {
            avatar: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'avatar',
          sizeComponent: 'avatar',
          additionalClasses: {
            avatar: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Initials', () => {
      describe('Themes', () => {
        it('Should pass initials theme class', () => testTheme({
          component: 'initials',
          sizeComponent: 'initials'
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'initials',
          size: 'large',
          sizeComponent: 'initials'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'initials',
          size: 'medium',
          sizeComponent: 'initials'
        }))

        it('Should pass small size class', () => testTheme({
          component: 'initials',
          size: 'small',
          sizeComponent: 'initials'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'initials',
          sizeComponent: 'initials',
          additionalClasses: {
            initials: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'initials',
          sizeComponent: 'initials',
          additionalClasses: {
            initials: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Info', () => {
      describe('Themes', () => {
        it('Should pass info theme class', () => testTheme({
          component: 'info',
          sizeComponent: 'info'
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'info',
          size: 'large',
          sizeComponent: 'info'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'info',
          size: 'medium',
          sizeComponent: 'info'
        }))

        it('Should pass small size class', () => testTheme({
          component: 'info',
          size: 'small',
          sizeComponent: 'info'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'info',
          sizeComponent: 'info',
          additionalClasses: {
            info: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'info',
          sizeComponent: 'info',
          additionalClasses: {
            info: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Name', () => {
      describe('Themes', () => {
        it('Should pass name theme class', () => testTheme({
          component: 'name',
          sizeComponent: 'name'
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'name',
          size: 'large',
          sizeComponent: 'name'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'name',
          size: 'medium',
          sizeComponent: 'name'
        }))

        it('Should pass small size class', () => testTheme({
          component: 'name',
          size: 'small',
          sizeComponent: 'name'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'name',
          sizeComponent: 'name',
          additionalClasses: {
            name: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'name',
          sizeComponent: 'name',
          additionalClasses: {
            name: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Description', () => {
      describe('Themes', () => {
        it('Should pass description theme class', () => testTheme({
          component: 'description',
          sizeComponent: 'description'
        }))
      })

      describe('Sizes', () => {
        it('Should pass large size class', () => testTheme({
          component: 'description',
          size: 'large',
          sizeComponent: 'description'
        }))

        it('Should pass medium size class', () => testTheme({
          component: 'description',
          size: 'medium',
          sizeComponent: 'description'
        }))

        it('Should pass small size class', () => testTheme({
          component: 'description',
          size: 'small',
          sizeComponent: 'description'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'description',
          sizeComponent: 'description',
          additionalClasses: {
            description: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'description',
          sizeComponent: 'description',
          additionalClasses: {
            description: [
              'outline-0'
            ]
          }
        }))
      })
    })
  })
})
import Themes from "../../../../src/components/Table/Components/Headers/themes"
import { HeaderStyles } from "../../../../src/components/Table/Components/Headers/styles"
import { HeaderAdditionalClasses, HeaderComponentsEnum } from "../../../../src/components/Table/Components/Headers/types"

type TestThemePropTypes = {
  component: HeaderComponentsEnum
  additionalClasses?: HeaderAdditionalClasses
}

describe('Header styles', () => {
  const testTheme = ({
    component,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new HeaderStyles({
      additionalClasses
    })

    const themes = styles.buildStyleRules()

    const expectedStyle = [
      ...Themes[component]().values()
    ]

    if(additionalClasses !== undefined) {
      const additional = {
        header: additionalClasses?.header || [],
        icon: additionalClasses?.icon || []
      }
      expectedStyle.push(...additional[component])
    }

    expect(themes[`${component}Class`]).toEqual(expectedStyle.join(' '))
  }
  describe('Components', () => {
    describe('Header', () => {
      describe('Themes', () => {
        it('Should pass header theme class', () => testTheme({
          component: 'header'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'header',
          additionalClasses: {
            header: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'header',
          additionalClasses: {
            header: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Icon', () => {
      describe('Themes', () => {
        it('Should pass icon theme class', () => testTheme({
          component: 'icon'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'icon',
          additionalClasses: {
            icon: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'icon',
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
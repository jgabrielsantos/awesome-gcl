import Themes from '../../../src/components/Figure/themes'
import { FigureStyles } from "../../../src/components/Figure/styles"
import { FigureAdditionalClassesPropTypes, FigureComponentEnums } from "../../../src/components/Figure/types"

type TestThemePropTypes = {
  component: FigureComponentEnums
  additionalClasses?: FigureAdditionalClassesPropTypes
}

describe('Figure styles', () => {
  const testTheme = ({
    component,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new FigureStyles({ additionalClasses })
    const themes = styles.buildStyleRules()

    const expectedStyle = [
      ...Themes[component]().values()
    ]

    if(additionalClasses !== undefined) {
      const classes = {
        figure: additionalClasses.figure || [],
        image: additionalClasses.image || [],
        caption: additionalClasses.caption || []
      }
      
      expectedStyle.push(...classes[component])
    }

    expect(themes[`${component}Class`]).toEqual(expectedStyle.join(' '))
  }

  describe('Components', () => {
    describe('Figure', () => {
      describe('Theme', () => {
        it('Should render figure class', () => testTheme({
          component: 'figure'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional class', () => testTheme({
          component: 'figure'
        }))

        it('Should have additional class', () => testTheme({
          component: 'figure',
          additionalClasses: {
            figure: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Image', () => {
      describe('Theme', () => {
        it('Should render image class', () => testTheme({
          component: 'image'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional class', () => testTheme({
          component: 'image'
        }))

        it('Should have additional class', () => testTheme({
          component: 'image',
          additionalClasses: {
            image: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Caption', () => {
      describe('Theme', () => {
        it('Should render caption class', () => testTheme({
          component: 'caption'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional class', () => testTheme({
          component: 'caption'
        }))

        it('Should have additional class', () => testTheme({
          component: 'caption',
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
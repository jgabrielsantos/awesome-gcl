import { RowStyles } from "../../../../src/components/Table/Components/Rows/styles"
import Themes from "../../../../src/components/Table/Components/Rows/themes"
import { RowAdditionalClassesPropTypes, RowComponentsEnum } from "../../../../src/components/Table/Components/Rows/types"

type TestThemePropTypes = {
  component: RowComponentsEnum
  hasClickFunction?: boolean
  isOpen?: boolean
  additionalClasses?: RowAdditionalClassesPropTypes
}

describe('Header styles', () => {
  const testTheme = ({
    component,
    hasClickFunction = false,
    isOpen = false,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new RowStyles({
      hasClickFunction,
      isOpen,
      additionalClasses
    })

    const themes = styles.buildStyleRules()

    const expectedCursor = hasClickFunction ? 'cursor-pointer' : 'cursor-default'
    const expectedMarginTop = isOpen ? 'mt-4' : 'mt-0'
    const expectedMaxHeight = isOpen ? 'max-h-full' : 'max-h-0'
    const expectedPadding = isOpen ? 'p-4' : 'p-0'
    const expectedStyle = [
      ...Themes[component]().values(),
    ]

    if(component === 'dataWrapper') {
      expectedStyle.push(expectedCursor)
    }

    if(component === 'details') {
      expectedStyle.push(expectedMarginTop)
      expectedStyle.push(expectedMaxHeight)
      expectedStyle.push(expectedPadding)
    }

    if(additionalClasses !== undefined) {
      const additional = {
        row: additionalClasses?.row || [],
        dataWrapper: additionalClasses?.dataWrapper || [],
        data: additionalClasses?.data || [],
        details: additionalClasses?.details || [],
        iconWrapper: additionalClasses?.iconWrapper || []
      }
      expectedStyle.push(...additional[component])
    }

    expect(themes[`${component}Class`]).toEqual(expectedStyle.join(' '))
  }
  describe('Components', () => {
    describe('Row', () => {
      describe('Themes', () => {
        it('Should pass row theme class', () => testTheme({
          component: 'row'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'row',
          additionalClasses: {
            row: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'row',
          additionalClasses: {
            row: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Data Wrapper', () => {
      describe('Themes', () => {
        it('Should pass data wrapper theme class', () => testTheme({
          component: 'dataWrapper'
        }))

        it('Should have correct click function rules', () => {
          testTheme({
            component: 'dataWrapper',
            hasClickFunction: true
          })

          testTheme({
            component: 'dataWrapper',
            hasClickFunction: false
          })
        })
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'dataWrapper',
          additionalClasses: {
            dataWrapper: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'dataWrapper',
          additionalClasses: {
            dataWrapper: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Data', () => {
      describe('Themes', () => {
        it('Should pass data theme class', () => testTheme({
          component: 'data'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'data',
          additionalClasses: {
            data: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'data',
          additionalClasses: {
            data: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Icon wrapper', () => {
      describe('Themes', () => {
        it('Should pass icon wrapper theme class', () => testTheme({
          component: 'iconWrapper'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'iconWrapper',
          additionalClasses: {
            iconWrapper: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'iconWrapper',
          additionalClasses: {
            iconWrapper: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('details', () => {
      describe('Themes', () => {
        it('Should pass details theme class', () => testTheme({
          component: 'details'
        }))

        it('Should have correct is open rules', () => {
          testTheme({
            component: 'details',
            isOpen: true
          })

          testTheme({
            component: 'details',
            isOpen: false
          })
        })
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'details',
          additionalClasses: {
            details: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'details',
          additionalClasses: {
            details: [
              'outline-0'
            ]
          }
        }))
      })
    })
  })
})
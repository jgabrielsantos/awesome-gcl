import Themes from "../../../src/components/Table/themes"
import { TableStyles } from "../../../src/components/Table/styles"
import { TableAdditionalClassesPropTypes, TableComponentsEnum } from "../../../src/components/Table/types"

type TestThemePropTypes = {
  component: TableComponentsEnum
  additionalClasses?: TableAdditionalClassesPropTypes
}

describe('Table styles', () => {
  const testTheme = ({
    component,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new TableStyles({
      additionalClasses
    })

    const themes = styles.buildStyleRules()

    const expectedStyle = [
      ...Themes[component]().values()
    ]

    if(additionalClasses !== undefined) {
      const additional = {
        table: additionalClasses?.table || [],
        tableHead: additionalClasses?.tableHead || [],
        headerRow: additionalClasses?.headerRow || [],
        hiddenIconRep: additionalClasses?.hiddenIconRep || []
      }
      expectedStyle.push(...additional[component])
    }

    expect(themes[`${component}Class`]).toEqual(expectedStyle.join(' '))
  }

  describe('Components', () => {
    describe('Table', () => {
      describe('Themes', () => {
        it('Should pass table theme class', () => testTheme({
          component: 'table'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'table',
          additionalClasses: {
            table: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'table',
          additionalClasses: {
            table: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Table Head', () => {
      describe('Themes', () => {
        it('Should pass table head theme class', () => testTheme({
          component: 'tableHead'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'tableHead',
          additionalClasses: {
            tableHead: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'tableHead',
          additionalClasses: {
            tableHead: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Header Row', () => {
      describe('Themes', () => {
        it('Should pass header row theme class', () => testTheme({
          component: 'headerRow'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'headerRow',
          additionalClasses: {
            headerRow: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'headerRow',
          additionalClasses: {
            headerRow: [
              'outline-0'
            ]
          }
        }))
      })
    })

    describe('Hidden Icon Rep', () => {
      describe('Themes', () => {
        it('Should pass hidden icon rep theme class', () => testTheme({
          component: 'hiddenIconRep'
        }))
      })

      describe('Additional Classes', () => {
        it('Should not have additional classes', () => testTheme({
          component: 'hiddenIconRep',
          additionalClasses: {
            hiddenIconRep: []
          }
        }))

        it('Should have additional classes', () => testTheme({
          component: 'hiddenIconRep',
          additionalClasses: {
            hiddenIconRep: [
              'outline-0'
            ]
          }
        }))
      })
    })
  })
})
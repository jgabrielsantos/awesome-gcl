import Themes from '../../../src/components/Radio/themes'
import Sizes from '../../../src/components/Radio/sizes'
import { GSizeEnum } from "../../../src/components/types"
import { RadioAdditionalClassesPropTypes, RadioComponentsEnum, RadioSizeComponentsEnum } from '../../../src/components/Radio/types'
import { RadioStyles } from '../../../src/components/Radio/styles'

type TestThemePropTypes = {
  component: RadioComponentsEnum
  size?: GSizeEnum
  sizeComponent?: RadioSizeComponentsEnum
  alert?: boolean
  disabled?: boolean
  additionalClasses?: RadioAdditionalClassesPropTypes
}

describe('Styles', () => {
  const testTheme = ({
    component,
    sizeComponent,
    size = 'large',
    alert,
    disabled,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new RadioStyles({
      size,
      alert,
      additionalClasses
    })

    const themes = styles.buildStyleRules()

    const expectedTheme = Themes[component]()
    let expectedSize: string[] = []
    let expectedAdditionalClasses: string[] = []

    if(alert){
      switch(component) {
        case 'span':
          expectedTheme.set('border-color', 'border-support-alert-50')
          break
        case 'caption':
          expectedTheme.set('color', 'text-support-alert-50')
          break
        }
    }

    if(disabled){
      switch(component) {
        case 'span':
          expectedTheme.set('peer-disabled-border-color', 'peer-disabled:border-grayscale-40')
          expectedTheme.set('peer-disabled-background-color', 'peer-disabled:bg-grayscale-5')
          expectedTheme.set('peer-disabled-before-background-color', 'peer-disabled:before:bg-grayscale-60')
          break
        case 'label':
          expectedTheme.set('peer-disabled-color', 'peer-disabled:text-grayscale-60')
          break
        case 'caption':
          expectedTheme.set('peer-disabled-color', 'peer-disabled:text-grayscale-60')
          break
      }
    }

    if(sizeComponent !== undefined) expectedSize = [...Sizes[size]()[sizeComponent].values()]

    if(additionalClasses !== undefined) {
      const additional = {
        wrapper: additionalClasses?.wrapper || [],
        input: additionalClasses?.input || [],
        spanWrapper: additionalClasses?.spanWrapper || [],
        span: additionalClasses?.span || [],
        section: additionalClasses?.section || [],
        label: additionalClasses?.label || [],
        caption: additionalClasses?.caption || []
      }
      expectedAdditionalClasses = [...additional[component]]
    }

    const expectedResult = [
      ...expectedTheme.values(),
      ...expectedSize,
      ...expectedAdditionalClasses
    ]

    expect(themes[`${component}Class`]).toEqual(expectedResult.join(' '))
  }

  describe('Wrapper', () => {
    describe('Themes', () => {
      it('Should pass wrapper theme classes', () => testTheme({
        component: 'wrapper',
        sizeComponent: 'wrapper'
      }))
    })

    describe('Sizes', () => {
      it('Should pass large size classes', () => testTheme({
        component: 'wrapper',
        size: 'large',
        sizeComponent: 'wrapper'
      }))

      it('Should pass medium size classes', () => testTheme({
        component: 'wrapper',
        size: 'medium',
        sizeComponent: 'wrapper'
      }))

      it('Should pass small size classes', () => testTheme({
        component: 'wrapper',
        size: 'small',
        sizeComponent: 'wrapper'
      }))
    })

    describe('Additional classes', () => {
      it('Should have additional classes', () => testTheme({
        component: 'wrapper',
        sizeComponent: 'wrapper',
        additionalClasses: {
          wrapper: ['wrapper-custom-class']
        }
      }))

      it('Should not have additional classes', () => testTheme({
        component: 'wrapper',
        sizeComponent: 'wrapper',
        additionalClasses: {
          wrapper: []
        }
      }))
    })
  })

  describe('Input', () => {
    describe('Themes', () => {
      it('Should pass input theme classes', () => testTheme({
        component: 'input'
      }))
    })

    describe('Additional classes', () => {
      it('Should have additional classes', () => testTheme({
        component: 'input',
        additionalClasses: {
          input: ['input-custom-class']
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

  describe('Span Wrapper', () => {
    describe('Themes', () => {
      it('Should pass spanWrapper theme classes', () => testTheme({
        component: 'spanWrapper'
      }))
    })

    describe('Additional classes', () => {
      it('Should have additional classes', () => testTheme({
        component: 'spanWrapper',
        additionalClasses: {
          spanWrapper: ['spanWrapper-custom-class']
        }
      }))

      it('Should not have additional classes', () => testTheme({
        component: 'spanWrapper',
        additionalClasses: {
          spanWrapper: []
        }
      }))
    })
  })

  describe('Span', () => {
    describe('Themes', () => {
      it('Should pass span theme classes', () => testTheme({
        component: 'span',
        sizeComponent: 'span'
      }))

      it('Should pass alert classes', () => testTheme({
        component: 'span',
        sizeComponent: 'span',
        alert: true
      }))

      it('Should not pass alert classes', () => testTheme({
        component: 'span',
        sizeComponent: 'span',
        alert: false
      }))

      it('Should pass disabled classes', () => testTheme({
        component: 'span',
        sizeComponent: 'span',
        disabled: true
      }))

      it('Should not pass disabled classes', () => testTheme({
        component: 'span',
        sizeComponent: 'span',
        disabled: false
      }))
    })

    describe('Sizes', () => {
      it('Should pass large size classes', () => testTheme({
        component: 'span',
        size: 'large',
        sizeComponent: 'span'
      }))

      it('Should pass medium size classes', () => testTheme({
        component: 'span',
        size: 'medium',
        sizeComponent: 'span'
      }))

      it('Should pass small size classes', () => testTheme({
        component: 'span',
        size: 'small',
        sizeComponent: 'span'
      }))
    })

    describe('Additional classes', () => {
      it('Should have additional classes', () => testTheme({
        component: 'span',
        sizeComponent: 'span',
        additionalClasses: {
          span: ['span-custom-class']
        }
      }))

      it('Should not have additional classes', () => testTheme({
        component: 'span',
        sizeComponent: 'span',
        additionalClasses: {
          span: []
        }
      }))
    })
  })

  describe('Section', () => {
    describe('Themes', () => {
      it('Should pass section theme classes', () => testTheme({
        component: 'section',
        sizeComponent: 'section',
      }))
    })

    describe('Sizes', () => {
      it('Should pass large size classes', () => testTheme({
        component: 'section',
        size: 'large',
        sizeComponent: 'section'
      }))

      it('Should pass medium size classes', () => testTheme({
        component: 'section',
        size: 'medium',
        sizeComponent: 'section'
      }))

      it('Should pass small size classes', () => testTheme({
        component: 'section',
        size: 'small',
        sizeComponent: 'section'
      }))
    })

    describe('Additional classes', () => {
      it('Should have additional classes', () => testTheme({
        component: 'section',
        sizeComponent: 'section',
        additionalClasses: {
          section: ['section-custom-class']
        }
      }))

      it('Should not have additional classes', () => testTheme({
        component: 'section',
        sizeComponent: 'section',
        additionalClasses: {
          section: []
        }
      }))
    })
  })

  describe('Label', () => {
    describe('Themes', () => {
      it('Should pass label theme classes', () => testTheme({
        component: 'label',
        sizeComponent: 'label'
      }))

      it('Should pass disabled classes', () => testTheme({
        component: 'label',
        sizeComponent: 'label',
        disabled: true
      }))

      it('Should not pass disabled classes', () => testTheme({
        component: 'label',
        sizeComponent: 'label',
        disabled: false
      }))
    })

    describe('Sizes', () => {
      it('Should pass large size classes', () => testTheme({
        component: 'label',
        size: 'large',
        sizeComponent: 'label'
      }))

      it('Should pass medium size classes', () => testTheme({
        component: 'label',
        size: 'medium',
        sizeComponent: 'label'
      }))

      it('Should pass small size classes', () => testTheme({
        component: 'label',
        size: 'small',
        sizeComponent: 'label'
      }))
    })

    describe('Additional classes', () => {
      it('Should have additional classes', () => testTheme({
        component: 'label',
        sizeComponent: 'label',
        additionalClasses: {
          label: ['label-custom-class']
        }
      }))

      it('Should not have additional classes', () => testTheme({
        component: 'label',
        sizeComponent: 'label',
        additionalClasses: {
          label: []
        }
      }))
    })
  })

  describe('Caption', () => {
    describe('Themes', () => {
      it('Should pass caption theme classes', () => testTheme({
        component: 'caption',
        sizeComponent: 'caption'
      }))

      it('Should pass alert classes', () => testTheme({
        component: 'caption',
        sizeComponent: 'caption',
        alert: true
      }))

      it('Should not pass alert classes', () => testTheme({
        component: 'caption',
        sizeComponent: 'caption',
        alert: false
      }))

      it('Should pass disabled classes', () => testTheme({
        component: 'caption',
        sizeComponent: 'caption',
        disabled: true
      }))

      it('Should not pass disabled classes', () => testTheme({
        component: 'caption',
        sizeComponent: 'caption',
        disabled: false
      }))
    })

    describe('Sizes', () => {
      it('Should pass large size classes', () => testTheme({
        component: 'caption',
        size: 'large',
        sizeComponent: 'caption'
      }))

      it('Should pass medium size classes', () => testTheme({
        component: 'caption',
        size: 'medium',
        sizeComponent: 'caption'
      }))

      it('Should pass small size classes', () => testTheme({
        component: 'caption',
        size: 'small',
        sizeComponent: 'caption'
      }))
    })

    describe('Additional classes', () => {
      it('Should have additional classes', () => testTheme({
        component: 'caption',
        sizeComponent: 'caption',
        additionalClasses: {
          caption: ['caption-custom-class']
        }
      }))

      it('Should not have additional classes', () => testTheme({
        component: 'caption',
        sizeComponent: 'caption',
        additionalClasses: {
          caption: []
        }
      }))
    })
  })
})
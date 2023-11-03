import Themes from '../../../src/components/Switch/themes'
import Sizes from '../../../src/components/Switch/sizes'
import { SwitchStyles } from "../../../src/components/Switch/styles"
import { SwitchAdditionalClasses, SwitchComponentsEnum, SwitchSizeComponentsEnum } from "../../../src/components/Switch/types"
import { GSizeEnum } from "../../../src/components/types"

type TestThemePropTypes = {
  component: SwitchComponentsEnum
  size?: GSizeEnum
  sizeComponent?: SwitchSizeComponentsEnum
  disabled?: boolean
  additionalClasses?: SwitchAdditionalClasses
}

describe('Styles', () => {
  const testTheme = ({
    component,
    size = 'large',
    sizeComponent,
    disabled,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new SwitchStyles({
      size,
      disabled,
      additionalClasses
    })

    const styledThemes = styles.buildStyleRules()

    const sizes = Sizes[size]()
    const additional = {
      wrapper: additionalClasses?.wrapper || [],
      label: additionalClasses?.label || [],
      switchWrapper: additionalClasses?.switchWrapper || [],
      input: additionalClasses?.input || [],
      span: additionalClasses?.span || []
    }

    const expectedTheme = Themes[component]()
    if(disabled) {
      switch(component) {
        case 'wrapper':
          expectedTheme.set('cursor', 'cursor-default')
          break
      case 'switchWrapper':
        expectedTheme.set('cursor', 'cursor-default')
        expectedTheme.set('hover-border-color', 'hover:border-transparent')
        break
      case 'span':
        expectedTheme.set('cursor', 'cursor-not-allowed')
        expectedTheme.set('background-color', 'bg-grayscale-5')
        expectedTheme.set('before-background-color', 'bg-grayscale-60')
        break
      }
    }
    const expectedStyle = [
      ...expectedTheme.values(),
    ]
    if(sizeComponent !== undefined) expectedStyle.push(...sizes[sizeComponent].values())
    if(additionalClasses !== undefined) expectedStyle.push(...additional[component])

    expect(styledThemes[`${component}Class`]).toEqual(expectedStyle.join(' '))
  }

  describe('Themes', () => {
    it('Wrapper', () => testTheme({
      component: 'wrapper',
      sizeComponent: 'wrapper'
    }))

    it('Label', () => testTheme({
      component: 'label',
      sizeComponent: 'label'
    }))

    it('Switch Wrapper', () => testTheme({
      component: 'switchWrapper',
      sizeComponent: 'switchWrapper'
    }))

    it('Input', () => testTheme({
      component: 'input'
    }))

    it('Span', () => testTheme({
      component: 'span',
      sizeComponent: 'span'
    }))
  })

  describe('Sizes', () => {
    describe('Large', () => {
      it('Wrapper', () => testTheme({
        component: 'wrapper',
        size: 'large',
        sizeComponent: 'wrapper'
      }))

      it('Label', () => testTheme({
        component: 'label',
        size: 'large',
        sizeComponent: 'label'
      }))

      it('Switch Wrapper', () => testTheme({
        component: 'switchWrapper',
        size: 'large',
        sizeComponent: 'switchWrapper'
      }))

      it('Span', () => testTheme({
        component: 'span',
        size: 'large',
        sizeComponent: 'span'
      }))
    })

    describe('Medium', () => {
      it('Wrapper', () => testTheme({
        component: 'wrapper',
        size: 'medium',
        sizeComponent: 'wrapper'
      }))

      it('Label', () => testTheme({
        component: 'label',
        size: 'medium',
        sizeComponent: 'label'
      }))

      it('Switch Wrapper', () => testTheme({
        component: 'switchWrapper',
        size: 'medium',
        sizeComponent: 'switchWrapper'
      }))

      it('Span', () => testTheme({
        component: 'span',
        size: 'medium',
        sizeComponent: 'span'
      }))
    })

    describe('Small', () => {
      it('Wrapper', () => testTheme({
        component: 'wrapper',
        size: 'small',
        sizeComponent: 'wrapper'
      }))

      it('Label', () => testTheme({
        component: 'label',
        size: 'small',
        sizeComponent: 'label'
      }))

      it('Switch Wrapper', () => testTheme({
        component: 'switchWrapper',
        size: 'small',
        sizeComponent: 'switchWrapper'
      }))

      it('Span', () => testTheme({
        component: 'span',
        size: 'small',
        sizeComponent: 'span'
      }))
    })
  })

  describe('Disabled prop', () => {
    it('Wrapper', () => testTheme({
      component: 'wrapper',
      sizeComponent: 'wrapper',
      disabled: true
    }))

    it('Switch Wrapper', () => testTheme({
      component: 'switchWrapper',
      sizeComponent: 'switchWrapper',
      disabled: true
    }))

    it('Span', () => testTheme({
      component: 'span',
      sizeComponent: 'span',
      disabled: true
    }))
  })

  describe('AdditionalClasses', () => {
    describe('Should pass additional classes', () => {
      it('Wrapper', () => testTheme({
        component: 'wrapper',
        sizeComponent: 'wrapper',
        additionalClasses: {
          wrapper: [
            'wrapper-additional-class0',
            'wrapper-additional-class1'
          ]
        }
      }))

      it('Label', () => testTheme({
        component: 'label',
        sizeComponent: 'label',
        additionalClasses: {
          label: [
            'label-additional-class0',
            'label-additional-class1'
          ]
        }
      }))

      it('Switch Wrapper', () => testTheme({
        component: 'switchWrapper',
        sizeComponent: 'switchWrapper',
        additionalClasses: {
          switchWrapper: [
            'switchWrapper-additional-class0',
            'switchWrapper-additional-class1'
          ]
        }
      }))

      it('Input', () => testTheme({
        component: 'input',
        additionalClasses: {
          input: [
            'input-additional-class0',
            'input-additional-class1'
          ]
        }
      }))

      it('Span', () => testTheme({
        component: 'span',
        sizeComponent: 'span',
        additionalClasses: {
          span: [
            'span-additional-class0',
            'span-additional-class1'
          ]
        }
      }))
    })

    describe('Should not have additional classes', () => {
      it('Wrapper', () => testTheme({
        component: 'wrapper',
        sizeComponent: 'wrapper',
        additionalClasses: {
          wrapper: []
        }
      }))

      it('Label', () => testTheme({
        component: 'label',
        sizeComponent: 'label',
        additionalClasses: {
          label: []
        }
      }))

      it('Switch Wrapper', () => testTheme({
        component: 'switchWrapper',
        sizeComponent: 'switchWrapper',
        additionalClasses: {
          switchWrapper: []
        }
      }))

      it('Input', () => testTheme({
        component: 'input',
        additionalClasses: {
          input: []
        }
      }))

      it('Span', () => testTheme({
        component: 'span',
        sizeComponent: 'span',
        additionalClasses: {
          span: []
        }
      }))
    })
  })
})
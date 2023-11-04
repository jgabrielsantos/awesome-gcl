import Themes from '../../../src/components/Radio/themes'
import Sizes from '../../../src/components/Radio/sizes'
import { GSizeEnum } from "../../../src/components/types"

type TestThemePropTypes = {
  component: string
  size?: GSizeEnum
  alert?: boolean
  disabled?: boolean
  additionalClasses?: Record<string, string>
}

describe('Styles', () => {
  const testTheme = ({
    component,
    size = 'large',
    alert,
    disabled,
    additionalClasses
  }: TestThemePropTypes) => {
    const styles = new RadioStyles({
      size,
      alert,
      disabled,
      additionalClasses
    })

    const expectedTheme = Themes[component]()
    const expectedSize = Sizes[size]()[component]
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
          expectedTheme.set('border-color', 'border-grayscale-40')
          expectedTheme.set('background-color', 'bg-grayscale-5')
          expectedTheme.set('before-background-color', 'before-bg-grayscale-40')
          break
        case 'label':
          expectedTheme.set('color', 'text-grayscale-60')
          break
        case 'caption':
          expectedTheme.set('color', 'text-grayscale-60')
          break
      }
    }

    if(additionalClasses !== undefined) expectedAdditionalClasses = [...additionalClasses[component]]

    const expectedResult = [
      ...expectedTheme.values(),
      ...expectedSize.value(),
      ...expectedAdditionalClasses
    ]

    expect(Themes[`${component}Class`]).toEqual(expectedResult)
  }
})
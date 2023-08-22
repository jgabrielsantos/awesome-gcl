type ButtonTypeEnum = 'button'
| 'submit'
| 'reset'

type ButtonThemeEnum = 'primary'
| 'secondary'
| 'tertiary'
| 'destructive-primary'
| 'destructive-secondary'
| 'success-primary'
| 'success-secondary'
| 'contrast-primary'
| 'contrast-secondary'

type ButtonSizeEnum = 'large'
| 'medium'
| 'small'

export type ButtonComponentPropTypes = {
  children: React.ReactNode
  type?: ButtonTypeEnum
  size?: ButtonSizeEnum
  customTheme?: ButtonThemeEnum
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  className?: string
}
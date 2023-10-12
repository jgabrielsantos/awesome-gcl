import { GSizeEnum } from "../../../types"

export type ToastTypeEnums = 'info'
| 'success'
| 'fail'
| 'warning'

export type ToastAdditionalClassesPropTypes = string[]

export type ToastBuilStylePropTypes = {
  type: ToastTypeEnums
  isOpen: boolean
}

export type ToastComponentPropTypes = {
  id: string
  type: ToastTypeEnums
  isOpen: boolean
  handleClose: React.MouseEventHandler<SVGSVGElement>
  children: React.ReactNode
  additionalClasses?: ToastAdditionalClassesPropTypes
}

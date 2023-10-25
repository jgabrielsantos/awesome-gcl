import { setPasswordVisibleHandler } from "../../../src/components/Input/hooks";

const onChangeSpy = jest.fn()

describe('setPasswordVisibleHandler', () => {
  let sut: ReturnType<typeof setPasswordVisibleHandler>

  const setPasswordVisibleSpy = jest.fn()
  const setTypeSpy = jest.fn()

  describe('Show Password prop as false', () => {
    beforeAll(() => {
      sut = setPasswordVisibleHandler({
        passwordVisible: false,
        setPasswordVisible: setPasswordVisibleSpy,
        setType: setTypeSpy
      })
    })

    it('Should call setPasswordVisible with correct params', () => {
      sut()

      expect(setPasswordVisibleSpy).toBeCalledTimes(1)
      expect(setPasswordVisibleSpy).toBeCalledWith(true)
    })

    it('Should call setType with correct params', () => {
      sut()

      expect(setTypeSpy).toBeCalledTimes(1)
      expect(setTypeSpy).toBeCalledWith('text')
    })
  })

  describe('Show Password prop as true', () => {
    beforeAll(() => {
      sut = setPasswordVisibleHandler({
        passwordVisible: true,
        setPasswordVisible: setPasswordVisibleSpy,
        setType: setTypeSpy
      })
    })

    it('Should call setPasswordVisible with correct params', () => {
      sut()

      expect(setPasswordVisibleSpy).toBeCalledTimes(1)
      expect(setPasswordVisibleSpy).toBeCalledWith(false)
    })

    it('Should call setType with correct params', () => {
      sut()

      expect(setTypeSpy).toBeCalledTimes(1)
      expect(setTypeSpy).toBeCalledWith('password')
    })
  })
})
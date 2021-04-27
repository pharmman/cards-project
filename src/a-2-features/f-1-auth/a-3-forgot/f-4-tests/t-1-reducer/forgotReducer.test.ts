import {RegisterStateType} from '../../../a-2-register/r-2-bll/registerInitState'
import {registerReducer} from '../../../a-2-register/r-2-bll/registerReducer'
import {registerActions} from '../../../a-2-register/r-2-bll/registerActions'
import {ForgotStateType} from '../../f-2-bll/forgotInitState'
import {forgotReducer} from '../../f-2-bll/forgotReducer'
import {forgotActions} from '../../f-2-bll/forgotActions'

describe('Register Reducer test', () => {
    let state: ForgotStateType
    beforeEach(() => {
        state = {
            successEmailSent: false,
            successNewPasswordInstalled: false,
            error: '',
            loading: false
        }
    })
    it('Success Email sent should be true', () => {
        const newState = forgotReducer(state, forgotActions.setSuccessEmailSent(true))

        expect(newState.error).toBe('')
        expect(newState.successEmailSent).toBeTruthy()
        expect(newState.successNewPasswordInstalled).toBeFalsy()
        expect(newState.loading).toBeFalsy()
    })
    it('Success new password installed should be true', () => {
        const newState = forgotReducer(state, forgotActions.setSuccessNewPasswordInstalled(true))

        expect(newState.error).toBe('')
        expect(newState.successEmailSent).toBeFalsy()
        expect(newState.successNewPasswordInstalled).toBeTruthy()
        expect(newState.loading).toBeFalsy()
    })
    it('error should change', () => {
        const newState = forgotReducer(state, forgotActions.setError('Test error'))

        expect(newState.error).toBe('Test error')
        expect(newState.successEmailSent).toBeFalsy()
        expect(newState.successNewPasswordInstalled).toBeFalsy()
        expect(newState.loading).toBeFalsy()
    })
    it('loading should change', () => {
        const newState = forgotReducer(state, forgotActions.setLoading(true))

        expect(newState.error).toBe('')
        expect(newState.successEmailSent).toBeFalsy()
        expect(newState.successNewPasswordInstalled).toBeFalsy()
        expect(newState.loading).toBeTruthy()
    })
})
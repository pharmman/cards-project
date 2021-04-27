import {RegisterStateType} from '../../r-2-bll/registerInitState'
import {registerReducer} from '../../r-2-bll/registerReducer'
import {registerActions} from '../../r-2-bll/registerActions'

describe('Register reducer test', () => {
    let state: RegisterStateType
    beforeEach(() => {
        state = {
            success: false,
            error: '',
            loading: false
        }
    })
    it('success should change', () => {
        const newState = registerReducer(state, registerActions.setSuccess(true))

        expect(newState.error).toBe('')
        expect(newState.success).toBeTruthy()
        expect(newState.loading).toBeFalsy()
    })
    it('error should change', () => {
        const newState = registerReducer(state, registerActions.setError('Test error'))

        expect(newState.error).toBe('Test error')
        expect(newState.success).toBeFalsy()
        expect(newState.loading).toBeFalsy()
    })
    it('loading should change', () => {
        const newState = registerReducer(state, registerActions.setLoading(true))

        expect(newState.error).toBe('')
        expect(newState.success).toBeFalsy()
        expect(newState.loading).toBeTruthy()
    })
})
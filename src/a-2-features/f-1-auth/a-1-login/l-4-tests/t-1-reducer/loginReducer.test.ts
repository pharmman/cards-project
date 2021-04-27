import {LoginStateType} from '../../l-2-bll/loginInitState'
import {loginReducer} from '../../l-2-bll/loginReducer'
import {loginActions} from '../../l-2-bll/loginActions'
import {profileActions, ProfileActionsType} from '../../../a-4-profile/p-2-bll/profileActions'


describe('Login Reducer test', () => {
    let state: LoginStateType
    beforeEach(() => {
        state = {
            success: false,
            error: '',
            loading: false
        }
    })
    it('success should change', () => {
        const newState = loginReducer(state, loginActions.setSuccess(true))

        expect(newState.error).toBe('')
        expect(newState.success).toBeTruthy()
        expect(newState.loading).toBeFalsy()
    })
    it('error should change', () => {
        const newState = loginReducer(state, loginActions.setError('Test error'))

        expect(newState.error).toBe('Test error')
        expect(newState.success).toBeFalsy()
        expect(newState.loading).toBeFalsy()
    })
    it('loading should change', () => {
        const newState = loginReducer(state, loginActions.setLoading(true))

        expect(newState.error).toBe('')
        expect(newState.success).toBeFalsy()
        expect(newState.loading).toBeTruthy()
    })
})

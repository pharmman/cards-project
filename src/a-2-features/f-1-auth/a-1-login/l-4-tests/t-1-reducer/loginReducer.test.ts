import {LoginStateType} from '../../l-2-bll/loginInitState'
import {loginReducer} from '../../l-2-bll/loginReducer'
import {loginActions} from '../../l-2-bll/loginActions'


describe('Login Reducer test', () => {
    let state: LoginStateType
    beforeEach(() => {
        state = {
            loginSuccess: false,
            error: '',
            loading: false,
            logoutSuccess: false
        }
    })
    it('success should change', () => {
        const newState = loginReducer(state, loginActions.setLoginSuccess(true))

        expect(newState.error).toBe('')
        expect(newState.loginSuccess).toBeTruthy()
        expect(newState.logoutSuccess).toBeFalsy()
        expect(newState.loading).toBeFalsy()
    })
    it('error should change', () => {
        const newState = loginReducer(state, loginActions.setError('Test error'))

        expect(newState.error).toBe('Test error')
        expect(newState.loginSuccess).toBeFalsy()
        expect(newState.logoutSuccess).toBeFalsy()
        expect(newState.loading).toBeFalsy()
    })
    it('loading should change', () => {
        const newState = loginReducer(state, loginActions.setLoading(true))

        expect(newState.error).toBe('')
        expect(newState.logoutSuccess).toBeFalsy()
        expect(newState.loginSuccess).toBeFalsy()
        expect(newState.loading).toBeTruthy()
    })
    it('logout success should change',  () => {
        const newState = loginReducer(state, loginActions.setLogoutSuccess(true))

        expect(newState.error).toBe('')
        expect(newState.loginSuccess).toBeFalsy()
        expect(newState.loading).toBeFalsy()
        expect(newState.logoutSuccess).toBeTruthy()
    })
})



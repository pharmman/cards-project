import {LoginStateType} from '../../l-2-bll/loginInitState'
import {loginReducer} from '../../l-2-bll/loginReducer'
import {loginSetSuccess} from '../../l-2-bll/loginActions'

test('isLoggedIn should change', () => {
    const state: LoginStateType = {
        success: false,
        error: '',
        loading: false
    }

    const newState = loginReducer(state, loginSetSuccess(true))

    expect(newState.error).toBe('')
    expect(newState.success).toBeTruthy()
})
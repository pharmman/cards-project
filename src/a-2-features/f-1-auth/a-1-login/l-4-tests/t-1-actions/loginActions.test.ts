import {LoginStateType} from '../../l-2-bll/loginInitState'
import {loginReducer} from '../../l-2-bll/loginReducer'
import {setIsLoggedIn} from '../../l-2-bll/loginActions'

test('isLoggedIn should change', () => {
    const state: LoginStateType = {
        isLoggedIn: false,
        success: false,
        error: '',
        loading: false
    }

    const newState = loginReducer(state, setIsLoggedIn(true))

    expect(newState.error).toBe('')
    expect(newState.isLoggedIn).toBeTruthy()
})
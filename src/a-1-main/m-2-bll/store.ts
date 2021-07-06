import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {loginReducer} from '../../a-2-features/f-1-auth/a-1-login/l-2-bll/loginReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {registerReducer} from '../../a-2-features/f-1-auth/a-2-register/r-2-bll/registerReducer'
import {profileReducer} from '../../a-2-features/f-1-auth/a-4-profile/p-2-bll/profileReducer'
import {forgotReducer} from '../../a-2-features/f-1-auth/a-3-forgot/f-2-bll/forgotReducer'
import {LoginActionsType} from '../../a-2-features/f-1-auth/a-1-login/l-2-bll/loginActions'
import {packsReducer} from '../../a-2-features/f-2-cards/c-1-packs/p-2-bll/packsReducer'
import {cardsReducer} from '../../a-2-features/f-2-cards/c-2-cards/c-2-bll/cardsReducer'

const mainReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    forgot: forgotReducer,
    packs: packsReducer,
    cards: cardsReducer
})

const rootReducer = (state: AppRootStateType | undefined, action: LoginActionsType) => {
    if (action.type === 'login/SET_LOGOUT_SUCCESS') {
        return mainReducer(undefined, action)
    }

    return mainReducer(state, action)
}


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type AppRootStateType = ReturnType<typeof mainReducer>

// @ts-ignore
window.store = store


import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {loginReducer} from '../../a-2-features/f-1-auth/a-1-login/l-2-bll/loginReducer'
import {useDispatch} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {appReducer} from './appReducer'
import {registerReducer} from '../../a-2-features/f-1-auth/a-2-register/r-2-bll/registerReducer'
import {profileReducer} from '../../a-2-features/f-1-auth/a-4-profile/p-2-bll/profileReducer'
import {forgotReducer} from '../../a-2-features/f-1-auth/a-3-forgot/f-2-bll/forgotReducer'

type AppDispatchType = typeof store.dispatch

const reducer = combineReducers({
    login: loginReducer,
    app: appReducer,
    register: registerReducer,
    profile: profileReducer,
    forgot: forgotReducer
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

//useDispatch with types
export const useAppDispatch = () => useDispatch<AppDispatchType>()

export type AppRootStateType = ReturnType<typeof reducer>


// @ts-ignore
window.store = store


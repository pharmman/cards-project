import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "../../a-2-features/f-1-auth/a-1-login/l-2-bll/loginReducer";


const reducers = combineReducers({
    login: loginReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store


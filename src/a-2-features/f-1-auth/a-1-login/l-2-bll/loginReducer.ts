import {LoginStateType, loginInitState} from './loginInitState'
import {LoginActionsType} from './loginActions'


export const loginReducer = (state: LoginStateType = loginInitState, action: LoginActionsType): LoginStateType => {
    switch (action.type) {
        case 'login/SET_SUCCESS':
        case 'login/SET_ERROR':
        case 'login/SET_LOADING':
            return {...state, ...action.payload }
        default:
            return state
    }
}
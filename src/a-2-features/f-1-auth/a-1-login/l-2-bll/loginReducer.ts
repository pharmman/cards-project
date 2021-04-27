import {LoginStateType, loginInitState} from './loginInitState'
import {LoginActionsType} from './loginActions'


export const loginReducer = (state: LoginStateType = loginInitState, action: LoginActionsType): LoginStateType => {
    switch (action.type) {
        case 'login/SET-SUCCESS':
        case 'login/SET-ERROR':
        case 'login/SET-LOADING':
            return {...state, ...action.payload }
        default:
            return state
    }
}
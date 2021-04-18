import {registerInitState, RegisterStateType} from './registerInitState'
import {RegisterActionsType} from './registerActions'


export const registerReducer = (state = registerInitState, action: RegisterActionsType):RegisterStateType => {
    switch (action.type) {
        case 'register/SET-IS-REGISTERED':
            return {...state, ...action}
        default:
            return state
    }
}
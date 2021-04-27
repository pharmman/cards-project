import {registerInitState, RegisterStateType} from './registerInitState'
import {RegisterActionsType} from './registerActions'


export const registerReducer = (state = registerInitState, action: RegisterActionsType):RegisterStateType => {
    switch (action.type) {
        case 'register/SET_SUCCESS':
        case 'register/SET_ERROR':
        case 'register/SET_LOADING':
            return {...state, ...action.payload }
        default:
            return state
    }
}
import {forgotInitState} from './forgotInitState'
import {ForgotActionsType} from './forgotActions'

export const forgotReducer = (state = forgotInitState, action: ForgotActionsType) => {
    switch (action.type) {
        case 'forgot/SET_SUCCESS_EMAIL_SENT':
        case 'forgot/SET_SUCCESS_NEW_PASSWORD_INSTALLED':
        case 'forgot/SET_ERROR':
        case 'forgot/SET_LOADING':
        return {...state, ...action.payload}
        default:
            return state
    }
}
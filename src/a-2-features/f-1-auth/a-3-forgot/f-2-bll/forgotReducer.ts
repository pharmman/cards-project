import {forgotInitState} from './forgotInitState'
import {ForgotActionsType} from './forgotActions'

export const forgotReducer = (state = forgotInitState, action: ForgotActionsType) => {
    switch (action.type) {
        case 'forgot/SET_IS_MESSAGE_SENT':
            return {...state, ...action}
        case 'forgot/SET_NEW_PASSWORD_INSTALLED':
            return {...state, ...action}
        default:
            return state
    }
}
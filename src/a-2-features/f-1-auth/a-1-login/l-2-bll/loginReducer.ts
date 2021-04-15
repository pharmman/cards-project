import {LoginActionsType} from "./loginActionsType";
import {LoginStateType, loginInitState} from "./loginInitState";


export const loginReducer = (state = loginInitState, action: LoginActionsType): LoginStateType => {
    switch (action.type) {
        case 'login/SET_FETCHING':
        case 'login/SET_IS_IS_LOGGED-IN':
        case 'login/SET_ERROR':
            return {...state, ...action}
        default:
            return state
    }
}
import {LoginActions} from "./loginActions";
import {LoginStateType, loginInitState} from "./loginInitState";


export const loginReducer = (state:LoginStateType = loginInitState, action: LoginActions): LoginStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, ...action}
        default:
            return state
    }
}
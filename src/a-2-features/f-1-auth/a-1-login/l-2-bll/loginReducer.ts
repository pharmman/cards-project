import {LoginActions} from "./loginActions";
import {LoginStateType, loginInitState} from "./loginInitState";


export const loginReducer = (state = loginInitState, action: LoginActions): LoginStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
        default:
            return state
    }
}
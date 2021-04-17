import {appInitState} from "./appInitState";
import {AppActionsType} from "./appActions";


export const appReducer = (state = appInitState, action: AppActionsType) => {
    switch (action.type){
        case "app/SET_ERROR":
        case 'app/SET_FETCHING':
            return {...state, ...action}
        default:
            return state
    }
}
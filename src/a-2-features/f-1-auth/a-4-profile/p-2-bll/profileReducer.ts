import {profileInitState, ProfileStateType} from './profileInitState'
import {ProfileActionsType} from './profileActions'

export const profileReducer = (state = profileInitState, action: ProfileActionsType):ProfileStateType => {
    switch (action.type) {
        case 'profile/SET_PROFILE':
            return {...state, ...action}
        default:
            return state
    }
}
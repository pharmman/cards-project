import {profileInitState, ProfileStateType} from './profileInitState'
import {ProfileActionsType} from './profileActions'

export const profileReducer = (state = profileInitState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case 'profile/SET_PROFILE':
        case 'profile/SET_ERROR':
        case 'profile/SET_SUCCESS':
            return {...state, ...action}
        default:
            return state
    }
}
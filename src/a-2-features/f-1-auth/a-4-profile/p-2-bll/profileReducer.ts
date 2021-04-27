import {profileInitState, ProfileStateType} from './profileInitState'
import {ProfileActionsType} from './profileActions'
import {ProfileType} from '../../a-1-login/l-3-dal/LoginAPI'

export const profileReducer = (state = profileInitState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {
        case 'profile/SET_PROFILE':
        case 'profile/SET_LOADING':
            return {...state, ...action.payload}
        case 'profile/SET_ERROR':
            return {...state, ...action.payload, success: false}
        case 'profile/SET_SUCCESS':
            return {...state, ...action.payload, error:''}
        default:
            return state
    }
}

// const profile:ProfileType = {
//     _id: '1',
//     email: 'test@gmail.com',
//     created: new Date(Date.now()),
//     isAdmin: false,
//     name: 'Test',
//     publicCardPacksCount: 10,
//     rememberMe: true,
//     updated: new Date(Date.now()),
//     verified: false
// }
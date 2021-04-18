import {ProfileType} from '../../a-1-login/l-3-dal/LoginAPI'

export type ProfileActionsType = ReturnType<typeof setProfile>

export const setProfile = (profile:ProfileType) => ({type: 'profile/SET_PROFILE', profile} as const)
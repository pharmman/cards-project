import {ProfileType} from '../../a-1-login/l-3-dal/LoginAPI'

export type ProfileActionsType =
    ReturnType<typeof setProfile>
    | ReturnType<typeof setSuccess>
    | ReturnType<typeof setError>

export const setProfileType = 'profile/SET_PROFILE'
export const setProfileSuccessType = 'profile/SET_SUCCESS'
export const setProfileErrorType = 'profile/SET_ERROR'

export const setProfile = (profile: ProfileType) => ({type: 'profile/SET_PROFILE', profile} as const)
export const setSuccess = (success: boolean) => ({type: 'profile/SET_SUCCESS', success} as const)
export const setError = (error: string) => ({type: 'profile/SET_ERROR', error} as const)
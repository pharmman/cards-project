import {InferActionsType} from '../../../../a-1-main/m-2-bll/Actions'

export type ProfileActionsType = InferActionsType<typeof profileActions>

export type ProfileType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date | string
    updated: Date | string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}
export const profileActions = {
    setProfile: (profile: ProfileType) => ({type: 'profile/SET_PROFILE', payload: {profile}} as const),
    setLoading: (loading:boolean) => ({type: 'profile/SET_LOADING', payload: {loading}} as const),
    setSuccess: (success: boolean) => ({type: 'profile/SET_SUCCESS', payload: {success}} as const),
    setError: (error: string) => ({type: 'profile/SET_ERROR', payload: {error}} as const)
}

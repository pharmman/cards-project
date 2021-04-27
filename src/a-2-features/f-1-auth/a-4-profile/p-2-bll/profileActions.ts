import {ProfileType} from '../../a-1-login/l-3-dal/LoginAPI'
import {InferActionsType} from '../../../../a-1-main/m-2-bll/Actions'

export type ProfileActionsType = InferActionsType<typeof profileActions>

export const profileActions = {
    setProfile: (profile: ProfileType) => ({type: 'profile/SET_PROFILE', payload: {profile}} as const),
    setLoading: (loading:boolean) => ({type: 'profile/SET_LOADING', payload: {loading}} as const),
    setSuccess: (success: boolean) => ({type: 'profile/SET_SUCCESS', payload: {success}} as const),
    setError: (error: string) => ({type: 'profile/SET_ERROR', payload: {error}} as const)
}

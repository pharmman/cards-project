import {InferActionsType} from '../../../../a-1-main/m-2-bll/Actions'

export type RegisterActionsType = InferActionsType<typeof registerActions>

export const registerActions = {
    setSuccess: (success: boolean) => ({type: 'register/SET_SUCCESS', payload: {success}} as const),
    setLoading: (loading: boolean) => ({type: 'register/SET_LOADING', payload: {loading}} as const),
    setError: (error: string) => ({type: 'register/SET_ERROR', payload: {error}} as const)
}
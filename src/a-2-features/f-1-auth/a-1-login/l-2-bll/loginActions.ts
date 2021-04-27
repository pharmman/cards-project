import {InferActionsType} from '../../../../a-1-main/m-2-bll/Actions'

export type LoginActionsType = InferActionsType<typeof loginActions>

export const loginActions = {
    setSuccess: (success: boolean) => ({type: 'login/SET_SUCCESS', payload: {success}} as const),
    setLoading: (loading: boolean) => ({type: 'login/SET_LOADING', payload: {loading}} as const),
    setError: (error: string) => ({type: 'login/SET_ERROR', payload: {error}} as const)
}

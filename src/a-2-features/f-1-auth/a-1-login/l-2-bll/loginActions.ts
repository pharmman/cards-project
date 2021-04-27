import {InferActionsType} from '../../../../a-1-main/m-2-bll/Actions'

export type LoginActionsType = InferActionsType<typeof loginActions>

export const loginActions = {
    setSuccess: (success: boolean) => ({type: 'login/SET-SUCCESS', payload: {success}} as const),
    setLoading: (loading: boolean) => ({type: 'login/SET-LOADING', payload: {loading}} as const),
    setError: (error: string) => ({type: 'login/SET-ERROR', payload: {error}} as const)
}

import {InferActionsType} from '../../../a-1-main/m-2-bll/Actions'

export type AppActionsType = InferActionsType<typeof appActions>

export const appActions = {
    setError: (error: string) => ({type: 'app/SET_ERROR', payload: {error}} as const),
    setLoading: (loading: boolean) => ({type: 'app/SET_LOADING', payload: {loading}} as const)
}
import {InferActionsType} from '../../../../a-1-main/m-2-bll/Actions'

export type LoginActionsType = InferActionsType<typeof loginActions>

export const loginActions = {
    setLoginSuccess: (loginSuccess: boolean) => ({type: 'login/SET_LOGIN_SUCCESS', payload: {loginSuccess}} as const),
    setLogoutSuccess: (logoutSuccess: boolean) => ({type: 'login/SET_LOGOUT_SUCCESS', payload: {logoutSuccess}} as const),
    setLoading: (loading: boolean) => ({type: 'login/SET_LOADING', payload: {loading}} as const),
    setError: (error: string) => ({type: 'login/SET_ERROR', payload: {error}} as const)
}

import {InferActionsType} from '../../../../a-1-main/m-2-bll/Actions'

export type ForgotActionsType = InferActionsType<typeof forgotActions>

export const forgotActions = {
    setSuccessEmailSent: (successEmailSent: boolean) => ({
        type: 'forgot/SET_SUCCESS_EMAIL_SENT',
        payload: {successEmailSent}
    } as const),
    setSuccessNewPasswordInstalled: (successNewPasswordInstalled: boolean) => ({
        type: 'forgot/SET_SUCCESS_NEW_PASSWORD_INSTALLED',
        payload: {successNewPasswordInstalled}
    } as const),
    setLoading: (loading: boolean) => ({type: 'forgot/SET_LOADING', payload: {loading}} as const),
    setError: (error: string) => ({type: 'forgot/SET_ERROR', payload: {error}} as const)
}
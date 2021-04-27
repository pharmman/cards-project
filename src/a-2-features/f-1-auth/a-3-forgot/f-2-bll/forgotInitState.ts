export type ForgotStateType = typeof forgotInitState

export const forgotInitState = {
    loading: false,
    successEmailSent: false,
    successNewPasswordInstalled: false,
    error: ''
}
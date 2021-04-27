export type ForgotStateType = typeof forgotInitState

export const forgotInitState = {
    success: false,
    loading: false,
    successEmailSent: false,
    successNewPasswordInstalled: false,
    error: ''
}
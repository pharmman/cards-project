export type LoginStateType = typeof loginInitState


export const loginInitState = {
    isLoggedIn: false,
    success: false,
    error: '',
    loading: false
}
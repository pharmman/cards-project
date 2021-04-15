
export type LoginStateType = typeof loginInitState


export const loginInitState = {
    isLoggedIn: false,
    isFetching: false,
    error: ''
}
export type LoginActionsType =
    ReturnType<typeof setIsFetching>
    | ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof setError>

export const setIsFetching = (isFetching: boolean) => ({type: 'login/SET_FETCHING', isFetching} as const)
export const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'login/SET_IS_IS_LOGGED-IN', isLoggedIn} as const)
export const setError = (error: string) => ({type: 'login/SET_ERROR', error} as const)
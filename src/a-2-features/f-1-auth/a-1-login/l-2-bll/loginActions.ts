export type LoginActions =
    ReturnType<typeof setIsLoggedIn>
    | ReturnType<typeof loginSetSuccess>
    | ReturnType<typeof loginSetLoading>
    | ReturnType<typeof loginSetError>

export const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'login/SET-IS-LOGGED-IN', isLoggedIn} as const)
export const loginSetSuccess = (success: boolean) => ({type: 'login/SET-SUCCESS', success} as const)
export const loginSetLoading = (loading: boolean) => ({type: 'login/SET-LOADING', loading} as const)
export const loginSetError = (error: string) => ({type: 'login/SET-ERROR', error} as const)

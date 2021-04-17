export type LoginActions =
    | ReturnType<typeof setIsLoggedIn>

export const setIsLoggedIn = (isLoggedIn: boolean) => ({type: 'login/SET-IS-LOGGED-IN', isLoggedIn} as const)

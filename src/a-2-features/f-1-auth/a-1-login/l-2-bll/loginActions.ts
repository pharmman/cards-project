export type LoginActions =
    | ReturnType<typeof loginSetSuccess>
    | ReturnType<typeof loginSetLoading>
    | ReturnType<typeof loginSetError>

export const loginSetSuccessType = 'login/SET-SUCCESS'
export const loginSetLoadingType = 'login/SET-LOADING'
export const loginSetErrorType = 'login/SET-ERROR'

export const loginSetSuccess = (success: boolean) => ({type: loginSetSuccessType, success} as const)
export const loginSetLoading = (loading: boolean) => ({type: loginSetLoadingType, loading} as const)
export const loginSetError = (error: string) => ({type: loginSetErrorType, error} as const)

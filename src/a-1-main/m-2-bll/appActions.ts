
export type AppActionsType = ReturnType<typeof setAppError> | ReturnType<typeof setIsFetching>

export const setAppError = (error: string) => ({type: 'app/SET_ERROR', error} as const)
export const setIsFetching = (isFetching: boolean) => ({type: 'app/SET_FETCHING', isFetching} as const)
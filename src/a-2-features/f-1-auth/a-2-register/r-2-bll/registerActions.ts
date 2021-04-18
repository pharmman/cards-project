
export type RegisterActionsType = ReturnType<typeof setIsRegistered>

export const setIsRegistered = (isRegistered: boolean) => ({type:'register/SET-IS-REGISTERED', isRegistered})
export type ForgotActionsType = ReturnType<typeof setIsMessageSent> | ReturnType<typeof setNewPasswordInstalled>

export const setIsMessageSent = (isMessageSent: boolean) => ({type:'forgot/SET_IS_MESSAGE_SENT', isMessageSent} as const)
export const setNewPasswordInstalled = (isNewPasswordInstalled: boolean) => ({type:'forgot/SET_NEW_PASSWORD_INSTALLED', isNewPasswordInstalled} as const)
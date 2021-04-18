export type ForgotActionsType = ReturnType<typeof setIsMessageSent> | ReturnType<typeof setNewPasswordInstalled>

export const setIsMessageSent = (isMessageSent: boolean) => ({type:'forgot/SET_IS_MESSAGE_SENT', isMessageSent} as const)
export const setNewPasswordInstalled = (newPasswordInstalled: boolean) => ({type:'forgot/SET_IS_MESSAGE_SENT', newPasswordInstalled} as const)
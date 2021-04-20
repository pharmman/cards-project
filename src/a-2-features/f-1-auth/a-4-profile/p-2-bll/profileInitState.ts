import {ProfileType} from '../../a-1-login/l-3-dal/LoginAPI'

export type ProfileStateType = {
    profile:ProfileType | null,
    success: boolean,
    error: string
}

export const profileInitState:ProfileStateType = {
    profile: null,
    success: false,
    error: ''
}
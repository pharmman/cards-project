import {ProfileType} from '../../a-1-login/l-3-dal/LoginAPI'

export type ProfileStateType = {
    profile:ProfileType | null
}

export const profileInitState:ProfileStateType = {
    profile: null
}
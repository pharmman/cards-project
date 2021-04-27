import {ProfileType} from './profileActions'

export type ProfileStateType = {
    profile:ProfileType | null
    success: boolean
    error: string
    loading: boolean
}

export const profileInitState:ProfileStateType = {
    profile: null,
    success: false,
    error: '',
    loading: false
}
import {instance, AuthRequestDataType} from '../../../../a-1-main/m-3-dal/instance'

export type ProfileType = {
    _id: string
    email:string
    name: string
    avatar?:string
    publicCardPacksCount: number
    created: Date | string
    updated:Date | string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}

export const LoginAPI = {
    login(data:AuthRequestDataType) {
        return instance.post<ProfileType>('auth/login', {...data})
    }
}
import { instance } from "../../../../a-1-main/m-3-dal/instance"

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export type ProfileType = {
    _id: string
    email:string
    name: string
    avatar?:string
    publicCardPacksCount: number
    created: Date
    updated:Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}

export const LoginAPI = {
    login(data:LoginDataType) {
        return instance.post<ProfileType>('auth/login', {...data})
    },
    authMe () {
        return instance.post<ProfileType>('auth/me')
    }
}
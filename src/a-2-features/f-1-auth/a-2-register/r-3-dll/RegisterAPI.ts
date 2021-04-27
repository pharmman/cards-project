import {instance, AuthRequestDataType} from '../../../../a-1-main/m-3-dal/instance'

type RegisterReturnType = {
    error?: string
}

export const RegisterAPI = {
    register(data:AuthRequestDataType) {
        return instance.post<RegisterReturnType>('auth/register', {...data})
    }
}


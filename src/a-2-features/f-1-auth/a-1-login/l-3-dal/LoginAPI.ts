import {AuthRequestDataType, instance} from '../../../../a-1-main/m-3-dal/instance'
import {ProfileType} from '../../a-4-profile/p-2-bll/profileActions'

export const LoginAPI = {
    login(data:AuthRequestDataType) {
        return instance.post<ProfileType>('auth/login', {...data})
    }
}
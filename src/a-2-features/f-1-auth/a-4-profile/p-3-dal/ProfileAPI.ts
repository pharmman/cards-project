import {instance} from '../../../../a-1-main/m-3-dal/instance'
import {ProfileType} from '../../a-1-login/l-3-dal/LoginAPI'


export const ProfileAPI = {
    authMe () {
        return instance.post<ProfileType>('auth/me')
    }
}
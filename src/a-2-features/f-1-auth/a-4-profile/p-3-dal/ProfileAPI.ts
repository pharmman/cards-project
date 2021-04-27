import {instance} from '../../../../a-1-main/m-3-dal/instance'
import {ProfileType} from '../p-2-bll/profileActions'


export const ProfileAPI = {
    authMe () {
        return instance.post<ProfileType>('auth/me')
    }
}
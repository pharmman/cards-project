import {LoginAPI} from '../l-3-dal/LoginAPI'
import {profileActions, ProfileActionsType} from '../../a-4-profile/p-2-bll/profileActions'
import {ThunkType} from '../../../../a-1-main/m-2-bll/Actions'
import {loginActions, LoginActionsType} from './loginActions'
import {AuthRequestDataType} from '../../../../a-1-main/m-3-dal/instance'

export const loginTC = (data: AuthRequestDataType): ThunkType<ProfileActionsType | LoginActionsType> => async (dispatch) => {
    dispatch(loginActions.setLoading(true))
    try {
        const res = await LoginAPI.login(data)
        dispatch(profileActions.setProfile(res.data))
        dispatch(loginActions.setSuccess(true))
        dispatch(loginActions.setError(''))
    } catch (e) {
        const error = e.response ? e.response.data.error : 'Some error occurred, please try again'
        dispatch(loginActions.setError(error))
        dispatch(loginActions.setSuccess(false))
        console.log('Error:', {...e})
    } finally {
        dispatch(loginActions.setLoading(false))
    }
}
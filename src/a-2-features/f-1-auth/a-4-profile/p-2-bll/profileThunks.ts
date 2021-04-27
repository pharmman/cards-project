import {ThunkType} from '../../../../a-1-main/m-2-bll/Actions'
import {ProfileAPI} from '../p-3-dal/ProfileAPI'
import {profileActions, ProfileActionsType} from './profileActions'

export const authMeTC = ():ThunkType<ProfileActionsType> => async (dispatch) => {
    dispatch(profileActions.setLoading(true))
    try {
        const res = await ProfileAPI.authMe()
        dispatch(profileActions.setProfile(res.data))
        dispatch(profileActions.setSuccess(true))
        dispatch(profileActions.setError(''))
    }
    catch (e) {
        const error = e.response? e.response.data.error : (e.message + ', more details in the console')
        dispatch(profileActions.setError(error))
        dispatch(profileActions.setSuccess(false))
        console.log('Error:', {...e})
    }
    finally {
        dispatch(profileActions.setLoading(false))
    }
}
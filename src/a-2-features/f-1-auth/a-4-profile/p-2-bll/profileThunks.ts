import {ThunkType} from '../../../../a-1-main/m-2-bll/Actions'
import {setAppError, setIsFetching} from '../../../../a-1-main/m-2-bll/appActions'
import {setProfile, setSuccess} from './profileActions'
import {ProfileAPI} from '../p-3-dal/ProfileAPI'

export const authMeTC = ():ThunkType => async (dispatch) => {
    dispatch(setIsFetching(true))
    try {
        const res = await ProfileAPI.authMe()
        dispatch(setProfile(res.data))
        dispatch(setSuccess(true))
        dispatch(setAppError(''))
    }
    catch (e) {
        const error = e.response? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppError(error))
        dispatch(setSuccess(false))
        console.log('Error:', {...e})
    }
    finally {
        dispatch(setIsFetching(false))
    }
}
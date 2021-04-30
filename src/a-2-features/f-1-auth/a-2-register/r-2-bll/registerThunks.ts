import {ThunkType} from '../../../../a-1-main/m-2-bll/Actions'
import {RegisterAPI} from '../r-3-dll/RegisterAPI'
import {registerActions, RegisterActionsType} from './registerActions'
import {FormDataType} from '../../a-1-login/l-1-ui/u-1-login/LoginPage'


export const registerTC = (data:FormDataType):ThunkType<RegisterActionsType> => async (dispatch) => {
    dispatch(registerActions.setLoading(true))
    try {
        await RegisterAPI.register(data)
        dispatch(registerActions.setError(''))
        dispatch(registerActions.setSuccess(true))
    }
    catch (e) {
        const error = e.response ? e.response.data.error : 'Some error occurred, please try again'
        dispatch(registerActions.setError(error))
        dispatch(registerActions.setSuccess(false))
        console.log('Error:', {...e})
    }
    finally {
        dispatch(registerActions.setLoading(false))
    }
}
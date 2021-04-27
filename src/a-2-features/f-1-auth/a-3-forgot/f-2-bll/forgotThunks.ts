import {ThunkType} from '../../../../a-1-main/m-2-bll/Actions'
import {ForgotAPI, NewPasswordRequestDataType} from '../f-3-dal/ForgotAPI'
import {forgotActions, ForgotActionsType} from './forgotActions'

export const sendEmailTC = (email: string): ThunkType<ForgotActionsType> => async (dispatch) => {
    dispatch(forgotActions.setLoading(true))
    try {
        await ForgotAPI.forgot(email)
        dispatch(forgotActions.setError(''))
        dispatch(forgotActions.setSuccessEmailSent(true))
    } catch (e) {
        const error = e.response ? e.response.data.error : 'Some error occurred, please try again'
        dispatch(forgotActions.setError(error))
        dispatch(forgotActions.setSuccessEmailSent(false))
        console.log('Error:', {...e})
    } finally {
        dispatch(forgotActions.setLoading(false))
    }
}

export const setNewPasswordTC = (data:NewPasswordRequestDataType):ThunkType<ForgotActionsType> => async (dispatch) => {
    dispatch(forgotActions.setLoading(true))
    try {
        await ForgotAPI.setNewPassword(data)
        dispatch(forgotActions.setError(''))
        dispatch(forgotActions.setSuccessNewPasswordInstalled(true))
    } catch (e) {
        const error = e.response ? e.response.data.error : 'Some error occurred'
        dispatch(forgotActions.setError(error))
        dispatch(forgotActions.setSuccessNewPasswordInstalled(false))
        console.log('Error:', {...e})
    } finally {
        dispatch(forgotActions.setLoading(false))
    }
}
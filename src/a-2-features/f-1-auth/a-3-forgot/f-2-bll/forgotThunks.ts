import {ThunkType} from '../../../../a-1-main/m-2-bll/Actions'
import {ForgotAPI} from '../f-3-dal/ForgotAPI'
import {setNewPasswordInstalled, setIsMessageSent} from './forgotActions'
import {setAppError, setIsFetching} from '../../../../a-1-main/m-2-bll/appActions'

export const sendMessageTC = (email: string): ThunkType => async (dispatch) => {
    dispatch(setIsFetching(true))
    try {
        await ForgotAPI.forgot(email)
        dispatch(setIsMessageSent(true))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppError(error))
        console.log('Error:', {...e})
    } finally {
        dispatch(setIsFetching(false))
    }
}

export const setNewPasswordTC = (email:string, token:string):ThunkType => async (dispatch) => {
    dispatch(setIsFetching(true))
    try {
        await ForgotAPI.setNewPassword(email, token)
        dispatch(setNewPasswordInstalled(true))
    } catch (e) {
        const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppError(error))
        console.log('Error:', {...e})
    } finally {
        dispatch(setIsFetching(false))
    }
}
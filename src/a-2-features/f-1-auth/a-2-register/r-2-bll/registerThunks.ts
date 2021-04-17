import {ThunkType} from "../../../../a-1-main/m-2-bll/Actions";
import {RegisterAPI} from "../r-3-dll/RegisterAPI";
import {setAppError, setIsFetching} from '../../../../a-1-main/m-2-bll/appActions'


export const registerTC = (email:string, password: string):ThunkType => async (dispatch) => {
    dispatch(setIsFetching(true))
    try {
        await RegisterAPI.register(email, password)
        dispatch(setAppError(''))
    }
    catch (e) {
        const error = e.response? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setAppError(error))
        console.log('Error:', {...e})
    }
    finally {
        dispatch(setIsFetching(false))
    }
}
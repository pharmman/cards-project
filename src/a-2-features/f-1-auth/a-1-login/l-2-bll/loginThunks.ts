import {LoginAPI, LoginDataType} from "../l-3-dal/LoginAPI";
import {setIsLoggedIn} from "./loginActions";
import {ThunkType} from "../../../../a-1-main/m-2-bll/Actions";
import {setAppError, setIsFetching} from '../../../../a-1-main/m-2-bll/appActions'

export const loginTC = (data:LoginDataType):ThunkType => async (dispatch) => {
    dispatch(setIsFetching(true))
    try {
        const res = await LoginAPI.login(data)
        dispatch(setIsLoggedIn(true))
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
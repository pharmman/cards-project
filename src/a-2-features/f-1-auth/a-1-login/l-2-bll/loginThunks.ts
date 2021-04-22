import {LoginAPI, LoginDataType} from "../l-3-dal/LoginAPI";
import {setIsLoggedIn} from "./loginActions";
import {ThunkType} from "../../../../a-1-main/m-2-bll/Actions";
import {setAppError, setIsFetching} from '../../../../a-1-main/m-2-bll/appActions'
import {setProfile} from '../../a-4-profile/p-2-bll/profileActions'
import {Dispatch} from 'redux'

export const loginTC = (data:LoginDataType) => async (dispatch:Dispatch) => {
    dispatch(setIsFetching(true))
    try {
        const res = await LoginAPI.login(data)
        dispatch(setProfile(res.data))
        dispatch(setIsLoggedIn(true))
        dispatch(setAppError(''))
        return LoginAPI.login
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
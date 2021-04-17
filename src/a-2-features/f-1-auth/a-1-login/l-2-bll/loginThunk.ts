import {LoginAPI, LoginDataType} from "../l-3-dal/LoginAPI";
import {setError, setIsFetching, setIsLoggedIn} from "./loginActionsType";
import {ThunkType} from "../../../../a-1-main/m-2-bll/Actions";

export const loginTC = (data:LoginDataType):ThunkType => async (dispatch) => {
    dispatch(setIsFetching(true))
    try {
        const res = await LoginAPI.login(data)
        dispatch(setIsLoggedIn(true))
        dispatch(setError(''))
    }
    catch (e) {
        const error = e.response? e.response.data.error : (e.message + ', more details in the console')
        dispatch(setError(error))
        console.log('Error:', {...e})
    }
    finally {
        dispatch(setIsFetching(false))
    }
}
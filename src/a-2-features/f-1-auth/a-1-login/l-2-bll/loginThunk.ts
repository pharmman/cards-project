import { Dispatch } from "redux";
import {LoginAPI, LoginDataType } from "../l-3-dal/LoginAPI";
import {setError, setIsFetching, setIsLoggedIn } from "./loginActionsType";

export const loginTC = (data:LoginDataType) => async (dispatch:Dispatch) => {
    dispatch(setIsFetching(true))
    try {
        const res = await LoginAPI.login(data)
        dispatch(setIsLoggedIn(true))
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
import {LoginAPI, LoginDataType} from '../l-3-dal/LoginAPI'
import {loginSetError, loginSetLoading, loginSetSuccess} from './loginActions'
import {setProfile} from '../../a-4-profile/p-2-bll/profileActions'
import {Dispatch} from 'redux'

// export const loginTC = (data:LoginDataType):ThunkType => async (dispatch) => {
//     dispatch(setIsFetching(true))
//     try {
//         const res = await LoginAPI.login(data)
//         dispatch(setProfile(res.data))
//         dispatch(setIsLoggedIn(true))
//         dispatch(setAppError(''))
//     }
//     catch (e) {
//         const error = e.response? e.response.data.error : (e.message + ', more details in the console')
//         dispatch(setAppError(error))
//         console.log('Error:', {...e})
//     }
//     finally {
//         dispatch(setIsFetching(false))
//     }
// }


export const loginTC = (data: LoginDataType) => (dispatch:Dispatch) => {
    dispatch(loginSetLoading(true))
    return LoginAPI.login(data).then((res) => {
        dispatch(setProfile(res.data))
        dispatch(loginSetSuccess(true))
        dispatch(loginSetError(''))
    })
        .catch(e => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
            dispatch(loginSetError(error))
            console.log('Error:', {...e})
        }).finally(() => {
                dispatch(loginSetLoading(false))
            }
        )
}
// import thunk, { ThunkDispatch } from 'redux-thunk'
// import configureMockStore from 'redux-mock-store'
// import {loginTC} from '../../l-2-bll/loginThunks'
// import AxiosMockAdapter from 'axios-mock-adapter'
// import axios from 'axios'
// import {combineReducers} from 'redux'
// import {loginReducer} from '../../l-2-bll/loginReducer'
// import {profileReducer} from '../../../a-4-profile/p-2-bll/profileReducer'
// import {LoginAPI, LoginDataType, ProfileType} from '../../l-3-dal/LoginAPI'
// import {ThunkType} from '../../../../../a-1-main/m-2-bll/Actions'
// import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
// import {loginInitState} from '../../l-2-bll/loginInitState'
// import {profileInitState} from '../../../a-4-profile/p-2-bll/profileInitState'
//
// const middlewares = [thunk]
// const mockStore = configureMockStore<ReturnType<typeof reducerMock>, ThunkDispatch<ReturnType<typeof reducerMock>, any, any>>(middlewares)
// const reducerMock = combineReducers({
//     login: loginReducer,
//     profile: profileReducer,
//     router: (state = {}) => state
// })
// const axiosMock = new AxiosMockAdapter(axios)
//
// describe('Test login thunk creator', () => {
//     afterEach(() => {
//         axiosMock.reset()
//     })
//     it('expected actions should be dispatched on successful request', async () => {
//         // const store = mockStore(() => state)
//         // axiosMock.onGet()
//         const testProfile: ProfileType = {
//             _id: '1',
//             email: 'test@gmail.com',
//             created: new Date(Date.now()),
//             isAdmin: false,
//             name: 'Test',
//             publicCardPacksCount: 10,
//             rememberMe: true,
//             updated: new Date(Date.now()),
//             verified: false
//         }
//         axiosMock.onGet('auth/login', {
//             email: '',
//             rememberMe: false,
//             password: ''
//         } as LoginDataType).reply(200, testProfile).
//
//         let state = {
//             router: {
//                 location: {
//                     pathname: 'auth/login',
//                 },
//             },
//         }
//
//         const store = mockStore({})
//          store.dispatch(loginTC({email:'', rememberMe: false, password: ''})) ``
//         })
//
//
//         const expectedActions = [
//             'updateProductStarted',
//             'updateProductSuccessful'
//         ]
//
//     //     return store.dispatch(loginTC({password: 'dsadsasddsasda', email: 'dsadsa', rememberMe: false}) as any)
//     //         .then(() => {
//     //             const actualActions = store.getActions().map(action => action.type)
//     //             expect(actualActions).toEqual(expectedActions)
//     //         })
//     //
//     // })
// })
//
//
// // const login: jest.Mock = require('api/api').login;
// // describe('loginThunk', () => {
// //     it('dispatches a login request');
// //     describe('when login succeeds', () => {
// //         it('dispatches success');
// //     });
// //     describe('when login fails', () => {
// //         it('dispatches failure');
// //     });
// // });
// //
// //
// //
// // export default () => {}

import {loginTC} from '../../l-2-bll/loginThunks'
import {LoginAPI} from '../../l-3-dal/LoginAPI'
import {setIsFetching} from '../../../../../a-1-main/m-2-bll/appActions'
jest.mock('../../l-3-dal/LoginAPI')
const loginAPIMock = LoginAPI

const testProfile = {
    _id: '1',
    email: 'test@gmail.com',
    created: new Date(Date.now()),
    isAdmin: false,
    name: 'Test',
    publicCardPacksCount: 10,
    rememberMe: true,
    updated: new Date(Date.now()),
    verified: false
}

test('loginThunk', async () => {
    // @ts-ignore
    loginAPIMock.login.mockReturnValueOnce(Promise.resolve(testProfile))
    const thunk = loginTC({email: 'test@mail.ru', password: '12345678', rememberMe: false})
    const dispatchMock = jest.fn()

    await thunk(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(5)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setIsFetching(true))
})
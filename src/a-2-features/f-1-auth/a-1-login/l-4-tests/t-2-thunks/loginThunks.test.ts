import createMockStore from 'redux-mock-store'
import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
import configureMockStore from 'redux-mock-store'
import {AnyAction} from 'redux'
import thunk, {ThunkDispatch} from 'redux-thunk'
import {loginTC} from '../../l-2-bll/loginThunks'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import {instance} from '../../../../../a-1-main/m-3-dal/instance'
import {FormDataType, LoginFormDataType} from '../../l-1-ui/LoginPage'
import {LoginActions, loginSetErrorType, loginSetLoadingType, loginSetSuccessType} from '../../l-2-bll/loginActions'
import {ProfileType} from '../../l-3-dal/LoginAPI'
import {setProfile, setProfileSuccessType, setProfileType} from '../../../a-4-profile/p-2-bll/profileActions'

type DispatchExts = ThunkDispatch<AppRootStateType, void, AnyAction>;

const middlewares = [thunk]
const mockStore = configureMockStore<AppRootStateType, DispatchExts>(middlewares)
const mock = new MockAdapter(instance)
const store = mockStore()


describe('getTodos actions', () => {
    beforeEach(() => {
        store.clearActions()
    })
    it('dispatches a login request', () => {
        const testProfile: ProfileType = {
            _id: '1',
            avatar: 'test',
            rememberMe: false,
            verified: false,
            updated: new Date().toLocaleString(),
            email: 'test@gmail.com',
            name: 'test',
            isAdmin: false,
            created: new Date().toLocaleString(),
            publicCardPacksCount: 1
        }
        const formData: LoginFormDataType = {
            email: 'test@mail.tu',
            password: '1234',
            rememberMe: false
        }
        mock.onPost('auth/login', formData).reply(200, {...testProfile})

        return store.dispatch(loginTC(formData)).then(() => {
            const expectedActions:(LoginActions | ReturnType<typeof setProfile>)[]= [
                {
                    type: loginSetLoadingType,
                    loading: true
                },
                {
                    type: setProfileType,
                    profile: testProfile
                },
                {
                    type: loginSetSuccessType,
                    success: true
                },
                {
                    type: loginSetErrorType,
                    error: ''
                },
                {
                    type: loginSetLoadingType,
                    loading: false
                }
            ]
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

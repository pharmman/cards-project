import configureMockStore from 'redux-mock-store'
import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
import {AnyAction} from 'redux'
import thunk, {ThunkDispatch} from 'redux-thunk'
import {loginTC} from '../../l-2-bll/loginThunks'
import MockAdapter from 'axios-mock-adapter'
import {instance} from '../../../../../a-1-main/m-3-dal/instance'
import {LoginFormDataType} from '../../l-1-ui/LoginPage'
import {LoginActionsType} from '../../l-2-bll/loginActions'
import {ProfileType} from '../../l-3-dal/LoginAPI'
import {ProfileActionsType} from '../../../a-4-profile/p-2-bll/profileActions'
import {mock, store} from '../../../../../a-1-main/m-4-tests/mock'

describe('Login thunks, dispatches a login request', () => {
    beforeEach(() => {
        store.clearActions()
        mock.reset()
    })
    it('when login succeeds', async () => {
        const response: ProfileType = {
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
        mock.onPost('auth/login', formData).reply(200, {...response})

        await store.dispatch(loginTC(formData))
        const expectedActions: (LoginActionsType | ProfileActionsType)[] = [
            {
                type: 'login/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'profile/SET_PROFILE',
                payload:{profile: response}
            },
            {
                type: 'login/SET_SUCCESS',
                payload: {success: true}
            },{
                type: 'login/SET_ERROR',
                payload: {error: ''}
            },
            {
                type: 'login/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('when login failed', async () => {
        const response = {
            error: 'test error'
        }
        const formData: LoginFormDataType = {
            email: 'test@mail.tu',
            password: '1234',
            rememberMe: false
        }
        mock.onPost('auth/login', formData).reply(400, {...response})
        await store.dispatch(loginTC(formData))
        const expectedActions: LoginActionsType[] = [
            {
                type: 'login/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'login/SET_ERROR',
                payload: {error: response.error}
            },
            {
                type: 'login/SET_SUCCESS',
                payload: {success: false}
            },
            {
                type: 'login/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })
})

import {loginTC, logoutTC} from '../../l-2-bll/loginThunks'
import {LoginFormDataType} from '../../l-1-ui/u-1-login/LoginPage'
import {LoginActionsType} from '../../l-2-bll/loginActions'
import {ProfileActionsType, ProfileType} from '../../../a-4-profile/p-2-bll/profileActions'
import {mock, store} from '../../../../../a-1-main/m-4-tests/mock'
import {InfoResponseType} from '../../../a-3-forgot/f-3-dal/ForgotAPI'

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
                type: 'login/SET_LOGIN_SUCCESS',
                payload: {loginSuccess: true}
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
                type: 'login/SET_LOGIN_SUCCESS',
                payload: {loginSuccess: false}
            },
            {
                type: 'login/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })
})

describe('Logout thunks, dispatches a logout request', () => {
    beforeEach(() => {
        store.clearActions()
        mock.reset()
    })
    it('when login succeeds', async () => {
        const response: InfoResponseType = {
           info: 'Test response'
        }

        mock.onDelete('auth/me').reply(200, {...response})

        await store.dispatch(logoutTC())
        const expectedActions: (LoginActionsType)[] = [
            {
                type: 'login/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'login/SET_LOGOUT_SUCCESS',
                payload: {logoutSuccess: true}
            },
            {
                type: 'login/SET_LOGIN_SUCCESS',
                payload: {loginSuccess: false}
            },
            {
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

    it('when logout failed', async () => {
        const response = {
            error: 'test error'
        }
        mock.onDelete('auth/me').reply(400, {...response})
        await store.dispatch(logoutTC())
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
                type: 'login/SET_LOGOUT_SUCCESS',
                payload: {logoutSuccess: false}
            },
            {
                type: 'login/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })
})

import {sendEmailTC, setNewPasswordTC} from '../../f-2-bll/forgotThunks'
import {ForgotActionsType} from '../../f-2-bll/forgotActions'
import thunk, {ThunkDispatch} from 'redux-thunk'
import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
import {AnyAction} from 'redux'
import configureMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter'
import {instance} from '../../../../../a-1-main/m-3-dal/instance'
import {forgotRequestBody, NewPasswordRequestDataType} from '../../f-3-dal/ForgotAPI'
type DispatchExts = ThunkDispatch<AppRootStateType, void, AnyAction>;

const middlewares = [thunk]
const mockStore = configureMockStore<AppRootStateType, DispatchExts>(middlewares)
export const mock = new MockAdapter(instance)
export const store = mockStore()

describe('Forgot thunks, dispatch send email request', () => {
    beforeEach(() => {
        store.clearActions()
        mock.reset()
    })
    const email = 'test@gmail.com'
    const requestData = forgotRequestBody(email)
    it('when message is send', async () => {
        mock.onPost('auth/forgot', {...requestData}).reply(200)

        await store.dispatch(sendEmailTC(email))
        const expectedActions: ForgotActionsType[] = [
            {
                type: 'forgot/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'forgot/SET_ERROR',
                payload: {error: ''}
            },
            {
                type: 'forgot/SET_SUCCESS_EMAIL_SENT',
                payload: {successEmailSent: true}
            },
            {
                type: 'forgot/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('when send message was failed', async () => {
        const response = {
            error: 'test error'
        }
        mock.onAny('auth/forgot', {...requestData}).reply(400, {...response})

        await store.dispatch(sendEmailTC(email))
        const expectedActions: ForgotActionsType[] = [
            {
                type: 'forgot/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'forgot/SET_ERROR',
                payload: {error: response.error}
            },
            {
                type: 'forgot/SET_SUCCESS_EMAIL_SENT',
                payload: {successEmailSent: false}
            },
            {
                type: 'forgot/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })
})

describe('Forgot thunks, dispatch set new password request', () => {
    beforeEach(() => {
        store.clearActions()
        mock.reset()
    })
    const requestData:NewPasswordRequestDataType = {
        resetPasswordToken: 'testToken',
        password: 'testPassword'
    }
    it('when request success', async () => {
        mock.onPost('auth/set-new-password', {...requestData}).reply(200)

        await store.dispatch(setNewPasswordTC(requestData))
        const expectedActions: ForgotActionsType[] = [
            {
                type: 'forgot/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'forgot/SET_ERROR',
                payload: {error: ''}
            },
            {
                type: 'forgot/SET_SUCCESS_NEW_PASSWORD_INSTALLED',
                payload: {successNewPasswordInstalled: true}
            },
            {
                type: 'forgot/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('when request failed', async () => {
        const response = {
            error: 'test error'
        }
        mock.onAny('auth/set-new-password', {...requestData}).reply(400, {...response})

        await store.dispatch(setNewPasswordTC(requestData))
        const expectedActions: ForgotActionsType[] = [
            {
                type: 'forgot/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'forgot/SET_ERROR',
                payload: {error: response.error}
            },
            {
                type: 'forgot/SET_SUCCESS_NEW_PASSWORD_INSTALLED',
                payload: {successNewPasswordInstalled: false}
            },
            {
                type: 'forgot/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })
})
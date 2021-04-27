import {FormDataType} from '../../../a-1-login/l-1-ui/LoginPage'
import {registerTC} from '../../r-2-bll/registerThunks'
import {RegisterActionsType} from '../../r-2-bll/registerActions'
import {mock, store} from '../../../../../a-1-main/m-4-tests/mock'

describe('Register thunks, dispatches a login request', () => {
    beforeEach(() => {
        store.clearActions()
        mock.reset()
    })
    it('when login succeeds', async () => {
        const formData: FormDataType = {
            email: 'test@mail.tu',
            password: '1234',
        }
        mock.onPost('auth/register', formData).reply(200)

        await store.dispatch(registerTC(formData))
        const expectedActions: RegisterActionsType[] = [
            {
                type: 'register/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'register/SET_ERROR',
                payload: {error: ''}
            },
            {
                type: 'register/SET_SUCCESS',
                payload: {success: true}
            },
            {
                type: 'register/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('when login failed', async () => {
        const response = {
            error: 'test error'
        }
        const formData: FormDataType = {
            email: 'test@mail.tu',
            password: '1234',
        }
        mock.onPost('auth/register', formData).reply(400, response)

        await store.dispatch(registerTC(formData))
        const expectedActions: RegisterActionsType[] = [
            {
                type: 'register/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'register/SET_ERROR',
                payload: {error: response.error}
            },
            {
                type: 'register/SET_SUCCESS',
                payload: {success: false}
            },
            {
                type: 'register/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })
})
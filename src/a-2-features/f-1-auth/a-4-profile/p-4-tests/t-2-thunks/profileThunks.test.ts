import {mock, store} from '../../../../../a-1-main/m-4-tests/mock'
import {ProfileActionsType, ProfileType} from '../../p-2-bll/profileActions'
import {authMeTC} from '../../p-2-bll/profileThunks'

describe('Profile thunk, dispatches auth/me request', () => {
    beforeEach(() => {
        store.clearActions()
        mock.reset()
    })
    const testProfileResponse: ProfileType = {
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
    it('when request succeed', async () => {
        mock.onPost('auth/me').reply(200, {...testProfileResponse})

         await store.dispatch(authMeTC())
        const expectedActions: ProfileActionsType[] = [
            {
                type: 'profile/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'profile/SET_PROFILE',
                payload: {profile: testProfileResponse}
            },
            {
                type: 'profile/SET_SUCCESS',
                payload: {success: true}
            },
            {
                type: 'profile/SET_ERROR',
                payload: {error: ''}
            },
            {
                type: 'profile/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('when request failed', async () => {
        const response = {
            error: 'test error'
        }
        mock.onPost('auth/me').reply(400, response)

        await store.dispatch(authMeTC())
        const expectedActions: ProfileActionsType[] = [
            {
                type: 'profile/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'profile/SET_ERROR',
                payload: {error: response.error}
            },
            {
                type: 'profile/SET_SUCCESS',
                payload: {success: false}
            },
            {
                type: 'profile/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })
})
import {ProfileStateType} from '../../p-2-bll/profileInitState'
import {profileReducer} from '../../p-2-bll/profileReducer'
import {profileActions, ProfileType} from '../../p-2-bll/profileActions'

describe('Profile reducer test', () => {
    let state: ProfileStateType
    beforeEach(() => {
        state = {
            success: false,
            error: '',
            loading: false,
            profile: null
        }
    })
    it('success should change', () => {
        const newState = profileReducer(state, profileActions.setSuccess(true))

        expect(newState.error).toBe('')
        expect(newState.success).toBeTruthy()
        expect(newState.loading).toBeFalsy()
        expect(newState.profile).toBe(null)
    })
    it('error should change', () => {
        const newState = profileReducer(state, profileActions.setError('Test error'))

        expect(newState.error).toBe('Test error')
        expect(newState.success).toBeFalsy()
        expect(newState.loading).toBeFalsy()
        expect(newState.profile).toBe(null)
    })
    it('loading should change', () => {
        const newState = profileReducer(state, profileActions.setLoading(true))

        expect(newState.error).toBe('')
        expect(newState.success).toBeFalsy()
        expect(newState.loading).toBeTruthy()
        expect(newState.profile).toBe(null)
    })
    it('profile should change', () => {
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

        const newState = profileReducer(state, profileActions.setProfile(testProfile))

        expect(newState.error).toBe('')
        expect(newState.success).toBeFalsy()
        expect(newState.loading).toBeFalsy()
        expect(newState.profile).toEqual(testProfile)
    })
})
import {appActions} from '../../a-2-bll/appActions'
import {appReducer} from '../../a-2-bll/appReducer'
import {AppStateType} from '../../a-2-bll/appInitState'

describe('App reducer test', () => {
    let state: AppStateType
    beforeEach(() => {
        state = {
            error: '',
            loading: false
        }
    })
    it('error should change', () => {
        const newState = appReducer(state, appActions.setError('Test error'))

        expect(newState.error).toBe('Test error')
        expect(newState.loading).toBeFalsy()
    })
    it('loading should change', () => {
        const newState = appReducer(state, appActions.setLoading(true))

        expect(newState.error).toBe('')
        expect(newState.loading).toBeTruthy()
    })
})
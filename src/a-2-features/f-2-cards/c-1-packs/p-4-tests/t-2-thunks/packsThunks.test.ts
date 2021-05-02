import {mock, store} from '../../../../../a-1-main/m-4-tests/mock'
import {AppActionsType} from '../../../../f-3-app/a-2-bll/appActions'
import {PacksActionsType} from '../../p-2-bll/packsActions'
import {PackType} from '../../p-2-bll/packsInitState'
import {packForTests} from '../t-1-reducer/packsReducer.test'
import {getPacksTC} from '../../p-2-bll/packsThunks'
import {GetPacksResponseType} from '../../p-3-dal/PacksAPI'

describe('Get packs thunk', () => {
    let testPack:PackType
    beforeEach(() => {
        store.clearActions()
        mock.reset()
    })
    testPack = packForTests
    it('packs should be received', async () => {
        const response:GetPacksResponseType = {
            cardPacks: [testPack],
            cardPacksTotalCount: 1,
            maxCardsCount: 10,
            minCardsCount: 3,
            page: 1,
            pageCount: 1
        }

        mock.onGet('cards/pack').reply(200, response)

        await store.dispatch(getPacksTC({}))
        const expectedActions: (AppActionsType | PacksActionsType)[] = [
            {
                type: 'app/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'packs/SET_PACKS',
                payload: {packs: response.cardPacks}
            },
            {
                type: 'app/SET_ERROR',
                payload: {error: ''}
            },
            {
                type: 'app/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('packs should not be received', async () => {
        const response = {
            error: 'test error'
        }

        mock.onGet('cards/pack').reply(400, response)

        await store.dispatch(getPacksTC({}))
        const expectedActions: (AppActionsType | PacksActionsType)[] = [
            {
                type: 'app/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'app/SET_ERROR',
                payload: {error: response.error}
            },
            {
                type: 'app/SET_LOADING',
                payload: {loading: false}
            }
        ]
        expect(store.getActions()).toEqual(expectedActions)
    })
})
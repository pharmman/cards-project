import {mock, store} from '../../../../../a-1-main/m-4-tests/mock'
import {AppActionsType} from '../../../../f-3-app/a-2-bll/appActions'
import {PacksActionsType} from '../../p-2-bll/packsActions'
import {PackType} from '../../p-2-bll/packsInitState'
import {packForTests} from '../t-1-reducer/packsReducer.test'
import {createPackTC, getPacksTC} from '../../p-2-bll/packsThunks'
import {CreatePackRequestData, GetPacksResponseType} from '../../p-3-dal/PacksAPI'

let testPack:PackType;
testPack = packForTests

const getResponse:GetPacksResponseType = {
    cardPacks: [testPack],
    cardPacksTotalCount: 1,
    maxCardsCount: 10,
    minCardsCount: 3,
    page: 1,
    pageCount: 1
}

describe('Get packs thunk', () => {

    beforeEach(() => {
        store.clearActions()
        mock.reset()
    })

    it('packs should be received', async () => {


        mock.onGet('cards/pack').reply(200, getResponse)

        await store.dispatch(getPacksTC({}))
        const expectedActions: (AppActionsType | PacksActionsType)[] = [
            {
                type: 'app/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'packs/SET_PACKS',
                payload: {packs: getResponse.cardPacks}
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
//TODO вата потому что будут проблемы с загрузкой, в одном диспатче она уже тру когда в другом должна быть фолс, подумай
describe('Create pack thunk', () => {
    beforeEach(() => {
        store.clearActions()
        mock.reset()
    })
    it('pack should be created', async () => {

        const data:CreatePackRequestData = {}
        const request = {
            cardsPack:{
                ...data
            }
        }

        mock.onPost('cards/pack').reply(200)
        mock.onGet('cards/pack').reply(200, Promise.resolve(() => {}))

        await store.dispatch(createPackTC())
        const expectedActions: (AppActionsType | PacksActionsType)[] = [
            {
                type: 'app/SET_LOADING',
                payload: {loading: true}
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
        const a = (store.getActions())
        console.log(a)
    })

    // it('packs should not be received', async () => {
    //     const response = {
    //         error: 'test error'
    //     }
    //
    //     mock.onGet('cards/pack').reply(400, response)
    //
    //     await store.dispatch(getPacksTC({}))
    //     const expectedActions: (AppActionsType | PacksActionsType)[] = [
    //         {
    //             type: 'app/SET_LOADING',
    //             payload: {loading: true}
    //         },
    //         {
    //             type: 'app/SET_ERROR',
    //             payload: {error: response.error}
    //         },
    //         {
    //             type: 'app/SET_LOADING',
    //             payload: {loading: false}
    //         }
    //     ]
    //     expect(store.getActions()).toEqual(expectedActions)
    // })
})
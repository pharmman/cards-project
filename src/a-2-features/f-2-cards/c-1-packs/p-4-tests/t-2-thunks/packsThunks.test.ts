import {mock, mockStore} from '../../../../../a-1-main/m-4-tests/mock'
import {AppActionsType} from '../../../../f-3-app/a-2-bll/appActions'
import {PacksActionsType} from '../../p-2-bll/packsActions'
import {PackType} from '../../p-2-bll/packsInitState'
import {packForTests} from '../t-1-reducer/packsReducer.test'
import {createPackTC, deletePackTC, getPacksTC} from '../../p-2-bll/packsThunks'
import {CreatePackRequestData, GetPacksResponseType} from '../../p-3-dal/PacksAPI'
import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'

let testPack: PackType
testPack = packForTests
const packsThunks = {
    getPacks: getPacksTC,
}

const getResponse: GetPacksResponseType = {
    cardPacks: [testPack],
    cardPacksTotalCount: 1,
    maxCardsCount: 10,
    minCardsCount: 3,
    page: 1,
    pageCount: 1
}

const mockState = {
    packs: {
        packsUserId: '',
        cardPacks: null,
        maxCardsCount: 10,
        minCardsCount: 10,
        page: 1,
        pageCount: 1,
        cardPacksTotalCount: 10
    }
} as AppRootStateType
const store = mockStore(() => mockState)

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
                payload: {packs: getResponse}
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

    it('packs should be not received', async () => {
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
// describe('Create pack thunk', () => {
//     beforeEach(() => {
//         store.clearActions()
//         mock.reset()
//         packsThunks.getPacks = jest.fn(() => () => Promise.resolve())
//     })
//     it('pack should be created', async () => {
//
//         mock.onPost('cards/pack').reply(200)
//         mock.onGet('cards/pack').reply(200, getResponse)
//
//
//         await store.dispatch(createPackTC())
//
//         const expectedActions: (AppActionsType | PacksActionsType)[] = [
//             {
//                 type: 'app/SET_LOADING',
//                 payload: {loading: true}
//             },
//             {
//                 type: 'app/SET_ERROR',
//                 payload: {error: ''}
//             },
//             {
//                 type: 'app/SET_LOADING',
//                 payload: {loading: false}
//             }
//         ]
//         console.log(store.getActions())
//         expect(store.getActions()).toEqual(expectedActions)
//     })
//
//     it('packs should be not received', async () => {
//         const response = {
//             error: 'test error'
//         }
//
//         mock.onPost('cards/pack').reply(400, response)
//
//         await store.dispatch(createPackTC())
//         const expectedActions: (AppActionsType | PacksActionsType)[] = [
//             {
//                 type: 'app/SET_LOADING',
//                 payload: {loading: true}
//             },
//             {
//                 type: 'app/SET_ERROR',
//                 payload: {error: response.error}
//             },
//             {
//                 type: 'app/SET_LOADING',
//                 payload: {loading: false}
//             }
//         ]
//         expect(store.getActions()).toEqual(expectedActions)
//     })
// })
//
// describe('Delete pack thunk', () => {
//     beforeEach(() => {
//         store.clearActions()
//         mock.reset()
//     })
//     it('pack should be deleted', async () => {
//         const testPack = 'testId'
//
//         mock.onGet('cards/pack').reply(200, getResponse)
//         mock.onDelete(`cards/pack?id=${testPack}`).reply(200)
//
//         await store.dispatch(deletePackTC(testPack))
//         const expectedActions: (AppActionsType | PacksActionsType)[] = [
//             {
//                 'payload': {
//                     'loading': true
//                 },
//                 'type': 'app/SET_LOADING'
//             },
//             // {
//             //     'payload': {
//             //         'loading': true
//             //     },
//             //     'type': 'app/SET_LOADING'
//             // },
//             // {
//             //     'payload': {
//             //         'loading': false
//             //     },
//             //     'type': 'app/SET_LOADING'
//             // },
//             {
//                 'payload': {packs: getResponse},
//                 'type': 'packs/SET_PACKS'
//             },
//             {
//                 'payload': {
//                     'error': ''
//                 },
//                 'type': 'app/SET_ERROR'
//             },
//             {
//                 'payload': {
//                     'loading': false
//                 },
//                 'type': 'app/SET_LOADING'
//             }
//         ]
//         expect(store.getActions()).toEqual(expectedActions)
//     })
//
//     it('packs should not be received', async () => {
//         const response = {
//             error: 'test error'
//         }
//
//         mock.onPost('cards/pack').reply(400, response)
//
//         await store.dispatch(createPackTC())
//         const expectedActions: (AppActionsType | PacksActionsType)[] = [
//             {
//                 type: 'app/SET_LOADING',
//                 payload: {loading: true}
//             },
//             {
//                 type: 'app/SET_ERROR',
//                 payload: {error: response.error}
//             },
//             {
//                 type: 'app/SET_LOADING',
//                 payload: {loading: false}
//             }
//         ]
//         expect(store.getActions()).toEqual(expectedActions)
//     })
// })
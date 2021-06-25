import {PacksStateType, PackType} from '../../p-2-bll/packsInitState'
import {packsReducer} from '../../p-2-bll/packsReducer'
import {packsActions} from '../../p-2-bll/packsActions'


export const packForTests:PackType = {
    _id: 'test',
    __v: 1,
    type: 'pack',
    created: new Date().toDateString(),
    name: 'test',
    cardsCount: 10,
    grade: 10,
    updated: new Date().toDateString(),
    rating: 10,
    shots: 5,
    user_id: 'testUser'
}

const testPacksInfo:PacksStateType = {
    cardPacks: [packForTests],
    cardPacksTotalCount: 977,
    pageCount: 10,
    maxCardsCount: 8,
    minCardsCount: 4,
    page: 5,
    packsUserId: 'test'
}

describe('Packs reducer test', () => {
    let state: PacksStateType
    let testPack: PackType
    beforeEach(() => {
        state = {
            cardPacks: [testPack],
            cardPacksTotalCount: 1,
            pageCount: 1,
            maxCardsCount: 1,
            minCardsCount: 1,
            page: 1,
            packsUserId: ''
        }
        testPack = packForTests
    })
    it('packs should change', () => {

        const newState = packsReducer(state, packsActions.setPacks(testPacksInfo))

        expect(newState).toEqual(testPacksInfo)
    })
})
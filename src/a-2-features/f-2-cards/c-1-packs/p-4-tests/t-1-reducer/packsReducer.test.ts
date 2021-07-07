import {PacksDomainType, PackType} from '../../p-2-bll/packsInitState'
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
    user_id: '',
    user_name: 'testUserName'
}

const testPacksResponse:PacksDomainType = {
    cardPacks: [packForTests],
    cardPacksTotalCount: 977,
    pageCount: 10,
    maxCardsCount: 8,
    minCardsCount: 4,
    page: 5,
    packsUserId: ''
}

describe('Packs reducer test', () => {
    let state: PacksDomainType
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
    it('packs state should change', () => {
        const newState = packsReducer(state, packsActions.setPacks(testPacksResponse))
        expect(newState).toEqual(testPacksResponse)
    })
    it('should packs userID change',  () => {
        const newUserId = 'testUserId'
        const newState = packsReducer(state, packsActions.setPacksUserId(newUserId))
        expect(newState.packsUserId).toBe(newUserId)
    })
})




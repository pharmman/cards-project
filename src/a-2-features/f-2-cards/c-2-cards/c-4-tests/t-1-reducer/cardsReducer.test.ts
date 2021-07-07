import {CardsDomainType, CardType} from '../../c-2-bll/cardsInitState'
import {cardsReducer} from '../../c-2-bll/cardsReducer'
import {cardsActions} from '../../c-2-bll/cardsActions'

const cardForTest:CardType = {
    answer: 'testAnswer',
    question: 'testQuestion',
    _id: '1',
    rating: 1,
    created: new Date().toDateString(),
    grade: 1,
    type: 'card',
    __v: 1,
    updated: new Date().toDateString(),
    cardsPack_id: 'testCardsPackId',
    user_id: 'testUserId',
    shots: 1,
}

export const testCardsResponse:CardsDomainType = {
    packUserId: 'packsUserId',
    page: 10,
    pageCount: 5,
    minGrade: 5,
    maxGrade: 10,
    cards: [cardForTest],
    cardsTotalCount: 999,
    cardsPackId: 'cardsPackId'
}

describe('Cards reducer test', () => {
    let state: CardsDomainType
    beforeEach(() => {
        state = {
            cards: null,
            cardsTotalCount: 1,
            page: 1,
            pageCount: 1,
            cardsPackId: '',
            maxGrade: 1,
            minGrade: 1,
            packUserId: ''
        }
    })
    it('cards state should change',  () => {
        const newState = cardsReducer(state, cardsActions.setCards(testCardsResponse))
        expect(newState).toEqual(testCardsResponse)
    })
    it('cards pack id should be change',  () => {
        const cardsPackId = 'testCardsPackId'
        const newState = cardsReducer(state, cardsActions.setCardsPackId(cardsPackId))
        expect(newState.cardsPackId).toBe(cardsPackId)
    })
})
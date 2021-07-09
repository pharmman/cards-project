import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
import {mock, mockStore} from '../../../../../a-1-main/m-4-tests/mock'
import {testCardsResponse} from '../t-1-reducer/cardsReducer.test'
import {getCardsTC, updateCardGradeTC} from '../../c-2-bll/cardsThunks'
import {AppActionsType} from '../../../../f-3-app/a-2-bll/appActions'
import {CardsActionsType} from '../../c-2-bll/cardsActions'
import {PacksActionsType} from '../../../c-1-packs/p-2-bll/packsActions'
import {UpdateCardGradeRequestType, UpdateGradeResponseType} from '../../c-3-dal/CardsAPI'

const mockState = {
    cards: {
        cardsPackId: '',
        cards: null,
        cardsTotalCount: 1,
        pageCount: 1,
        page: 1,
        packUserId: '',
        minGrade: 1,
        maxGrade: 1
    }
} as AppRootStateType

const store = mockStore(() => mockState)

describe('Get Cards thunk', () => {
    beforeEach(() => {
        store.clearActions()
        mock.reset()
    })
    it('cards should be received', async () => {
        const getResponse = testCardsResponse
        mock.onGet('cards/card').reply(200, getResponse)
        await store.dispatch(getCardsTC({cardsPack_id: 'testPackId'}))
        const expectedActions: (AppActionsType | CardsActionsType)[] = [
            {
                type: 'app/SET_LOADING',
                payload: {loading: true}
            },
            {
                type: 'cards/SET_CARDS',
                payload: {cards: getResponse}
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

    it('cards should be not received', async () => {
        const response = {
            error: 'test error'
        }
        mock.onGet('cards/card').reply(400, response)
        await store.dispatch(getCardsTC({cardsPack_id: 'testPackId'}))
        const expectedActions: AppActionsType[] = [
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

describe('Update card grade thunk test', () => {
    beforeEach(() => {
        store.clearActions()
        mock.reset()
    })
    const request: UpdateCardGradeRequestType = {
        card_id: 'cardID',
        grade: 1
    }
    it('grade should be successfully updated', async () => {
        const response: UpdateGradeResponseType = {
            updatedGrade: {
                _id: 'testID',
                user_id: 'testUserID',
                grade: 1,
                card_id: 'testCardID',
                cardsPack_id: 'testCardsPackID',
                shots: 1
            }
        }
        mock.onPut('cards/grade', request).reply(200, response)
        await store.dispatch(updateCardGradeTC(request))
        const expectedActions: AppActionsType[] = [
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
        expect(store.getActions()).toEqual(expectedActions)
    })
    it('should be not updated',  async() => {
        const response = {
            error: 'test error'
        }
        mock.onPut('cards/grade', request).reply(400, response)
        await store.dispatch(updateCardGradeTC(request))
        const expectedActions: AppActionsType[] = [
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
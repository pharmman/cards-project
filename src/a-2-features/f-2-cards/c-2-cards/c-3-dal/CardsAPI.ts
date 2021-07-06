import {instance} from '../../../../a-1-main/m-3-dal/instance'
import {CardType} from '../c-2-bll/cardsInitState'

export interface GetCardsResponseType  {
    cards: CardType[] | null
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export type GetCardsRequestDataType = {
    cardsPack_id: string
    min?: number
    max?: number
    page?: number
    pageCount?: number
}

export type CreateCardRequestDataType = {
    card: CreateCardDataType
}

export type CreateCardDataType = {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    rating?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
    type?: string
}

export type UpdateCardRequestDataType = {
    card: {
        _id: string
        question?: string
        comments?: string
    }
}

export const CardsAPI = {
    getCards(data: GetCardsRequestDataType) {
        return instance.get<GetCardsResponseType>('/cards/card', {
            params: {
                ...data
            }
        })
    },
    createCard(data: CreateCardRequestDataType) {
        return instance.post('/cards/card', data)
    },
    deleteCard(id: string) {
        return instance.delete(`/cards/card?id=${id}`)
    },
    updateCard(data: UpdateCardRequestDataType) {
        return instance.put('/cards/card', data)
    }
}
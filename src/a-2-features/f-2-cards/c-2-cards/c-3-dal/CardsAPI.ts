import {instance} from '../../../../a-1-main/m-3-dal/instance'
import {CardType} from '../c-2-bll/cardsInitState'

export interface GetCardsResponseType {
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
    cardAnswer?: string
    cardQuestion?: string
    min?: number
    max?: number
    page?: number
    pageCount?: number
    sortCards?: string
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

export type UpdateCardGradeRequestType = {
    grade: number
    card_id: string
}

export type UpdateGradeResponseType = {
    updatedGrade: {
        _id: string
        cardsPack_id: string
        card_id: string
        user_id: string
        grade: number
        shots: number
    }
}

export const CardsAPI = {
    getCards(data: GetCardsRequestDataType) {
        return instance.get<GetCardsResponseType>('cards/card', {
                params: {
                    pageCount: 9999,
                    ...data
                }
            }
        )
    },
    createCard(data
                   :
                   CreateCardRequestDataType
    ) {
        return instance.post('cards/card', data)
    }
    ,
    deleteCard(id
                   :
                   string
    ) {
        return instance.delete(`cards/card?id=${id}`)
    }
    ,
    updateCard(data
                   :
                   UpdateCardRequestDataType
    ) {
        return instance.put('cards/card', data)
    }
    ,
    updateCardGrade(data: UpdateCardGradeRequestType
    ) {
        return instance.put<UpdateGradeResponseType>('cards/grade', data)
    }
}
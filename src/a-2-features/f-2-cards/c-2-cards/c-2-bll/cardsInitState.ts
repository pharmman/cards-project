import {GetCardsResponseType} from '../c-3-dal/CardsAPI'

export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: Date | string
    updated: Date | string
    __v: number
    _id: string
}

export interface CardsDomainType extends GetCardsResponseType {
    cardsPackId: string
}

export const cardsInitState: CardsDomainType = {
    cards: null,
    cardsTotalCount: 0,
    page: 1,
    pageCount: 0,
    maxGrade: 0,
    minGrade: 0,
    packUserId: '',
    cardsPackId: ''
}
import {GetPacksResponseType} from '../p-3-dal/PacksAPI'

export type PackType = {
    _id: string
    user_id: string
    name: string
    cardsCount: number
    grade: number
    shots: number
    rating: number
    type: 'pack' | 'folder'
    created: Date | string
    updated: Date | string
    __v: number
    user_name: string
}

export interface PacksDomainType extends GetPacksResponseType {
    packsUserId: string
}

export const packsInitState:PacksDomainType = {
    cardPacks: null,
    maxCardsCount: 0,
    page: 1,
    pageCount: 1,
    minCardsCount: 1,
    cardPacksTotalCount: 0,
    packsUserId: ''
}

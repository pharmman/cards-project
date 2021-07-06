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
    created: Date
    updated: Date
    __v: number
    user_name: string
}

export interface PacksStateType extends GetPacksResponseType {
    packsUserId: string
}

export const packsInitState:PacksStateType = {
    cardPacks: null,
    maxCardsCount: 0,
    page: 1,
    pageCount: 1,
    minCardsCount: 1,
    cardPacksTotalCount: 0,
    packsUserId: ''
}

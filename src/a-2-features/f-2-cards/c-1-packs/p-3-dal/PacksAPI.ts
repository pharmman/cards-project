import {instance} from '../../../../a-1-main/m-3-dal/instance'
import {PackType} from '../p-2-bll/packsInitState'

export type GetPacksRequestData = {
    packName?: string
    min?: number
    max?: number
    page?: number
    pageCount?: number
    user_id?: string
}

export interface GetPacksResponseType {
    cardPacks: PackType[] | null
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

export type CreatePackRequestData = {
    name?: string
    deckCover?: string
    private?: boolean
}

export type UpdatePackRequestData = {
    _id: string
    name?: string
}

export const PacksAPI = {
    getPacks(data?: GetPacksRequestData) {
        return instance.get<GetPacksResponseType>('cards/pack', {
            params: {
                pageCount: 10,
                ...data
            }
        })
    },
    createPack(data?: CreatePackRequestData) {
        return instance.post('cards/pack', {cardsPack: {
            ...data
            }})
    },
    deletePack(packId: string) {
        return instance.delete(`cards/pack?id=${packId}`)
    },
    updatePack(data: UpdatePackRequestData) {
        return instance.put('cards/pack', {cardsPack: {
            ...data
            }})
    }
}
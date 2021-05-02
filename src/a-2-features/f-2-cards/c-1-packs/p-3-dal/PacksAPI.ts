import {instance} from '../../../../a-1-main/m-3-dal/instance'
import {PackType} from '../p-2-bll/packsInitState'

export type GetPacksRequestData = {
    packName?: string
    min?: number
    max?: number
    page?: number
    pageCount?: number
    userId?: string
}

export type GetPacksResponseType = {
    cardPacks: PackType[]
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

type CreatePackRequestData = {
    name?: string
    deckCover?: string
    private?: boolean
}

type UpdatePackRequestData = {
    _id: string
    name?: string
}


export const PacksAPI = {
    getPack(data: GetPacksRequestData) {
        return instance.get<GetPacksResponseType>('cards/pack', {data})
    },
    createPack(data: CreatePackRequestData) {
        return instance.post('cards/pack', {...data})
    },
    deletePack(packId: string) {
        return instance.delete(`cards/pack?id=${packId}`)
    },
    updatePack(data: UpdatePackRequestData) {
        return instance.put('cards/pack', {...data})
    }
}
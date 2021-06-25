import {InferActionsType} from '../../../../a-1-main/m-2-bll/Actions'
import {GetPacksResponseType} from '../p-3-dal/PacksAPI'

export type PacksActionsType = InferActionsType<typeof packsActions>

export const packsActions = {
    setPacks: (packs:GetPacksResponseType) => ({type: 'packs/SET_PACKS', payload: {packs}} as const),
    setPacksUserId: (packsUserId:string) => ({type: 'packs/SET_PACKS_USER_ID', payload: {packsUserId}} as const)
}
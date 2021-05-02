import {PackType} from './packsInitState'
import {InferActionsType} from '../../../../a-1-main/m-2-bll/Actions'

export type PacksActionsType = InferActionsType<typeof packsActions>

export const packsActions = {
    setPacks: (packs:PackType[]) => ({type: 'packs/SET_PACKS', payload: {packs}})
}
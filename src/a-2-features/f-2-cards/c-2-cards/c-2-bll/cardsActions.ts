import {GetCardsResponseType} from '../c-3-dal/CardsAPI'
import {InferActionsType} from '../../../../a-1-main/m-2-bll/Actions'

export type CardsActionsType = InferActionsType<typeof cardsActions>

export const cardsActions = {
    setCards: (cards:GetCardsResponseType) => ({type: 'cards/SET_CARDS', payload: {cards}} as const),
    setCardsPackId: (id: string) => ({type: 'cards/SET_CARDS_PACK_ID', payload: {id}} as const)
}
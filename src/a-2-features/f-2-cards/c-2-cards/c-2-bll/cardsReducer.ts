import {cardsInitState} from './cardsInitState'
import {CardsActionsType} from './cardsActions'


export const cardsReducer = (state = cardsInitState, action: CardsActionsType) => {
    switch (action.type) {
        case 'cards/SET_CARDS':
            return {...state, ...action.payload.cards}
        case 'cards/SET_CARDS_PACK_ID':
            return {...state, cardsPackId: action.payload.id}
        default:
            return state
    }
}
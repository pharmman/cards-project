import {packsInitState} from './packsInitState'
import {PacksActionsType} from './packsActions'


export const packsReducer = (state = packsInitState, action:PacksActionsType) => {
    switch (action.type) {
        case 'packs/SET_PACKS':
            return {...state, ...action.payload.packs}
        case 'packs/SET_PACKS_USER_ID':
            return {...state, packsUserId: action.payload.packsUserId}
        default:
            return state
    }
}
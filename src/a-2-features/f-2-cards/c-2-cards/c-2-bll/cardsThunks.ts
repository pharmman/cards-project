import {CardsAPI, CreateCardDataType, GetCardsRequestDataType, UpdateCardRequestDataType} from '../c-3-dal/CardsAPI'
import {ThunkType} from '../../../../a-1-main/m-2-bll/Actions'
import {cardsActions, CardsActionsType} from './cardsActions'
import {appActions, AppActionsType} from '../../../f-3-app/a-2-bll/appActions'

export const getCardsTC = (data: GetCardsRequestDataType): ThunkType<CardsActionsType | AppActionsType> => async (dispatch) => {
    dispatch(appActions.setLoading(true))
    try {
        const res = await CardsAPI.getCards(data)
        dispatch(appActions.setError(''))
        dispatch(cardsActions.setCards(res.data))
    } catch (e) {
        const error = e.response ? e.response.data.error : 'Some error occurred, please try again'
        dispatch(appActions.setError(error))
        console.log('Error:', {...e})
    } finally {
        dispatch(appActions.setLoading(false))
    }
}

export const createCardTC = (data: CreateCardDataType): ThunkType<AppActionsType> => async (dispatch) => {
    dispatch(appActions.setLoading(true))
    try {
        await CardsAPI.createCard({card: data})
        dispatch(appActions.setError(''))
        dispatch(getCardsTC({cardsPack_id: data.cardsPack_id}))
    } catch (e) {
        const error = e.response ? e.response.data.error : 'Some error occurred, please try again'
        dispatch(appActions.setError(error))
        console.log('Error:', {...e})
    } finally {
        dispatch(appActions.setLoading(false))
    }
}

export const deleteCardTC = (id: string): ThunkType<AppActionsType> => async (dispatch, getState) => {
    dispatch(appActions.setLoading(true))
    try {
        await CardsAPI.deleteCard(id)
        dispatch(appActions.setError(''))
        dispatch(getCardsTC({cardsPack_id: getState().cards.cardsPackId}))
    } catch (e) {
        const error = e.response ? e.response.data.error : 'Some error occurred, please try again'
        dispatch(appActions.setError(error))
        console.log('Error:', {...e})
    } finally {
        dispatch(appActions.setLoading(false))
    }
}

export const updateCardTC = (data: UpdateCardRequestDataType): ThunkType<AppActionsType> => async (dispatch, getState) => {
    dispatch(appActions.setLoading(true))
    try {
        await CardsAPI.updateCard(data)
        dispatch(appActions.setError(''))
        dispatch(getCardsTC({cardsPack_id: getState().cards.cardsPackId}))
    } catch (e) {
        const error = e.response ? e.response.data.error : 'Some error occurred, please try again'
        dispatch(appActions.setError(error))
        console.log('Error:', {...e})
    } finally {
        dispatch(appActions.setLoading(false))
    }
}
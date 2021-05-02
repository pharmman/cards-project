import {GetPacksRequestData, PacksAPI} from '../p-3-dal/PacksAPI'
import {ThunkType} from '../../../../a-1-main/m-2-bll/Actions'
import {packsActions, PacksActionsType} from './packsActions'
import {appActions, AppActionsType} from '../../../f-3-app/a-2-bll/appActions'


export const getPacksTC = (data: GetPacksRequestData): ThunkType<PacksActionsType | AppActionsType> => async (dispatch) => {
    dispatch(appActions.setLoading(true))
    try {
        const res = await PacksAPI.getPack(data)
        dispatch(packsActions.setPacks(res.data.cardPacks))
        dispatch(appActions.setError(''))
    }
    catch (e) {
        const error = e.response ? e.response.data.error : 'Some error occurred, please try again'
        dispatch(appActions.setError(error))
        console.log('Error:', {...e})
    }
    finally {
        dispatch(appActions.setLoading(false))
    }
}
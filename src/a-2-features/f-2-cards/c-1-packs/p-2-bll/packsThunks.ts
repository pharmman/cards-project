import {CreatePackRequestData, GetPacksRequestData, PacksAPI, UpdatePackRequestData} from '../p-3-dal/PacksAPI'
import {ThunkType} from '../../../../a-1-main/m-2-bll/Actions'
import {packsActions, PacksActionsType} from './packsActions'
import {appActions, AppActionsType} from '../../../f-3-app/a-2-bll/appActions'


export let getPacksTC = (data?: GetPacksRequestData): ThunkType<PacksActionsType | AppActionsType> => async (dispatch, getState) => {
    const {packsUserId} = getState().packs
    dispatch(appActions.setLoading(true))
    try {
        const res = packsUserId ? await PacksAPI.getPacks({...data, user_id: packsUserId})
            :
            await PacksAPI.getPacks(data)
        dispatch(packsActions.setPacks(res.data))
        dispatch(appActions.setError(''))
    } catch (e) {
        const error = e.response ? e.response.data.error : 'Some error occurred, please try again'
        dispatch(appActions.setError(error))
        console.log('Error:', {...e})
    } finally {
        dispatch(appActions.setLoading(false))
    }
}

export const createPackTC = (data?: CreatePackRequestData): ThunkType<PacksActionsType | AppActionsType> => async (dispatch) => {
    dispatch(appActions.setLoading(true))
    try {
        await PacksAPI.createPack(data)
        dispatch(appActions.setError(''))
        dispatch(getPacksTC())
    } catch (e) {
        const error = e.message || 'Some error occurred, please try again'
        dispatch(appActions.setError(error))
        console.log('Error:', {...e})
    } finally {
        dispatch(appActions.setLoading(false))
    }
}

export const deletePackTC = (packId: string): ThunkType<PacksActionsType | AppActionsType> => async (dispatch) => {
    dispatch(appActions.setLoading(true))
    try {
        await PacksAPI.deletePack(packId)
        dispatch(getPacksTC())
    } catch (e) {
        const error = e.response ? e.response?.data?.error : 'Some error occurred, please try again'
        dispatch(appActions.setError(error))
        console.log('Error:', {...e})
    } finally {
        dispatch(appActions.setLoading(false))
    }
}

export const updatePack = (data: UpdatePackRequestData): ThunkType<PacksActionsType | AppActionsType> => async (dispatch) => {
    dispatch(appActions.setLoading(true))
    try {
        await PacksAPI.updatePack({...data})
        dispatch(getPacksTC())
        dispatch(appActions.setError(''))
    } catch (e) {
        const error = e.response ? e.response.data.error : 'Some error occurred, please try again'
        dispatch(appActions.setError(error))
        console.log('Error:', {...e})
    } finally {
        dispatch(appActions.setLoading(false))
    }
}
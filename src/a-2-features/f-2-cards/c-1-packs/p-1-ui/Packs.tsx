import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
import {PacksDomainType} from '../p-2-bll/packsInitState'
import React, {useEffect, useState} from 'react'
import {createPackTC, getPacksTC} from '../p-2-bll/packsThunks'
import {Button, Checkbox, Pagination} from 'antd'
import {ProfileType} from '../../../f-1-auth/a-4-profile/p-2-bll/profileActions'
import {CheckboxChangeEvent} from 'antd/es/checkbox'
import {packsActions} from '../p-2-bll/packsActions'
import {cardsActions} from '../../c-2-cards/c-2-bll/cardsActions'
import {Redirect} from 'react-router-dom'
import {PATH} from '../../../../a-1-main/m-1-ui/main/routes/Pages'
import {PacksTable} from './u-1-Table/PacksTable'

export const Packs = () => {
    const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile.profile as ProfileType)
    const packs = useSelector<AppRootStateType, PacksDomainType>(state => state.packs)
    const dispatch = useDispatch()
    const [redirect, setRedirect] = useState<boolean>(false)
    const [myPacks, setMyPacks] = useState<boolean>(!!packs.packsUserId)

    const addPackHandler = () => dispatch(createPackTC())
    const onChangePageHandler = (page: number) => dispatch(getPacksTC({page}))
    const redirectToEditCards = (id: string) => {
        dispatch(cardsActions.setCardsPackId(id))
        setRedirect(true)

    }
    const setMyPacksHandler = (e: CheckboxChangeEvent) => setMyPacks(e.target.checked)

    useEffect(() => {
        if (myPacks && profile) {
            dispatch(packsActions.setPacksUserId(profile._id))
        } else {
            dispatch(packsActions.setPacksUserId(''))
        }
        profile && dispatch(getPacksTC())
    }, [myPacks, dispatch, profile])

    if (redirect) return <Redirect to={PATH.CARDS}/>

    return (
        <>
            <div style={{textAlign: 'left'}}>
                <Button type="primary" onClick={addPackHandler}>
                    Create Pack
                </Button>
            </div>
            <div style={{textAlign: 'left'}}>
                <Checkbox onChange={(e) => setMyPacksHandler(e)}>My packs</Checkbox>
            </div>
            <PacksTable redirectToEditCards={redirectToEditCards}  packs={packs.cardPacks} profile={profile}/>
            <Pagination
                onChange={onChangePageHandler}
                total={packs.cardPacksTotalCount}
                current={packs.page}
                showSizeChanger={false}
            />
        </>
    )
}
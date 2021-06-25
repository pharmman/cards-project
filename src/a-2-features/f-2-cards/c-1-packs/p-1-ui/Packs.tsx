import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
import {PacksStateType} from '../p-2-bll/packsInitState'
import React, {useEffect, useState} from 'react'
import {createPackTC, deletePackTC, getPacksTC} from '../p-2-bll/packsThunks'
import {Button, Checkbox, Pagination, Table} from 'antd'
import {ProfileType} from '../../../f-1-auth/a-4-profile/p-2-bll/profileActions'
import {CheckboxChangeEvent} from 'antd/es/checkbox'
import {packsActions} from '../p-2-bll/packsActions'


export const Packs = () => {
    const packs = useSelector<AppRootStateType, PacksStateType>(state => state.packs)
    const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile.profile as ProfileType)
    const dispatch = useDispatch()

    const [myPacks, setMyPacks] = useState<boolean>(!!packs.packsUserId)

    const setMyPacksHandler = (e: CheckboxChangeEvent) => {
        setMyPacks(e.target.checked)
    }

    useEffect(() => {
        if (myPacks && profile) {
            dispatch(packsActions.setPacksUserId(profile._id))
        } else {
            dispatch(packsActions.setPacksUserId(''))
        }
        dispatch(getPacksTC())
    }, [myPacks, dispatch, profile])

    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch])


    const addPackHandler = () => {
        dispatch(createPackTC())
    }

    const deletePackHandler = (id: string) => {
        dispatch(deletePackTC(id))
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            editable: true,
            width: '30%',
        },
        {
            title: 'Cards Count',
            dataIndex: 'cardsCount',
            key: 'cardsCount',
            width: '10%'
        },
        {
            title: 'Grade',
            dataIndex: 'grade',
            key: 'grade',
            width: '10%'
        },
        {
            title: 'Shots',
            key: 'shots',
            dataIndex: 'shots',
            width: '10%'
        },
        {
            title: 'Rating',
            key: 'rating',
            dataIndex: 'rating',
            width: '10%'
        },
        {
            title: 'Delete',
            dataIndex: 'action',
            key: 'x',
            width: '10%'
        }
    ]

    let data
    if (packs.cardPacks) {
         data = packs.cardPacks.map((p, index) => ({
            key: index,
            name: p.name,
            cardsCount: p.cardsCount,
            grade: p.grade,
            shots: p.shots,
            rating: p.rating,
            action: p.user_id === profile?._id && <Button onClick={() => deletePackHandler(p._id)}>Delete</Button>,
        }))
    }

    const onChangePageHandler = (page: number) => {
        dispatch(getPacksTC({page}))
    }

    return (
        <div>
            <div style={{textAlign: 'left'}}>
                <Button type="primary" onClick={addPackHandler}>
                    Create Pack
                </Button>
            </div>
            <div style={{textAlign: 'left'}}>
                <Checkbox onChange={(e) => setMyPacksHandler(e)}>My packs</Checkbox>
            </div>
            <Table columns={columns} dataSource={data} pagination={false}/>
            <Pagination
                onChange={onChangePageHandler}
                total={packs.cardPacksTotalCount}
                current={packs.page}
                showSizeChanger={false}
            />
        </div>
    )
}
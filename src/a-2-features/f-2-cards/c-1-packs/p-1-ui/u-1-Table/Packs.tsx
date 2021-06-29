import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
import {PacksStateType, PackType} from '../../p-2-bll/packsInitState'
import React, {useEffect, useState} from 'react'
import {createPackTC, deletePackTC, getPacksTC, updatePack} from '../../p-2-bll/packsThunks'
import {Button, Checkbox, Form, Pagination, Table} from 'antd'
import {ProfileType} from '../../../../f-1-auth/a-4-profile/p-2-bll/profileActions'
import {CheckboxChangeEvent} from 'antd/es/checkbox'
import {packsActions} from '../../p-2-bll/packsActions'
import Column from 'antd/lib/table/Column'
import {EditableCell} from '../u-2-TableComponents/EditableCell'
import {ButtonsEditingCondition, ButtonsStableCondition} from '../u-2-TableComponents/Buttons'

export const Packs = () => {
    const [form] = Form.useForm()
    const [editedId, setEditedId] = useState<string>('')
    const packs = useSelector<AppRootStateType, PacksStateType>(state => state.packs)
    const profile = useSelector<AppRootStateType, ProfileType>(state => state.profile.profile as ProfileType)
    const dispatch = useDispatch()
    const [myPacks, setMyPacks] = useState<boolean>(!!packs.packsUserId)

    const setMyPacksHandler = (e: CheckboxChangeEvent) => setMyPacks(e.target.checked)
    const addPackHandler = () => dispatch(createPackTC())
    const deletePackHandler = (_id: string) => dispatch(deletePackTC(_id))
    const setEditedPack = (record: PackType) => {
        form.setFieldsValue(record.name)
        setEditedId(record._id)
    }
    const onChangePageHandler = (page: number) => dispatch(getPacksTC({page}))
    const cancelEditedValue = (_id: string) => setEditedId('')
    const saveEditedValue = async (_id: string) => {
        try {
            const row = await form.validateFields()
            dispatch(updatePack({_id, name: row[_id]}))
            setEditedId('')
        } catch (e) {
            console.log(e)
        }
    }

    let data
    if (packs.cardPacks) {
        data = packs.cardPacks.map((p, index) => ({
            key: index,
            _id: p._id,
            name: p.name,
            cardsCount: p.cardsCount,
            lastUpdated: p.updated,
            userName: p.user_name,
            user_id: p.user_id
        }))
    }

    useEffect(() => {
        if (myPacks && profile) {
            dispatch(packsActions.setPacksUserId(profile._id))
        } else {
            dispatch(packsActions.setPacksUserId(''))
        }
        profile && dispatch(getPacksTC())
    }, [myPacks, dispatch, profile])

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
            <Form form={form}>
                <Table dataSource={data} pagination={false}>
                    <Column title="Name" dataIndex="name" key="name" render={(value, record: PackType) => (
                        <EditableCell id={record._id} saveEditedValue={saveEditedValue}
                                      edited={record._id === editedId}>
                            {record.name}
                        </EditableCell>
                    )}/>
                    <Column title={'Cards'} dataIndex={'cardsCount'} key={'cardsCount'}/>
                    <Column title={'Last Updated'} dataIndex={'lastUpdated'} key={'updated'}/>
                    <Column title={'Created by'} dataIndex={'userName'} key={'shots'}/>
                    <Column title={'Actions'} dataIndex={'action'} key={'x'} render={(value, record: PackType) => (
                        editedId === record._id ?
                            <ButtonsEditingCondition packId={record._id} saveEditedValue={saveEditedValue}
                                                     cancelEditedValue={cancelEditedValue}/>
                            :
                            <ButtonsStableCondition pack={record} deletePackHandler={deletePackHandler}
                                                    setEditedPack={setEditedPack} profileId={profile._id}/>
                    )}/>
                </Table>
            </Form>
            <Pagination
                onChange={onChangePageHandler}
                total={packs.cardPacksTotalCount}
                current={packs.page}
                showSizeChanger={false}
            />
        </>
    )
}
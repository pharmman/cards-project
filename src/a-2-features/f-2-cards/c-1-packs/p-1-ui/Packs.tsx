import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
import {PacksStateType, PackType} from '../p-2-bll/packsInitState'
import React, {useEffect, useState} from 'react'
import {createPackTC, deletePackTC, getPacksTC, updatePack} from '../p-2-bll/packsThunks'
import {Button, Checkbox, Form, Input, Pagination, Table} from 'antd'
import {ProfileType} from '../../../f-1-auth/a-4-profile/p-2-bll/profileActions'
import {CheckboxChangeEvent} from 'antd/es/checkbox'
import {packsActions} from '../p-2-bll/packsActions'
import Column from 'antd/lib/table/Column'

type EditableCellPropsType = {
    id: string
    edited: boolean
    saveEditedValue: (id: string) => void
}

const EditableCell: React.FC<EditableCellPropsType> = ({
                                                           edited,
                                                           id,
                                                           saveEditedValue,
                                                           children,
                                                           ...restProps
                                                       }) => {

    const offEditMode = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            saveEditedValue(id)
        }
    }

    return (
        edited ?
            <div {...restProps}>
                <Form.Item
                    style={{margin: 0}}
                    name={id}
                    rules={[
                        {
                            required: true,
                            message: `Please enter name!`
                        }
                    ]}
                >
                    <Input onKeyPress={offEditMode} autoFocus/>
                </Form.Item>
            </div>
            :
            <div>{children}</div>
    )
}

export const Packs = () => {
    const [form] = Form.useForm()
    const [editedId, setEditedId] = useState<string>('')
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
        profile && dispatch(getPacksTC())
    }, [myPacks, dispatch, profile])

    const addPackHandler = () => {
        dispatch(createPackTC())
    }

    const deletePackHandler = (id: string) => {
        dispatch(deletePackTC(id))
    }

    const setEditedPack = (record: PackType) => {
        form.setFieldsValue(record.name)
        setEditedId(record._id)
    }

    let data
    if (packs.cardPacks) {
        data = packs.cardPacks.map((p, index) => ({
            key: index,
            _id: p._id,
            name: p.name,
            cardsCount: p.cardsCount,
            grade: p.grade,
            shots: p.shots,
            rating: p.rating,
            user_id: p.user_id,
        }))
    }

    const onChangePageHandler = (page: number) => {
        dispatch(getPacksTC({page}))
    }

    const saveEditedValue = async (_id: string) => {
        try {
            const row = await form.validateFields()
            dispatch(updatePack({_id, name: row[_id]}))
            setEditedId('')
        } catch (e) {
            console.log(e)
        }
    }

    const cancelEditedValue = (_id:string) => {
        setEditedId('')
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
            <Form form={form}>
                <Table dataSource={data} pagination={false}>
                    <Column title="Name" dataIndex="name" key="name" render={(value, record: PackType) => (
                        <EditableCell id={record._id} saveEditedValue={saveEditedValue} edited={record._id === editedId}>
                            {record.name}
                        </EditableCell>
                    )}/>
                    <Column title={'Cards Count'} dataIndex={'cardsCount'} key={'cardsCount'}/>
                    <Column title={'Grade'} dataIndex={'grade'} key={'grade'}/>
                    <Column title={'Shots'} dataIndex={'shots'} key={'shots'}/>
                    <Column title={'Rating'} dataIndex={'rating'} key={'rating'}/>
                    <Column title={'Delete'} dataIndex={'action'} key={'x'} render={(value, record: PackType) => (
                        editedId === record._id ?
                            <>
                                <Button onClick={() => saveEditedValue(record._id)}>Save</Button>
                                <Button onClick={() => cancelEditedValue(record._id)}>Cancel</Button>
                            </>
                            :
                            <>
                                {record.user_id === profile?._id &&
                                <>
                                    <Button onClick={() => deletePackHandler(record._id)}>Delete</Button>
                                    <Button onClick={() => setEditedPack(record)}>Edit</Button>
                                </>
                                }
                                <Button onClick={() => {
                                }}>Learn</Button>
                            </>
                    )}/>
                </Table>
            </Form>
            <Pagination
                onChange={onChangePageHandler}
                total={packs.cardPacksTotalCount}
                current={packs.page}
                showSizeChanger={false}
            />
        </div>
    )
}
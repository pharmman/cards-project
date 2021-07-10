// import {Form, Pagination, Table} from 'antd'
// import Column from 'antd/lib/table/Column'
// import {PacksDomainType, PackType} from '../../p-2-bll/packsInitState'
// import {EditableCell} from './t-1-TableComponents/EditableCell'
// import {ButtonsEditingCondition, ButtonsStableCondition} from './t-1-TableComponents/Buttons'
// import React, {useEffect, useState} from 'react'
// import {useDispatch} from 'react-redux'
// import {deletePackTC, updatePack} from '../../p-2-bll/packsThunks'
// import {ProfileType} from '../../../../f-1-auth/a-4-profile/p-2-bll/profileActions'
// import {useDebounce} from '../../../../../a-3-common/c-3-debounce/useDebounce'
//
// type PacksTablePropsType = {
//     redirectToEditCards: (id: string) => void
//     packs: PacksDomainType
//     profile: ProfileType
//     onPageChange: (page: number, pageSize?: number | undefined) => void
//     setSortedHandler: (fieldDirection: string) => void
//     learnRedirect: (id:string) => void
// }
//
// export const PacksTable: React.FC<PacksTablePropsType> = ({
//                                                               profile,
//                                                               redirectToEditCards,
//                                                               packs,
//                                                               onPageChange,
//                                                               setSortedHandler,
//                                                               learnRedirect
//                                                           }) => {
//     const [form] = Form.useForm()
//     const dispatch = useDispatch()
//     const deletePackHandler = (_id: string) => dispatch(deletePackTC(_id))
//
//     //edit name
//     const [previousValue, setPreviousValue] = useState('')
//     const [editedId, setEditedId] = useState<string>('')
//     const activateEditMode = (record: PackType) => {
//         form.setFieldsValue(record.name)
//         setEditedId(record._id)
//         setPreviousValue(record.name)
//     }
//     const cancelEditedValue = (_id: string) => {
//         setEditedId('')
//         setPreviousValue('')
//     }
//     const saveEditedValue = async (_id: string) => {
//         try {
//             const row = await form.validateFields()
//             const name = row[_id]
//             if (previousValue !== row[_id]) {
//                 dispatch(updatePack({_id, name}))
//                 setPreviousValue(name)
//             }
//             setEditedId('')
//         } catch (e) {
//             console.log(e)
//         }
//     }
//
//     //table rows
//     let data
//     if (packs.cardPacks) {
//         data = packs.cardPacks.map((p, index) => ({
//             key: index,
//             _id: p._id,
//             name: p.name,
//             cardsCount: p.cardsCount,
//             updated: new Date(p.updated).toLocaleDateString('ru'),
//             user_name: p.user_name,
//             user_id: p.user_id
//         }))
//     }
//
//     //sorting
//     const [sortingField, setSortingField] = useState('')
//     const [sortingDirection, setSortingDirection] = useState('')
//     const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
//         setSortingField(sorter.field)
//         setSortingDirection(sorter.order === 'ascend' ? '0' : '1')
//     }
//     useEffect(() => {
//         (sortingField && sortingDirection) && setSortedHandler(`${sortingDirection}${sortingField}`)
//     }, [sortingField, sortingDirection, setSortedHandler])
//
//     return (
//         <Form form={form} component={false}>
//             <Table sortDirections={['ascend', 'descend', 'ascend']} onChange={onChange} style={{cursor: 'default'}}
//                    dataSource={data} pagination={false}>
//                 <Column sorter={true} showSorterTooltip={false}
//                         filtered={true} title="Name" dataIndex="name" key="name"
//                         render={(value, record: PackType) => (
//                             record.user_id === profile._id
//                                 ?
//                                 <EditableCell activateEditMode={activateEditMode} pack={record}
//                                               saveEditedValue={saveEditedValue}
//                                               edited={record._id === editedId}>
//                                     {record.name}
//                                 </EditableCell>
//                                 :
//                                 <div>{record.name}</div>
//                         )}/>
//                 <Column sorter={true} title={'Cards'}
//                         dataIndex={'cardsCount'} key={'cardsCount'}/>
//                 <Column title={'Last Updated'} dataIndex={'updated'} key={'updated'}/>
//                 <Column sorter={true} showSorterTooltip={false}
//                         title={'Created by'} dataIndex={'user_name'} key={'shots'}/>
//                 <Column title={'Actions'} dataIndex={'action'} key={'x'} render={(value, record: PackType) => (
//                     editedId === record._id ?
//                         <ButtonsEditingCondition packId={record._id} saveEditedValue={saveEditedValue}
//                                                  cancelEditedValue={cancelEditedValue}/>
//                         :
//                         <ButtonsStableCondition learnRedirect={learnRedirect} pack={record} deletePackHandler={deletePackHandler}
//                                                 redirectToEditCards={redirectToEditCards} profileId={profile._id}/>
//                 )}/>
//             </Table>
//             <Pagination
//                 showSizeChanger
//                 total={packs.cardPacksTotalCount}
//                 current={packs.page}
//                 onChange={onPageChange}
//                 locale={{items_per_page: ''}}
//             />
//         </Form>
//     )
// }

export const a = () => {}
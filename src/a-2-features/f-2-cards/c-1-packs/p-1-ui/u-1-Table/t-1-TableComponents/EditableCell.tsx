// import React from 'react'
// import {PackType} from '../../../p-2-bll/packsInitState'
//
// type EditableCellPropsType = {
//     pack: PackType
//     edited: boolean
//     saveEditedValue: (id: string) => void
//     activateEditMode: (pack: PackType) => void
// }
// export const EditableCell: React.FC<EditableCellPropsType> = ({
//                                                                   edited,
//                                                                   saveEditedValue,
//                                                                   pack,
//                                                                   activateEditMode,
//                                                                   children,
//                                                                   ...restProps
//                                                               }) => {
//     return (
//         edited ?
//             <div {...restProps}>
//                 <Form.Item
//                     style={{margin: 0}}
//                     name={pack._id}
//                     initialValue={pack.name}
//                     rules={[
//                         {
//                             required: true,
//                             message: `Please input name!`
//                         }
//                     ]}
//                 >
//                     <Input onPressEnter={() => saveEditedValue(pack._id)} onBlur={() => saveEditedValue(pack._id)}
//                            autoFocus/>
//                 </Form.Item>
//             </div>
//             :
//             <div className={'editable-row'} onClick={() => activateEditMode(pack)}>{children}</div>
//     )
// }


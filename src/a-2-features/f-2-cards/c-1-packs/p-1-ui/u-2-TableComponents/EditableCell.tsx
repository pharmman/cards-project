import React from 'react'
import {Form, Input} from 'antd'

type EditableCellPropsType = {
    id: string
    edited: boolean
    saveEditedValue: (id: string) => void
}
export const EditableCell: React.FC<EditableCellPropsType> = ({
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
                            message: `Please nput name!`
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
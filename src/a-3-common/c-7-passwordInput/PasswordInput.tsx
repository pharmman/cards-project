import {Form, Input} from 'antd'
import {LockOutlined} from '@ant-design/icons'
import React from 'react'

export const PasswordInput = () => {
    return (
        <Form.Item
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!'
                }
            ]}>
            <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}
                            placeholder="Password" autoComplete={'on'} size={'large'}/>
        </Form.Item>
    )
}
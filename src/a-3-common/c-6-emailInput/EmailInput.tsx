import {Form, Input} from 'antd'
import {UserOutlined} from '@ant-design/icons'
import React from 'react'

export const EmailInput = () => {
    return (
        <Form.Item
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Please input your E-mail!'
                },
                {
                    type: 'email',
                    message: 'Invalid email address'
                }
            ]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder={'Email'}
                   size={'large'}/>
        </Form.Item>
    )
}
import {Form, Input} from 'antd'
import {LockOutlined} from '@ant-design/icons'
import React from 'react'

export const ConfirmPassword = () => {
    return (
        <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Please confirm your password!'
                },
                ({getFieldValue}) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve()
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'))
                    }
                })
            ]}
        >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}
                            placeholder="Confirm password" autoComplete={'on'} size={'large'}/>
        </Form.Item>
    )
}
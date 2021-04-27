import React, {useEffect} from 'react'
import {Button, Card, Col, Form, Input, message, Row} from 'antd'
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
import {Preloader} from '../../../../a-3-common/c-1-preloader/Preloader'
import 'antd/dist/antd.css'
import {registerTC} from '../r-2-bll/registerThunks'
import {PATH} from '../../../../a-1-main/m-1-ui/main/routes/Pages'
import {FormDataType} from '../../a-1-login/l-1-ui/LoginPage'

//ant-design styles
const layout = {
    offset: {span: 2}
}

export const RegisterPage: React.FC = () => {
    const dispatch = useDispatch()
    const error = useSelector<AppRootStateType, string>(state => state.register.error)
    const loading = useSelector<AppRootStateType, boolean>(state => state.register.loading)
    const success = useSelector<AppRootStateType, boolean>(state => state.register.success)

    //form submit
    const onSubmit = (data: FormDataType) => {
        dispatch(registerTC(data))
    }

    //pop-up if error
    useEffect(() => {
        if (error) {
            return message.error(error, 5)
        }
    }, [error])

    if (loading) {
        return <Preloader/>
    }
    if (success) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <div className="site-card-border-less-wrapper">
            <Row justify={'center'} align={'top'}>
                <h1>Registration</h1>
            </Row>
            <Row justify={'center'} align={'top'}>
                <Col span={14}>
                    <Card>
                        <Form layout={'vertical'} onFinish={onSubmit}>
                            <Form.Item
                                label={'Email'}
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!'
                                    }
                                ]}
                            >
                                <Input size={'large'}/>
                            </Form.Item>
                            <Form.Item
                                label={'Password'}
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!'
                                    },
                                    {
                                        min: 8,
                                        message: 'Password must be 8 characters or more'
                                    }
                                ]}>
                                <Input.Password autoComplete={'on'} size={'large'}/>
                            </Form.Item>
                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
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
                                <Input.Password autoComplete={'on'} size={'large'}/>
                            </Form.Item>
                            <Form.Item>
                                <Row>
                                    <Col span={24} style={{textAlign: 'left'}}>
                                        <Button size={'large'} style={{width: '30%'}} type="primary"
                                                htmlType="submit" {...layout}>
                                            Registration
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
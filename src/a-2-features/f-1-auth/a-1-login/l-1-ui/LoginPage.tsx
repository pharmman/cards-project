import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
import {Button, Card, Checkbox, Col, Form, Input, message, Row} from 'antd'
import {NavLink, Redirect} from 'react-router-dom'
import {loginTC} from '../l-2-bll/loginThunks'
import {Preloader} from '../../../../a-3-common/c-1-preloader/Preloader'


export interface FormDataType {
    email: string;
    password: string;
}

export interface LoginFormDataType extends FormDataType {
    rememberMe: boolean;
}


export const LoginPage: React.FC = () => {
    const dispatch = useDispatch()
    const error = useSelector<AppRootStateType, string>(state => state.login.error)
    const loading = useSelector<AppRootStateType, boolean>(state => state.login.loading)
    const loginSuccess = useSelector<AppRootStateType, boolean>(state => state.login.success)

    useEffect(() => {
        if (error) {
            return message.error(error, 5)
        }
    }, [error])


    //ant-design styles
    const layout = {
        labelCol: {span: 24}
    }
    const startLayout = {
        wrapperCol: {span: 14}
    }

    const onSubmit = (data: LoginFormDataType) => {
        dispatch(loginTC({...data}))
    }

    if (loading) {
        return <Preloader/>
    }

    if (loginSuccess && !error) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={'site-card-border-less-wrapper'}>
            <Row justify={'center'} align={'top'}>
                <h1>Card Project</h1>
            </Row>
            <Row justify={'center'} align={'middle'}>
                <Card size={'default'}>
                    <Col span={24}>
                        <Form {...layout} layout={'vertical'} onFinish={onSubmit} initialValues={{rememberMe: true}}>
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
                                    }
                                ]}>
                                <Input.Password autoComplete={'on'} size={'large'}/>
                            </Form.Item>
                            <Form.Item {...startLayout} name={'rememberMe'} valuePropName={'checked'}>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <NavLink to={'/forgot'}>
                                    Forgot password
                                </NavLink>
                            </Form.Item>
                            <Form.Item>
                                <Button size={'large'} style={{width: '100%'}} type="primary" htmlType="submit"
                                        className="login-form-button">
                                    Log In
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                Or <NavLink to={'/register'}>register now!</NavLink>
                            </Form.Item>
                        </Form>
                    </Col>
                </Card>
            </Row>
        </div>
    )
}
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
import {Button, Card, Checkbox, Form, Input, message, Row} from 'antd'
import {NavLink, Redirect} from 'react-router-dom'
import {loginTC} from '../../l-2-bll/loginThunks'
import {Preloader} from '../../../../../a-3-common/c-1-preloader/Preloader'
import {PATH} from '../../../../../a-1-main/m-1-ui/main/routes/Pages'
import Title from 'antd/es/typography/Title'

export interface FormDataType {
    email: string
    password: string
}

//ant-design styles
const startLayout = {
    wrapperCol: {span: 12}
}

export interface LoginFormDataType extends FormDataType {
    rememberMe: boolean;
}

export const LoginPage: React.FC = () => {

    const dispatch = useDispatch()
    const error = useSelector<AppRootStateType, string>(state => state.login.error)
    const loading = useSelector<AppRootStateType, boolean>(state => state.login.loading)
    const loginSuccess = useSelector<AppRootStateType, boolean>(state => state.login.loginSuccess)


    //form submit
    const onSubmit = (data: LoginFormDataType) => {
        dispatch(loginTC({...data}))
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

    if (loginSuccess && !error) {
        return <Redirect to={PATH.PROFILE}/>
    }

    return (
        <div className={'site-card-border-less-wrapper'}>
            <Row justify={'center'} align={'top'}>
                <Title level={1}>Card Project</Title>
            </Row>
            <Row justify={'center'} align={'middle'}>
                <Card className={'formCardMinWidth'}>
                    <Form layout={'vertical'} onFinish={onSubmit} initialValues={{rememberMe: true}}>
                        <Form.Item
                            label={'Email'}
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
                            <Button block size={'large'} type="primary" htmlType="submit"
                                    className="form-button">
                                Log In
                            </Button>
                            Or <NavLink to={PATH.REGISTER}>register now!</NavLink>
                        </Form.Item>
                    </Form>
                </Card>
            </Row>
        </div>
    )
}
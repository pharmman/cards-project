import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../a-1-main/m-2-bll/store";
import {Button, Card, Checkbox, Col, Form, Input, message, Row} from "antd";
import {NavLink} from "react-router-dom";
import {loginTC} from "../l-2-bll/loginThunks";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface IFormInput {
    email: string;
    password: string;
    rememberMe: boolean;
}

export const LoginPage: React.FC = () => {
    const dispatch = useDispatch()
    const error = useSelector<AppRootStateType, string>(state => state.app.error)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.app.isFetching)

    useEffect(() => {
        if (error) {
            message.error(error, 5)
        }
        return () => {}
    }, [error])


    //ant-design styles
    const layout = {
        labelCol: {span: 24},
    };
    const startLayout = {
        wrapperCol: {span: 12},
    };

    const onSubmit = (data: IFormInput) => {
        dispatch(loginTC({...data}))
    }

    const antIcon = <LoadingOutlined style={{ fontSize: 96 }} spin />;


    if (isFetching) {
        return (
            <Row justify={'center'} align={'middle'} style={{minHeight: '100vh'}}>
                <Spin  indicator={antIcon} />
            </Row>
        )
    }

    return (
        <Row justify={'center'} align={'middle'} style={{minHeight: '100vh'}}>
            <Card>
                <Col span={24}>
                    <Form {...layout} onFinish={onSubmit} initialValues={{ rememberMe: true }}>
                        <Form.Item
                            label={'Email'}
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label={'Password'}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}>
                            <Input.Password autoComplete={'on'}/>
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
                            <Button style={{width: '100%'}} type="primary" htmlType="submit"
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
    )
}
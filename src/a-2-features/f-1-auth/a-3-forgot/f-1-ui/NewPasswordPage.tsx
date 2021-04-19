import {Button, Card, Col, Form, Input, message, Row} from 'antd'
import Title from 'antd/es/typography/Title'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setNewPasswordTC} from '../f-2-bll/forgotThunks'
import {Redirect, useParams} from 'react-router-dom'
import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
import {Preloader} from '../../../../a-3-common/c-1-preloader/Preloader'

type NewPasswordFormDataType = {
    password: string
}

type ParamTypes = {
    token: string
}

export const NewPasswordPage = () => {
    const dispatch = useDispatch()
    const {token} = useParams<ParamTypes>()
    const isNewPasswordInstalled = useSelector<AppRootStateType, boolean>(state => state.forgot.isNewPasswordInstalled)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.app.isFetching)
    const error = useSelector<AppRootStateType, string>(state => state.app.error)

    useEffect(() => {
        error && message.error(error, 5)
    })

    const onSubmit = (data: NewPasswordFormDataType) => {
        dispatch(setNewPasswordTC(data.password, token))
    }

    if (isFetching) {
        return <Preloader/>
    }

    if (isNewPasswordInstalled) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className="site-card-border-less-wrapper">
            <Row justify={'center'} align={'top'}>
                    <Col span={10}>
                        <Card>
                            <Title level={3}>Enter your email address and click the button. We will be sent to you
                                email
                                with a link to reset your password. </Title>
                            <Form layout={'vertical'} onFinish={onSubmit}>
                                <Form.Item
                                    label={'Password'}
                                    name="password"
                                    rules={[
                                        {
                                            min: 8,
                                            message: 'Password must be 8 characters or more'
                                        }
                                    ]}>
                                    <Input.Password size={'large'}/>
                                </Form.Item>
                                <Form.Item>
                                    <Col span={24} style={{textAlign: 'left'}}>
                                        <Button size={'large'} type="primary"
                                                htmlType="submit">
                                            Set new password
                                        </Button>
                                    </Col>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
        </div>
    )
}
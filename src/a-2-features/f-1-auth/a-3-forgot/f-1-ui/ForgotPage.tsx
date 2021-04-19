import React, {useEffect, useState} from 'react'
import {Button, Card, Col, Form, Input, message, Row, Typography} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {sendMessageTC} from '../f-2-bll/forgotThunks'
import Title from 'antd/es/typography/Title'
import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
import {setIsMessageSent} from '../f-2-bll/forgotActions'
import {Preloader} from '../../../../a-3-common/c-1-preloader/Preloader'

export const ForgotPage: React.FC = () => {
    const error = useSelector<AppRootStateType, string>(state => state.app.error)
    const isMessageSent = useSelector<AppRootStateType, boolean>(state => state.forgot.isMessageSent)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.app.isFetching)
    const dispatch = useDispatch()
    const [timeForNextTry, setTimeForNextTry] = useState<number>(60)

    const layout = {
        offset: {span: 2}
    }

    const onSubmit = (data: { email: string }) => {
        dispatch(sendMessageTC(data.email))
    }

    useEffect(() => {
        error && message.error(error, 5)
        if (isMessageSent) {
            const id = setTimeout(() => {
                setTimeForNextTry(timeForNextTry - 1)
            }, 1000)
            if (timeForNextTry === 0) {
                setTimeForNextTry(60)
                clearTimeout(id)
                dispatch(setIsMessageSent(false))
            }
            return () => {
                clearTimeout(id)
            }
        } else {
            return
        }
    }, [dispatch, error, isMessageSent, timeForNextTry])

    if (isMessageSent) {
        return (
            <div className="site-card-border-less-wrapper">
                <Row justify={'center'} align={'top'} style={{minHeight: '100vh'}}>
                    <Col span={10}>
                        <Card>
                            <Typography.Title level={3}>Email sent, check your email </Typography.Title>
                            <br/>
                            <Typography.Title level={3}>You can try again after: {timeForNextTry}</Typography.Title>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

    if (isFetching) {
        return <Preloader/>
    }

    return (
        <div className="site-card-border-less-wrapper">
            <Row justify={'center'} align={'top'}>
                <Title>Forgot your password? Let's get you a new one</Title>
                <Row justify={'center'}>
                    <Col span={10}>
                        <Card>
                            <Title level={3}>Enter your email address and click the button. We will be sent to you
                                email
                                with a link to reset your password. </Title>
                            <Form layout={'vertical'} onFinish={onSubmit}>
                                <Form.Item
                                    label={'Email'}
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!'
                                        }
                                    ]}>
                                    <Input size={'large'}/>
                                </Form.Item>
                                <Form.Item>
                                    <Col span={24} style={{textAlign: 'left'}}>
                                        <Button size={'large'} type="primary"
                                                htmlType="submit" {...layout}>
                                            Send email
                                        </Button>
                                    </Col>

                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}
import React, {useEffect, useState} from 'react'
import {Button, Card, Col, Form, Input, message, Row, Typography} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {sendEmailTC} from '../../f-2-bll/forgotThunks'
import Title from 'antd/es/typography/Title'
import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
import {Preloader} from '../../../../../a-3-common/c-1-preloader/Preloader'
import {forgotActions} from '../../f-2-bll/forgotActions'
import {MessageSentFeedback} from './MessageSentFeedback'

export type ForgotFormDataType = {
    email: string
}

export const ForgotPage: React.FC = () => {
    const error = useSelector<AppRootStateType, string>(state => state.forgot.error)
    const isEmailSent = useSelector<AppRootStateType, boolean>(state => state.forgot.successEmailSent)
    const loading = useSelector<AppRootStateType, boolean>(state => state.forgot.loading)
    const dispatch = useDispatch()
    const [timeForNextTry, setTimeForNextTry] = useState<number>(60)

    //ant-design style
    const layout = {
        offset: {span: 2}
    }
    //form submit action
    const onSubmit = (data: ForgotFormDataType) => {
        dispatch(sendEmailTC(data.email))
    }

    //actions after dispatch thunk
    useEffect(() => {
        error && message.error(error, 5)
        if (isEmailSent) {
            const id = setTimeout(() => {
                setTimeForNextTry(timeForNextTry - 1)
            }, 1000)
            if (timeForNextTry === 0) {
                setTimeForNextTry(60)
                clearTimeout(id)
                dispatch(forgotActions.setSuccessEmailSent(false))
            }
            return () => {
                clearTimeout(id)
            }
        }
    }, [dispatch, error, isEmailSent, timeForNextTry])

    if (loading) {
        return <Preloader/>
    }

    if (isEmailSent) {
        return (
            <MessageSentFeedback timeForNextTry={timeForNextTry}/>
        )
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
                                with a link to reset your password.
                            </Title>
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
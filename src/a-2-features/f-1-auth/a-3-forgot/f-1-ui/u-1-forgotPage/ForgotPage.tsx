import React, {useEffect, useState} from 'react'
import {Button, Card, Col, Form, Input, message, Row} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {sendEmailTC} from '../../f-2-bll/forgotThunks'
import Title from 'antd/es/typography/Title'
import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
import {Preloader} from '../../../../../a-3-common/c-1-preloader/Preloader'
import {forgotActions} from '../../f-2-bll/forgotActions'
import {MessageSentFeedback} from './MessageSentFeedback'
import Paragraph from 'antd/es/typography/Paragraph'
import {PATH} from '../../../../../a-1-main/m-1-ui/main/routes/Pages'
import {NavLink} from 'react-router-dom'
import {StyledButton, StyledCard, StyledParagraph} from '../../../a-1-login/l-1-ui/u-1-login/LoginPage'
import {PageTitles} from '../../../../../a-3-common/c-5-authPagesTitles/PageTitles'
import {EmailInput} from '../../../../../a-3-common/c-6-emailInput/EmailInput'
import {AuthFooter} from '../../../../../a-3-common/c-8-authFooter/AuthFooter'

export type ForgotFormDataType = {
    email: string
}

export const ForgotPage: React.FC = () => {
    const error = useSelector<AppRootStateType, string>(state => state.forgot.error)
    const isEmailSent = useSelector<AppRootStateType, boolean>(state => state.forgot.successEmailSent)
    const loading = useSelector<AppRootStateType, boolean>(state => state.forgot.loading)
    const dispatch = useDispatch()
    const [timeForNextTry, setTimeForNextTry] = useState<number>(60)

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
        <Row>
            <StyledCard>
                <PageTitles title={'Forgot your password?'}/>
                <Form layout={'vertical'} onFinish={onSubmit}>
                    <EmailInput marginBottom={'30px'}/>
                    <StyledParagraph style={{marginBottom: '90px'}}>
                        Enter your email address and we will send you further
                        instructions
                    </StyledParagraph>
                    <Form.Item>
                        <Row>
                            <Col offset={3} span={18}>
                                <StyledButton block submit={'true'} size={'large'} htmlType="submit">
                                    Send Instructions
                                </StyledButton>
                            </Col>
                        </Row>
                    </Form.Item>
                    <AuthFooter paragraph={'Did you remember your password?'} linkText={'Try logging in'}
                                link={PATH.LOGIN}/>
                </Form>
            </StyledCard>
        </Row>
    )
}
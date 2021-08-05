import React, {useEffect} from 'react'
import {Col, Form, message, Row} from 'antd'
import {NavLink, Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
import {Preloader} from '../../../../a-3-common/c-1-preloader/Preloader'
import 'antd/dist/antd.css'
import {registerTC} from '../r-2-bll/registerThunks'
import {PATH} from '../../../../a-1-main/m-1-ui/main/routes/Pages'
import {FormDataType, StyledButton, StyledCard} from '../../a-1-login/l-1-ui/u-1-login/LoginPage'
import {PageTitles} from '../../../../a-3-common/c-5-authPagesTitles/PageTitles'
import {EmailInput} from '../../../../a-3-common/c-6-emailInput/EmailInput'
import {PasswordInput} from '../../../../a-3-common/c-7-passwordInput/PasswordInput'
import {ConfirmPassword} from './Confirm Password/ConfirmPassword'

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
        <Row>
                <StyledCard>
                    <PageTitles title={'Sign Up'}/>
                    <Form layout={'vertical'} onFinish={onSubmit}>
                        <div style={{marginBottom: '84px'}}>
                        <EmailInput/>
                        <PasswordInput/>
                        <ConfirmPassword/>
                        </div>
                        <Form.Item>
                            <Row>
                                <Col span={8}>
                            <StyledButton block size={'large'} htmlType="submit">
                                <NavLink to={PATH.LOGIN}>Cancel</NavLink>
                            </StyledButton>
                                </Col>
                                <Col offset={2} span={14}>
                            <StyledButton block submit={'true'} size={'large'} htmlType="submit">
                                Registration
                            </StyledButton>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </StyledCard>
            </Row>
    )
}
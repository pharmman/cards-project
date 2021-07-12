import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
import {Button, Card, CardProps, Checkbox, CheckboxProps, Col, Form, message, Row, Typography} from 'antd'
import {NavLink, NavLinkProps, Redirect} from 'react-router-dom'
import {loginTC} from '../../l-2-bll/loginThunks'
import {Preloader} from '../../../../../a-3-common/c-1-preloader/Preloader'
import {PATH} from '../../../../../a-1-main/m-1-ui/main/routes/Pages'
import styled from 'styled-components'
import {ButtonProps} from 'antd/lib/button/button'
import {PageTitles} from '../../../../../a-3-common/c-5-authPagesTitles/PageTitles'
import {ParagraphProps} from 'antd/es/typography/Paragraph'
import {EmailInput} from '../../../../../a-3-common/c-6-emailInput/EmailInput'
import {PasswordInput} from '../../../../../a-3-common/c-7-passwordInput/PasswordInput'

export interface FormDataType {
    email: string
    password: string
}

export interface LoginFormDataType extends FormDataType {
    rememberMe: boolean;
}

type StyledNavLinkPropsType = NavLinkProps & {
    fontSize: number
    fontWeight: number
}

const StyledCheckbox: React.FC<CheckboxProps> = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    filter: brightness(100%);
    background-color: var(--button-color);
    border-color: var(--button-color);
  }

  .ant-checkbox-checked::after {
    border: 1px solid var(--button-color);
    filter: brightness(130%);
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: var(--button-color);
    filter: brightness(130%);
  }
`

export const StyledNavLink: React.FC<StyledNavLinkPropsType> = styled(NavLink)<StyledNavLinkPropsType>`
  color: var(--link-main-color);
  font-size: ${props => `${props.fontSize}px`};
  font-weight: ${props => props.fontWeight};
`

const StyledButton: React.FC<ButtonProps> = styled(Button)`
  background: var(--button-color);
  border-color: var(--button-color);
  border-radius: 18px;
  filter: brightness(100%);

  :hover {
    background: var(--button-color);
    border-color: var(--hover-border-button-color);
    filter: brightness(130%);
  }
`

const StyledCard: React.FC<CardProps> = styled(Card)`
  border-radius: 8px;
`

const StyledParagraph: React.FC<ParagraphProps> = styled(Typography.Paragraph)`
  color: rgba(45, 46, 70, .5);
`

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
        <Row>
            <Col span={6}>
                <StyledCard className={'formCardMinWidth'}>
                    <PageTitles title={'Sign In'}/>
                    <Form layout={'vertical'} onFinish={onSubmit} initialValues={{rememberMe: true}}>
                        <EmailInput/>
                        <PasswordInput/>
                        <Form.Item name={'rememberMe'} valuePropName={'checked'}>
                            <StyledCheckbox>Remember me</StyledCheckbox>
                        </Form.Item>
                        <Form.Item style={{marginBottom: '80px'}}>
                            <Col offset={16}>
                                <StyledNavLink fontWeight={400} fontSize={14} to={'/forgot'}>
                                    Forgot password
                                </StyledNavLink>
                            </Col>
                        </Form.Item>
                        <Form.Item>
                            <Row>
                                <Col offset={3} span={18}>
                                    <StyledButton block size={'large'} type="primary" htmlType="submit">
                                        Log In
                                    </StyledButton>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                    <Row justify={'center'}>
                        <Col>
                            <StyledParagraph>Don’t have an account?</StyledParagraph>
                        </Col>
                    </Row>
                    <Row justify={'center'}>
                        <Col>
                            <StyledNavLink fontWeight={600} fontSize={16} to={PATH.REGISTER}>Sign Up</StyledNavLink>
                        </Col>
                    </Row>
                </StyledCard>
            </Col>
        </Row>
    )
}
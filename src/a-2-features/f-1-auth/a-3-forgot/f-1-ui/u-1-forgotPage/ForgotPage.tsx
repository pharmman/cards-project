// import React, {useEffect, useState} from 'react'
// import {Button, Card, Form, Input, message, Row} from 'antd'
// import {useDispatch, useSelector} from 'react-redux'
// import {sendEmailTC} from '../../f-2-bll/forgotThunks'
// import Title from 'antd/es/typography/Title'
// import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
// import {Preloader} from '../../../../../a-3-common/c-1-preloader/Preloader'
// import {forgotActions} from '../../f-2-bll/forgotActions'
// import {MessageSentFeedback} from './MessageSentFeedback'
// import Paragraph from 'antd/es/typography/Paragraph'
// import {PATH} from '../../../../../a-1-main/m-1-ui/main/routes/Pages'
// import {NavLink} from 'react-router-dom'
//
// export type ForgotFormDataType = {
//     email: string
// }
//
// export const ForgotPage: React.FC = () => {
//     const error = useSelector<AppRootStateType, string>(state => state.forgot.error)
//     const isEmailSent = useSelector<AppRootStateType, boolean>(state => state.forgot.successEmailSent)
//     const loading = useSelector<AppRootStateType, boolean>(state => state.forgot.loading)
//     const dispatch = useDispatch()
//     const [timeForNextTry, setTimeForNextTry] = useState<number>(60)
//
//     //form submit action
//     const onSubmit = (data: ForgotFormDataType) => {
//         dispatch(sendEmailTC(data.email))
//     }
//
//     //actions after dispatch thunk
//     useEffect(() => {
//         error && message.error(error, 5)
//         if (isEmailSent) {
//             const id = setTimeout(() => {
//                 setTimeForNextTry(timeForNextTry - 1)
//             }, 1000)
//             if (timeForNextTry === 0) {
//                 setTimeForNextTry(60)
//                 clearTimeout(id)
//                 dispatch(forgotActions.setSuccessEmailSent(false))
//             }
//             return () => {
//                 clearTimeout(id)
//             }
//         }
//     }, [dispatch, error, isEmailSent, timeForNextTry])
//
//     if (loading) {
//         return <Preloader/>
//     }
//
//     if (isEmailSent) {
//         return (
//             <MessageSentFeedback timeForNextTry={timeForNextTry}/>
//         )
//     }
//
//     return (
//         <div className="site-card-border-less-wrapper">
//             <Row justify={'center'} align={'top'}>
//                 <Title level={1}>Password assistance</Title>
//             </Row>
//             <Row justify={'center'}>
//                 <Card>
//                     <Paragraph className={'formParagraph'}>
//                         Enter your email. We will sent to you
//                         email with a link to reset your password.
//                     </Paragraph>
//                     <Form layout={'vertical'} onFinish={onSubmit}>
//                         <Form.Item
//                             label={'Email'}
//                             name="email"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: 'Please input your E-mail!'
//                                 },
//                                 {
//                                     type: 'email',
//                                     message: 'Invalid email address'
//                                 }
//                             ]}>
//                             <Input size={'large'}/>
//                         </Form.Item>
//                         <Form.Item>
//                             <Button block className={'form-button'} size={'large'} type="primary"
//                                     htmlType="submit">
//                                 Send email
//                             </Button>
//                             <NavLink to={PATH.LOGIN}>Sign-In</NavLink>
//                         </Form.Item>
//                     </Form>
//                 </Card>
//             </Row>
//         </div>
//     )
// }
export const a = () => {}
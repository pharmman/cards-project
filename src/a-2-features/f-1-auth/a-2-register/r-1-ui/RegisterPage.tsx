// import React, {useEffect} from 'react'
// import {NavLink, Redirect} from 'react-router-dom'
// import {useDispatch, useSelector} from 'react-redux'
// import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
// import {Preloader} from '../../../../a-3-common/c-1-preloader/Preloader'
// import 'antd/dist/antd.css'
// import {registerTC} from '../r-2-bll/registerThunks'
// import {PATH} from '../../../../a-1-main/m-1-ui/main/routes/Pages'
// import {FormDataType} from '../../a-1-login/l-1-ui/u-1-login/LoginPage'
// import {Card, Paper, Typography} from '@material-ui/core'
//
// export const RegisterPage: React.FC = () => {
//     const dispatch = useDispatch()
//     const error = useSelector<AppRootStateType, string>(state => state.register.error)
//     const loading = useSelector<AppRootStateType, boolean>(state => state.register.loading)
//     const success = useSelector<AppRootStateType, boolean>(state => state.register.success)
//
//     //form submit
//     const onSubmit = (data: FormDataType) => {
//         dispatch(registerTC(data))
//     }
//
//     //pop-up if error
//     useEffect(() => {
//         if (error) {
//             return message.error(error, 5)
//         }
//     }, [error])
//
//     if (loading) {
//         return <Preloader/>
//     }
//     if (success) {
//         return <Redirect to={PATH.LOGIN}/>
//     }
//     return (
//         <div className={'appWrapper'}>
//             <Typography variant={'h4'}>Registration</Typography>
//                 <Paper className={'formCardMinWidth'}>
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
//                             ]}
//                         >
//                             <Input size={'large'}/>
//                         </Form.Item>
//                         <Form.Item
//                             label={'Password'}
//                             name="password"
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: 'Please input your password!'
//                                 },
//                                 {
//                                     min: 8,
//                                     message: 'Password must be 8 characters or more'
//                                 }
//                             ]}>
//                             <Input.Password autoComplete={'on'} size={'large'}/>
//                         </Form.Item>
//                         <Form.Item
//                             name="confirm"
//                             label="Confirm Password"
//                             dependencies={['password']}
//                             hasFeedback
//                             rules={[
//                                 {
//                                     required: true,
//                                     message: 'Please confirm your password!'
//                                 },
//                                 ({getFieldValue}) => ({
//                                     validator(_, value) {
//                                         if (!value || getFieldValue('password') === value) {
//                                             return Promise.resolve()
//                                         }
//                                         return Promise.reject(new Error('The two passwords that you entered do not match!'))
//                                     }
//                                 })
//                             ]}
//                         >
//                             <Input.Password autoComplete={'on'} size={'large'}/>
//                         </Form.Item>
//                         <Form.Item>
//                             <Button block className="form-button" size={'large'} type="primary"
//                                     htmlType="submit">
//                                 Registration
//                             </Button>
//                             Already have an account? <NavLink to={PATH.LOGIN}>Sign-In</NavLink>
//                         </Form.Item>
//                     </Form>
//                 </Paper>
//             </Row>
//         </div>
//     )
// }

export {}
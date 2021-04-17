import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../a-1-main/m-2-bll/store";
import {Controller, useForm} from "react-hook-form";
import {Button, Card, Checkbox, Col, Form, Input, message as errorMessage, Row} from "antd";
import {NavLink} from "react-router-dom";
import {loginTC} from "../l-2-bll/loginThunk";
import { ErrorMessage } from "@hookform/error-message";

export const LoginPage: React.FC = () => {

    interface IFormInput {
        email: string;
        password: string;
        rememberMe: boolean;
    }

    const layout = {
        labelCol: {span: 24},
        // wrapperCol: {span: 10},
    };

    const middleLayout = {
        wrapperCol:  {span: 12},
    };


    const dispatch = useDispatch()

    const error = useSelector<AppStoreType, string>(state => state.login.error)
    const {register, handleSubmit, formState: {errors}, control} = useForm()

    const onSubmit = (data: IFormInput) => {
        console.log(data)
        dispatch(loginTC({...data}))
        errorMessage.error(error)
    }

    return (
        <Row justify={'center'} align={'middle'} style={{minHeight: '100vh'}}>
            <Card>
                <Col span={24}>
                    <Form {...layout} onFinish={handleSubmit(onSubmit)}>
                        <Form.Item
                            label={'Email'}
                            >
                            <Input  {...register('email',
                                {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}/>
                            {/*<ErrorMessage errors={errors} name="email" />*/}
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({ message }) => errorMessage.error(message)}
                            />
                        </Form.Item>
                        <Form.Item
                            label={'Password'}>
                            <Input.Password {...register('password', {required: true,})}/>
                        </Form.Item>

                            <Form.Item {...middleLayout}>
                                <Controller
                                    name="rememberMe"
                                    control={control}
                                    render={({field}) => <Checkbox {...field}
                                    >Remember me</Checkbox>}
                                />
                            </Form.Item>
                        <Form.Item>
                            <NavLink to={'/forgot'}>
                                Forgot password
                            </NavLink>
                        </Form.Item>
                        <Form.Item>
                            <Button style={{width: '100%'}} type="primary" htmlType="submit">
                                Log In
                            </Button>
                        </Form.Item>
                            <Form.Item>
                            Or <NavLink to={'/register'}>register now!</NavLink>
                            </Form.Item>
                        <div>{console.log(errors.email?.message)}</div>

                        <div>{errors.password?.message}</div>
                        <div>
                            {error}
                        </div>
                    </Form>

                </Col>
            </Card>
        </Row>
    )
}
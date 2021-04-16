import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../../../a-1-main/m-2-bll/store";
import {Controller, useForm} from "react-hook-form";
import {Button, Card, Checkbox, Col, Form, Input, message, Row} from "antd";
import {NavLink} from "react-router-dom";
import {loginTC} from "../l-2-bll/loginThunk";

export const LoginPage: React.FC = () => {

    interface IFormInput {
        email: string;
        password: string;
        rememberMe: boolean;
    }

    const layout = {
        labelCol: {span: 8},
        wrapperCol: {span: 16},
    };

    const middleLayout = {
        wrapperCol: {offset: 5, span: 16},
    };


    const dispatch = useDispatch()

    const error = useSelector<AppStoreType, string>(state => state.login.error)
    const {register, handleSubmit, formState: {errors}, control} = useForm()

    const onSubmit = (data: IFormInput) => {
        console.log(data)
        // errorMessage()
        dispatch(loginTC({...data}))
    }

    // const errorMessage = () => {
    //     message.error(errors.email?.message);
    //     errors.password && message.error('Password is required')
    //     error && message.error()
    // };


    return (
        <Row justify={'center'} align={'middle'} style={{minHeight: '100vh'}}>
            <Card>
                <Col>
                    <Form {...layout} onFinish={handleSubmit(onSubmit)}>
                        <Form.Item
                            label={'Email'}>
                            <Input  {...register('email',
                                {
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}/>
                        </Form.Item>
                        <Form.Item
                            label={'Password'}>
                            <Input.Password {...register('password', {required: true,})}/>
                        </Form.Item>

                            <Form.Item {...layout}>
                                <Controller
                                    name="rememberMe"
                                    control={control}
                                    render={({field}) => <Checkbox {...field}
                                    >Remember me</Checkbox>}
                                />
                            </Form.Item>
                        <Form.Item {...middleLayout}>
                            <NavLink to={'/forgot'}>
                                Forgot password
                            </NavLink>
                        </Form.Item>
                        <Form.Item {...middleLayout}>
                            <Button style={{width: '100%'}} type="primary" htmlType="submit">
                                Log In
                            </Button>
                        </Form.Item>
                            <Form.Item {...middleLayout}>
                            Or <NavLink to={'/register'}>register now!</NavLink>
                            </Form.Item>
                        <div>
                            {errors.email?.message}
                        </div>
                        <div>{errors.password && 'БЯДАААА'}</div>
                        <div>
                            {error}
                        </div>
                    </Form>

                </Col>
            </Card>
        </Row>
    )
}
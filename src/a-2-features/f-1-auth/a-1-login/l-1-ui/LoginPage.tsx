import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../l-2-bll/loginThunk";
import {AppStoreType} from "../../../../a-1-main/m-2-bll/store";
import {useForm} from "react-hook-form";
import {Input, version} from "antd";

export const LoginPage: React.FC = () => {

    interface IFormInput {
        email: string;
        password: string;
        rememberMe: boolean;
    }

    const dispatch = useDispatch()

    const error = useSelector<AppStoreType, string>(state => state.login.error)
    const {register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = (data: IFormInput) => {
        dispatch(loginTC({...data}))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        {...register('email',
                            {
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })} type="text" placeholder={'login'}/>
                </div>
                <div>
                    <Input.Password type="password" placeholder={'password'} {...register('password',
                        {
                            required: true,
                        })}/>
                </div>
                <div>
                    <input type="checkbox" {...register('rememberMe')}/>
                </div>
                <button>LOGIN</button>
                <div>
                    {errors.email?.message}
                </div>
                <div>{errors.password && 'БЯДАААА'}</div>
                <div>
                    {error}
                </div>
            </form>
        </div>
    )
}
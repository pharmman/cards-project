import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
import {NavLink, Redirect} from 'react-router-dom'
import {loginTC} from '../../l-2-bll/loginThunks'
import {Preloader} from '../../../../../a-3-common/c-1-preloader/Preloader'
import {PATH} from '../../../../../a-1-main/m-1-ui/main/routes/Pages'
import {Button, Checkbox, FormControl, FormHelperText, Input, InputLabel, Paper, Typography} from '@material-ui/core'
import {useForm} from 'react-hook-form'

export interface FormDataType {
    email: string
    password: string
}

export interface LoginFormDataType extends FormDataType {
    rememberMe: boolean;
}

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
    // useEffect(() => {
    //     if (error) {
    //         return message.error(error, 5)
    //     }
    // }, [error])
    //TODO app error or local
    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormDataType>()

    if (loading) {
        return <Preloader/>
    }

    if (loginSuccess && !error) {
        return <Redirect to={PATH.PROFILE}/>
    }


    return (
        <div className={'appWrapper'}>
            {/*<Grid container></Grid>*/}
            <Paper className={'formCardMinWidth'}>
                <div>
                    <Typography variant={'h3'}>Card Project</Typography>
                    <Typography variant={'h4'}>Sign In</Typography>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl error={!!errors.email} required={true}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input type={'email'} id={'email'} {...register('email', {
                            required: true,
                            pattern: /^\S+@\S+$/i
                        })}/>
                        {errors.email && <FormHelperText id={'email'}>
                            {errors.email?.type === 'required' ?
                                'Email is required'
                                :
                                'Invalid email address'}</FormHelperText>}
                    </FormControl>
                    <FormControl error={!!errors.password} required={true}>
                        <InputLabel htmlFor={'password'}>Password</InputLabel>
                        <Input type={'password'} {...register('password', {required: true})} autoComplete={'on'}/>
                        {!!errors.password && <FormHelperText id={'password'}>Password is required</FormHelperText>}
                    </FormControl>
                    <Checkbox value={'Remember me'}/>
                    <div>
                        <NavLink to={'/forgot'}>
                            Forgot password
                        </NavLink>
                    </div>
                    <Button type={'submit'}>
                        Log In
                    </Button>
                    Or <NavLink to={PATH.REGISTER}>register now!</NavLink>
                </form>
            </Paper>
        </div>
    )
}
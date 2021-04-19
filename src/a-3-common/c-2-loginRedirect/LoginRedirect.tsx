import React, {DetailedHTMLProps, HTMLAttributes, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../a-1-main/m-2-bll/store'
import {ProfileType} from '../../a-2-features/f-1-auth/a-1-login/l-3-dal/LoginAPI'
import {Redirect} from 'react-router-dom'
import {PATH} from '../../a-1-main/m-1-ui/main/routes/Pages'
import {authMeTC} from '../../a-2-features/f-1-auth/a-1-login/l-2-bll/loginThunks'
import {Preloader} from '../c-1-preloader/Preloader'

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type LoginRedirectPagePropsType = DivPropsType & {}

export const LoginRedirect: React.FC<LoginRedirectPagePropsType> = ({children, ...restProps}) => {
    const [first, setFirst] = useState<boolean>(true)
    const [redirect, setRedirect] = useState<boolean>(false)
    const dispatch = useDispatch()
    const profile = useSelector<AppRootStateType, ProfileType | null>(state => state.profile.profile)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.app.isFetching)

    useEffect(() => {
        if (first) {
            dispatch(authMeTC())
            setFirst(false)
        } else {
            if (!profile) {
                setRedirect(true)
            }
        }
    }, [first, dispatch, redirect, profile])

    if (redirect) {
        return <Redirect to={PATH.LOGIN}/>
    }
    if (isFetching) {
        return <Preloader/>
    }

    return (
        <div {...restProps}>
            {children}
        </div>
    )
}
import React, {DetailedHTMLProps, HTMLAttributes, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../a-1-main/m-2-bll/store'
import {Redirect} from 'react-router-dom'
import {PATH} from '../../a-1-main/m-1-ui/main/routes/Pages'
import {Preloader} from '../c-1-preloader/Preloader'
import {authMeTC} from '../../a-2-features/f-1-auth/a-4-profile/p-2-bll/profileThunks'

type DivPropsType = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type LoginRedirectPagePropsType = DivPropsType & {}

export const LoginRedirect: React.FC<LoginRedirectPagePropsType> = ({children, ...restProps}) => {

    const dispatch = useDispatch()
    const [first, setFirst] = useState<boolean>(true)
    const [redirect, setRedirect] = useState<boolean>(false)
    const {profile, error, success} = useSelector((state: AppRootStateType) => state.profile)
    const loginLoading = useSelector<AppRootStateType, boolean>(state => state.login.loading)
    const logoutSuccess = useSelector<AppRootStateType, boolean>(state => state.login.logoutSuccess)
    const [isFetching, setIsFetching] = useState<boolean>( profile === null)


    useEffect(() => {
        if (first) {
            dispatch(authMeTC())
            setFirst(false)
        } else {
            if (!profile && (!success || logoutSuccess) && !error) {
                setRedirect(true)
                setIsFetching(false)
            } else {
                setIsFetching(false)
                setRedirect(false)
            }
        }
    }, [first, dispatch, redirect, profile, success, error, logoutSuccess])

    if (redirect) {
        return <Redirect to={PATH.LOGIN}/>
    }
    if (isFetching || loginLoading) {
        return <Preloader/>
    }

    return (
        <div {...restProps}>
            {children}
        </div>
    )
}
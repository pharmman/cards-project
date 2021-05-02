import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {logoutTC} from '../../l-2-bll/loginThunks'
import {AppRootStateType} from '../../../../../a-1-main/m-2-bll/store'
import {Preloader} from '../../../../../a-3-common/c-1-preloader/Preloader'

type LogoutComponentPropsType = {}

export const LogoutComponent: React.FC<LogoutComponentPropsType> = ({children}) => {
    const dispatch = useDispatch()
    const loading = useSelector<AppRootStateType, boolean>(state => state.login.loading)

    const onClickHandler = () => {
        dispatch(logoutTC())
    }

    if (loading) {
        return <Preloader/>
    }

    return (
        <div onClick={onClickHandler}>{children}</div>
    )
}
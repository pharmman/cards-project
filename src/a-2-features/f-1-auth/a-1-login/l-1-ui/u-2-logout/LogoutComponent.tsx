import React from 'react'
import {useDispatch} from 'react-redux'
import {logoutTC} from '../../l-2-bll/loginThunks'

type LogoutComponentPropsType = {}

export const LogoutComponent: React.FC<LogoutComponentPropsType> = ({children}) => {
    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(logoutTC())
    }

    return (
        <div onClick={onClickHandler}>Logout</div>
    )
}
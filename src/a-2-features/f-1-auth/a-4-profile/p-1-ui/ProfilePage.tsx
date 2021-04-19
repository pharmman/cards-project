import {useDispatch, useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
import {ProfileType} from '../../a-1-login/l-3-dal/LoginAPI'

export const ProfilePage = () => {
    const dispatch = useDispatch()
    const profile = useSelector<AppRootStateType, ProfileType | null>(state => state.profile.profile)


    return (
        <div>
            {profile && Object.entries(profile).map((e, index) => (
                <div key={index}>
                    <b>{e[0]}</b>:<span>{e[1]}</span>
                </div>
            ))}
            )
        </div>
    )
}
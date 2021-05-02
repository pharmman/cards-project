import {useSelector} from 'react-redux'
import {AppRootStateType} from '../../../../a-1-main/m-2-bll/store'
import {ProfileType} from '../p-2-bll/profileActions'
import {LogoutComponent} from '../../a-1-login/l-1-ui/u-2-logout/LogoutComponent'

export const ProfilePage = () => {
    const profile = useSelector<AppRootStateType, ProfileType | null>(state => state.profile.profile)


    return (
        <div>
            {profile && Object.entries(profile).map((e, index) => (
                <div key={index}>
                    <b>{e[0]}</b>:<span>{e[1]}</span>
                </div>
            ))}
            )
            <LogoutComponent/>
        </div>
    )
}
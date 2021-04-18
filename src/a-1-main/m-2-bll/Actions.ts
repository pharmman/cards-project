import { ThunkAction } from 'redux-thunk'
import {AppRootStateType} from "./store";
import {LoginActions} from "../../a-2-features/f-1-auth/a-1-login/l-2-bll/loginActions";
import {AppActionsType} from "./appActions";
import {RegisterActionsType} from '../../a-2-features/f-1-auth/a-2-register/r-2-bll/registerActions'
import {ProfileActionsType} from '../../a-2-features/f-1-auth/a-4-profile/p-2-bll/profileActions'
import {ForgotActionsType} from '../../a-2-features/f-1-auth/a-3-forgot/f-2-bll/forgotActions'

type CommonActionsTypes = LoginActions | AppActionsType | RegisterActionsType | ProfileActionsType | ForgotActionsType
export type ThunkType = ThunkAction<void, AppRootStateType, unknown, CommonActionsTypes>

import { ThunkAction } from 'redux-thunk'
import {AppRootStateType} from "./store";
import {LoginActionsType} from "../../a-2-features/f-1-auth/a-1-login/l-2-bll/loginActionsType";

type CommonActionsTypes = LoginActionsType
export type ThunkType = ThunkAction<void, AppRootStateType, unknown, CommonActionsTypes>

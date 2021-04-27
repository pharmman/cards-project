import {ThunkAction} from 'redux-thunk'
import {AppRootStateType} from './store'
import {AnyAction} from 'redux'

export type ThunkType<T extends AnyAction> = ThunkAction<Promise<any> | void, AppRootStateType, unknown, T>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsType<T extends { [key: string]: (...arg: any[]) => any }> = ReturnType<PropertiesType<T>>
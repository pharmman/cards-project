import thunk, {ThunkDispatch} from 'redux-thunk'
import {AppRootStateType} from '../m-2-bll/store'
import {AnyAction} from 'redux'
import configureMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter'
import {instance} from '../m-3-dal/instance'


type DispatchExts = ThunkDispatch<AppRootStateType, void, AnyAction>;

const middlewares = [thunk]
const mockStore = configureMockStore<AppRootStateType, DispatchExts>(middlewares)
export const mock = new MockAdapter(instance)
export const store = mockStore()

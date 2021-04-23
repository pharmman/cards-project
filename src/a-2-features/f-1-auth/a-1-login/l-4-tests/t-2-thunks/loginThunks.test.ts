import {loginTC} from '../../l-2-bll/loginThunks'
import {LoginAPI} from '../../l-3-dal/LoginAPI'
import {setIsFetching} from '../../../../../a-1-main/m-2-bll/appActions'
jest.mock('../../l-3-dal/LoginAPI')
const loginAPIMock = LoginAPI

const testProfile = {
    _id: '1',
    email: 'test@gmail.com',
    created: new Date(Date.now()),
    isAdmin: false,
    name: 'Test',
    publicCardPacksCount: 10,
    rememberMe: true,
    updated: new Date(Date.now()),
    verified: false
}

test('loginThunk', async () => {
    // @ts-ignore
    loginAPIMock.login.mockReturnValueOnce(Promise.resolve(testProfile))
    const thunk = loginTC({email: 'test@mail.ru', password: '12345678', rememberMe: false})
    const dispatchMock = jest.fn()

    await thunk(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(5)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, setIsFetching(true))
})
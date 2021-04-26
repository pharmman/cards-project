import {loginTC} from '../../l-2-bll/loginThunks'
import {LoginAPI} from '../../l-3-dal/LoginAPI'
import {setIsFetching} from '../../../../../a-1-main/m-2-bll/appActions'
import {loginSetLoading} from '../../l-2-bll/loginActions'

jest.mock('../../l-3-dal/LoginAPI')
const loginAPIMock = LoginAPI as jest.Mocked<typeof LoginAPI>
const testProfile = {
    name: 'njdkoajdsajdsjdnjklandsjknsda',
    dsa: 'dnsahindsaindsajkndsakndsakj'
}

const result = {
    data: {testProfile},
    resultCode: 0,
    messages: []
}
test('loginThunk', () => {
    // @ts-ignore
    loginAPIMock.login.mockReturnValue(Promise.resolve(result))
    const thunk = loginTC({email: 'test@mail.ru', password: '12345678', rememberMe: false})
    const dispatchMock = jest.fn()

    // @ts-ignore
    return thunk(dispatchMock).then(() => {
        expect(dispatchMock).toBeCalledTimes(5)
        expect(dispatchMock).toHaveBeenNthCalledWith(1, loginSetLoading(true))
    })
})




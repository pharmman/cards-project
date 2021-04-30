import {instance} from '../../../../a-1-main/m-3-dal/instance'

export type InfoResponseType = {
    info?:string
    error?:string
}

export type NewPasswordRequestDataType = {
    password: string
    resetPasswordToken: string
}

export const messageForRecoveryPassword =
    `<div>
       To recover your password, follow the link:
        <br/> 
          <a href='http://localhost:3000/set-new-password/$token$'>
          Recover Password
           </a>
     </div>`

export const forgotRequestBody = (email:string) => {
    return {
        email,
        from: "Aleksandr Rasskazov<pharm.sale777@gmail.com>",
        message: messageForRecoveryPassword
    }

}

export const ForgotAPI = {
    forgot(email:string){
        return instance.post<InfoResponseType>('auth/forgot', {...forgotRequestBody(email)})
    },
    setNewPassword(data:NewPasswordRequestDataType){
        return instance.post<InfoResponseType>('auth/set-new-password', {...data})
    }
}
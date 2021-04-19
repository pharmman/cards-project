import {instance} from '../../../../a-1-main/m-3-dal/instance'

const messageForRecoveryPassword =
    `<div>
       To recover your password, follow the link:
        <br/> 
          <a href='http://localhost:3000/set-new-password/$token$'>
          Recover Password
           </a>
     </div>`

export const ForgotAPI = {
    forgot(email:string){
        return instance.post('/auth/forgot', {
            email,
            from: "Aleksandr Rasskazov<pharm.sale777@gmail.com>",
            message: messageForRecoveryPassword
        })
    },
    setNewPassword(password: string, resetPasswordToken: string){
        return instance.post<{info:string, error?:string}>('/auth/set-new-password', {password, resetPasswordToken})
    }
}
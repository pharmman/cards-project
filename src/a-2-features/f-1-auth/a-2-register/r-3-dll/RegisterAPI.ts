import {instance} from "../../../../a-1-main/m-3-dal/instance";

//TODO проверить возвращаемый тип
export const RegisterAPI = {
    register(email:string, password:string) {
        return instance.post<{error?: string}>('/auth/register', {email, password})
    }
}


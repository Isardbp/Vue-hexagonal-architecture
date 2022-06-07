import { UserLogin, UserRegister } from '@/domain/models/User'
import { userLoginDTO } from '../dto/userLoginDTO'
import { userRegisterDTO } from '../dto/userRegisterDTO'
import { http } from '../plugins/http/http'

export const userRepository = {
    login: async (user: UserLogin) => {
        const returnUser: userLoginDTO = await http.post<userLoginDTO>('http://localhost:5555/api/auth/login', user)

        return returnUser
    },
    register: async (user: UserRegister) => {
        const returnUser: userRegisterDTO = await http.post<userRegisterDTO>('http://localhost:5555/register', user)

        return returnUser
    }
}

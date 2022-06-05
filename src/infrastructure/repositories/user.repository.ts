import { UserLogin } from '@/domain/models/User'
import { userLoginDTO } from '../dto/userLoginDTO'
import { http } from '../plugins/http/http'

export const userRepository = {
    login: async (user: UserLogin) => {
        const returnUser: userLoginDTO = await http.post<userLoginDTO>('http://localhost:3001/products', user)


        // we can extract this transform to a function inside this file to be reused by different methods
        return returnUser
    }
}

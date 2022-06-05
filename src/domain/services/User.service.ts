import { UserLogin } from '../models/User'
import { userRepository } from '@/infrastructure/repositories/user.repository'
import { userLoginDTO } from '@/infrastructure/dto/userLoginDTO'

const saveToken = (token: string) => localStorage.setItem('token', token)
const userIsLogged = () => localStorage.getItem('token')

export const userService = {
    login: async (user: UserLogin) => {
        const returnUser: userLoginDTO = await userRepository.login(user)
        saveToken(returnUser.token)
    },
    userIsLogged
}
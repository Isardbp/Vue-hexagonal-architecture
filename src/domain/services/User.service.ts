import { UserLogin, UserRegister } from '../models/User'
import { userRepository } from '@/infrastructure/repositories/user.repository'
import { userLoginDTO } from '@/infrastructure/dto/userLoginDTO'
import { userRegisterDTO } from '@/infrastructure/dto/userRegisterDTO'
import router from '@/infrastructure/views/router'

const saveToken = (token: string) => localStorage.setItem('token', token)
const userIsLogged = () => localStorage.getItem('token')
const logout = () => {
    localStorage.removeItem('token')
    router.push({ name: 'auth' })
}

export const userService = {
    login: async (user: UserLogin) => {
        const returnUser: userLoginDTO = await userRepository.login(user)
        saveToken(returnUser.token)
        router.push({ name: 'home' })
    },
    register: async (user: UserRegister) => {
        const returnUser: userRegisterDTO = await userRepository.register(user)
        saveToken(returnUser.token)
        router.push({ name: 'home' })
    },
    logout,
    userIsLogged
}
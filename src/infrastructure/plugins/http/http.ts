import axios from 'axios'
import { showError } from '@/infrastructure/plugins/izitoast/izitoast'

axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL

axios.interceptors.response.use(
    response => response,
    error => {
        showError(error)
    }
)

const headers = {
    'Content-Type': 'application/json'
}

const get = async <T>(url: string) => {
    const response = await axios({
        url,
        method: 'GET',
        headers
    })
    return response.data as T
}

const post = async <T>(url: string, body: any) => {
    const response = await axios({
        url,
        method: 'POST',
        headers,
        data: body
    })
    return response.data as T
}

const put = async <T>(url: string, body: any) => {
    const response = await axios({
        url,
        method: 'PUT',
        headers,
        data: body
    })
    return response.data as T
}

const _delete = async <T>(url: string) => {
    const response = await axios({
        url,
        method: 'DELETE',
        headers
    })
    return response.data as T
}

export const http = {
    get,
    post,
    put,
    delete: _delete
}
import { ApiService } from "../api.service"

export const loginApi = (data) => {
    return ApiService.post('/login', data)
}

export const RegisterUser = (data) => {
    return ApiService.post('/register', data)
}
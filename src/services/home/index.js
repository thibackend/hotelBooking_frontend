import { ApiService } from "../api.service"

export const getRooms = () => {
    return ApiService.get('/room-and-images')
}
export const getRoomDetail = () => {
    return ApiService.get('/room-and-images')
}

export const roomdetail = () => {
    return ApiService.get('/room-detail')
}
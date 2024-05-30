import { get } from './axios'
// 退出登录
export const logout = () => get(`/openapi/v1/user/logout`)

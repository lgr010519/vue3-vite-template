// 接口地址
export const baseUrl = import.meta.env.VITE_API_BASE_URL
export const linkUrl = import.meta.env.VITE_API_PREFIX_URL
export const clientId = import.meta.env.VITE_PROJECT_PREFIX
export const ssoLoginUrl = baseUrl + `/openapi/sso/login?clientId=${clientId}`
export const spaceId = import.meta.env.VITE_SPACE_ID
// 本地存储的 key
export const localStorageKey = {
  token: import.meta.env.VITE_PROJECT_PREFIX + '_token',
  userInfo: import.meta.env.VITE_PROJECT_PREFIX + '_userInfo',
  roleInfo: import.meta.env.VITE_PROJECT_PREFIX + '_roleInfo',
}

/**
 * 获取 token
 * @returns
 */
export const getToken = () => {
  return localStorage.getItem(localStorageKey.token)
}

/**
 * 设置 token
 * @param {*} value
 */
export const setToken = (value) => {
  localStorage.setItem(localStorageKey.token, value)
}

/**
 * 清除 token
 */
export const removeToken = () => {
  localStorage.removeItem(localStorageKey.token)
}

/**
 * 获取 userInfo
 * @returns
 */
export const getUserInfo = () => {
  return localStorage.getItem(localStorageKey.userInfo)
}

/**
 * 设置 userInfo
 * @param {*} value
 */
export const setUserInfo = (value) => {
  localStorage.setItem(localStorageKey.userInfo, value)
}

/**
 * 清除 userInfo
 */
export const removeUserInfo = () => {
  localStorage.removeItem(localStorageKey.userInfo)
}

/**
 * 获取 roleInfo
 * @returns
 */
export const getRoleInfo = () => {
  return localStorage.getItem(localStorageKey.roleInfo)
}

/**
 * 设置 roleInfo
 * @param {*} value
 */
export const setRoleInfo = (value) => {
  localStorage.setItem(localStorageKey.roleInfo, value)
}

/**
 * 清除 roleInfo
 */
export const removeRoleInfo = () => {
  localStorage.removeItem(localStorageKey.roleInfo)
}

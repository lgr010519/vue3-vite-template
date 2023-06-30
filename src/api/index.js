import { baseUrl, get, post, put } from './axios'

export const uploadUrl = baseUrl + 'api/v1/uploads'

/**
 * 登录
 * @param {*} data
 * @returns
 */
export const login = (data) => post('/api/v1/auth/login', data)
/**
 * 导出Excel文件
 * - 资产账单: assetBill；
 * - 财务账单: financialBill；
 * - 实物卡单: physicalCard；
 * - 实物巡检: physicalInspection；
 * - 资产出库单: outbound；
 * - 资产入库单: inbound；
 * - 资产实物卡片: sheetPhysicalCard
 * @param {*} target
 * @param {*} data
 * @returns
 */
export const onOutPutExcel = (target) => post(`/api/v1/excel/${target}/export`)

/**
 * 获取系统消息
 * @param {*} data
 * @returns
 */
export const getMessageList = (data) => get(`/api/v1/message/pageList`, data)

/**
 * 消息已读
 * @param {*} data
 * @returns
 */
export const updateMessageRead = (id, data) =>
  put(`/api/v1/message/read/${id}`, data)

/**
 * 累计资产统计数据
 * @param {*} data
 * @returns
 */
export const getChartLjzcData = (data) =>
  get(`/api/v1/statistics/accumulated?export=0`, data)

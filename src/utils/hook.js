import { reactive } from 'vue'

/**
 * 分页对象及indexMethod
 * @returns
 */
export const usePagination = () => {
  // 分页对象
  const pagination = reactive({
    pageSize: 10,
    pageNum: 1,
    total: 0,
    lastPage: 0,
  })
  // 序号函数
  const indexMethod = (index) => {
    return (pagination.pageNum - 1) * pagination.pageSize + index + 1
  }

  const paginationReset = (pageSize = 10) => {
    pagination.pageNum = 1
    pagination.pageSize = pageSize
    pagination.total = 0
  }

  return {
    pagination,
    indexMethod,
    paginationReset,
  }
}

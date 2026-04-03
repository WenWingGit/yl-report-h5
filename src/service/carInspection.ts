import { IdNumber } from '@/typings'
import { http } from '@/utils/http'

/**
 * 账号列表
 * @param params
 * @returns
 */
export const getAccountListApi = (params: any) => {
  return http.get('/WebApi/PayAccount/GetList', params, {
    errorMsg: '获取账号列表失败',
  })
}

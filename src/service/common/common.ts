import { http } from '@/utils/http'
import { IGetBannerListReq, IGetBannerListRes, IVersionItem } from '@/service/typings/common'

/**
 * 获取Banner列表
 * @returns
 */
export const getBannerListApi = (data: IGetBannerListReq) => {
  return http.get<IGetBannerListRes>('/WebApi/Banner/GetList', data, {
    errorMsg: '获取Banner列表失败',
  })
}

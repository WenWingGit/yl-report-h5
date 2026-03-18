import { AccountTypeEnum } from '@/enum'
import { DataPermissionTypeEnum } from '@/enum/dataPermissionType'
import { EmploymentStatusTypeEnum } from '@/enum/employmentStatus'
import { IdNumber } from '@/typings'

// 登录请求
export interface ILoginAccountReq {
  // storeLoginName?: string
  // account: string
  phone?: string
  password: string
  wxCode?: string
  verCodeSessinId?: IdNumber
  captcha?: string
}

/** 登录响应 */
export interface ILoginRes {
  accessToken: string
  refreshToken: string
  /** AccessToken的失效日期，用于前端判断是否需要传刷新token */
  expireTime: string
  /** 刷新令牌过期天数 */
  refreshExpireDay: number
  /** AccessToken的失效分钟数 */
  expireTimeMinute: number
  /** 门店Id */
  createdStoreId: IdNumber
  /** 实际所属门店Id */
  affiliatedStoreId: IdNumber
  /** 用户Id */
  userId: IdNumber
  /** 账号类型 */
  accountType: AccountTypeEnum
}

/** 修改密码请求 */
export interface IChangePwdReq {
  oldPassword: string
  newPassword: string
  confirmNewPassword: string
}

/** 获取用户信息响应 */
export interface IGetUserInfoRes {
  /** 用户Id */
  id: IdNumber
  /** 创建者Id */
  createdUserId: IdNumber
  /** 创建时门店Id */
  createdStoreId: IdNumber
  /** 实际所属门店Id */
  affiliatedStoreId: IdNumber
  /** 实际所属人Id */
  affiliatedUserId: IdNumber
  /** 手机号码 */
  phone: string
  /** 是否启用 */
  isActive: boolean
  /** 姓名 */
  name: string
  /** 头像 */
  avatar: string
  /** 账号类型 */
  accountType: AccountTypeEnum
  /** 门店Id */
  storeId: IdNumber
  /** 考勤组别Id */
  workAtteGroupId: IdNumber
  /** 数据权限类型 */
  dataPermissionType: DataPermissionTypeEnum
  /** 雇佣状态 */
  employmentStatus: EmploymentStatusTypeEnum
}

/** 编辑用户信息请求 */
export interface IEditUserInfoReq {
  avatar: string | null
  name: string
  phone: string
}

/** 搜索状态类型 */
export enum SearchStateEnum {
  /** 未知 */
  UNKNOWN = 0,
  /** 待支付 */
  PENDING_PAYMENT = 1,
  /** 已完成 */
  COMPLETED = 2,
}

/** 搜索状态类型标签 */
export enum SearchStateLabelEnum {
  /** 未知 */
  UNKNOWN = '未知',
  /** 待支付 */
  PENDING_PAYMENT = '待支付',
  /** 已完成 */
  COMPLETED = '已完成',
}

/** 搜索状态类型映射 */
export const SearchStateValueEnum: Record<SearchStateEnum, string> = {
  [SearchStateEnum.UNKNOWN]: SearchStateLabelEnum.UNKNOWN,
  [SearchStateEnum.PENDING_PAYMENT]: SearchStateLabelEnum.PENDING_PAYMENT,
  [SearchStateEnum.COMPLETED]: SearchStateLabelEnum.COMPLETED,
}

/** 收入来源枚举 */
export const ExpenseInFrom = {
  UNKNOWN: 0,
  NEW_COLLECTION: 1,
  SALES_ORDER: 2,
  LEASE_ORDER: 3,
  INSURANCE_FEE: 4,
  LEASE_SETTLEMENT: 5,
  LEASE_FEE: 6,
  INSURANCE_FEE_REBATE: 7,
} as const

/** 收入来源文本 */
export const ExpenseInFromText = {
  UNKNOWN: '未知',
  NEW_COLLECTION: '新增收款',
  SALES_ORDER: '销售订单',
  LEASE_ORDER: '租赁订单',
  INSURANCE_FEE: '保险费',
  LEASE_SETTLEMENT: '租赁结算',
  LEASE_FEE: '租赁收费',
  INSURANCE_FEE_REBATE: '保险费返点',
} as const

/** 收款状态枚举 */
export const ExpenseInPayStateEnum = {
  /** 未知 */
  UNKNOWN: 0,
  /** 待收款 */
  PENDING_PAYMENT: 1,
  /** 收款中 */
  IN_PAYMENT: 2,
  /** 已收全款 */
  FULLY_PAID: 3,
} as const

/** 收款状态标签 */
export const ExpenseInPayStateLabelEnum = {
  /** 未知 */
  UNKNOWN: '未知',
  /** 待收款 */
  PENDING_PAYMENT: '待收款',
  /** 收款中 */
  IN_PAYMENT: '收款中',
  /** 已收全款 */
  FULLY_PAID: '已收全款',
} as const

/** 收款状态映射 */
export const ExpenseInPayStateValueEnum: Record<number, string> = {
  [ExpenseInPayStateEnum.UNKNOWN]: ExpenseInPayStateLabelEnum.UNKNOWN,
  [ExpenseInPayStateEnum.PENDING_PAYMENT]: ExpenseInPayStateLabelEnum.PENDING_PAYMENT,
  [ExpenseInPayStateEnum.IN_PAYMENT]: ExpenseInPayStateLabelEnum.IN_PAYMENT,
  [ExpenseInPayStateEnum.FULLY_PAID]: ExpenseInPayStateLabelEnum.FULLY_PAID,
}

/** 收入付款类型枚举 */
export const OrderExpenseInWxTypeEnum = {
  /** 未知 */
  UNKNOWN: 0,
  /** 租金支付计划 */
  RENT_PAYMENT_PLAN: 1,
  /** 保险费支付计划 */
  INSURANCE_PAYMENT_PLAN: 2,
  /** 收款单 */
  RECEIPT: 3,
  /** 租赁结算 */
  LEASE_SETTLEMENT: 4,
} as const

/** 收入付款类型标签 */
export const OrderExpenseInWxTypeLabelEnum = {
  /** 未知 */
  UNKNOWN: '未知',
  /** 租金支付计划 */
  RENT_PAYMENT_PLAN: '租金支付计划',
  /** 保险费支付计划 */
  INSURANCE_PAYMENT_PLAN: '保险费支付计划',
  /** 收款单 */
  RECEIPT: '收款单',
  /** 租赁结算 */
  LEASE_SETTLEMENT: '租赁结算',
} as const

/** 收入付款类型映射 */
export const OrderExpenseInWxTypeValueEnum: Record<number, string> = {
  [OrderExpenseInWxTypeEnum.UNKNOWN]: OrderExpenseInWxTypeLabelEnum.UNKNOWN,
  [OrderExpenseInWxTypeEnum.RENT_PAYMENT_PLAN]: OrderExpenseInWxTypeLabelEnum.RENT_PAYMENT_PLAN,
  [OrderExpenseInWxTypeEnum.INSURANCE_PAYMENT_PLAN]:
    OrderExpenseInWxTypeLabelEnum.INSURANCE_PAYMENT_PLAN,
  [OrderExpenseInWxTypeEnum.RECEIPT]: OrderExpenseInWxTypeLabelEnum.RECEIPT,
  [OrderExpenseInWxTypeEnum.LEASE_SETTLEMENT]: OrderExpenseInWxTypeLabelEnum.LEASE_SETTLEMENT,
}

/** 收入付款类型枚举（详细） */
export const ExpenseInPayTypeEnum = {
  /** 未知 */
  UNKNOWN: 0,
  /** 车辆成交价 */
  CAR_DEAL: 1,
  /** 汽车精品收入 */
  CAR_ACCESSORY: 2,
  /** 保险增值收入 */
  INSURANCE: 3,
  /** 金融贷款收入 */
  FINANCE_LOAN: 4,
  /** 其他 */
  OTHER: 5,
  /** 定金 */
  DEPOSIT: 6,
  /** 尾款 */
  FINAL_PAYMENT: 7,
  /** 首付款 */
  DOWN_PAYMENT: 8,
  /** 按揭款 */
  MORTGAGE: 9,
  /** 全款 */
  FULL_PAYMENT: 10,
  /** GPS费用 */
  GPS_FEE: 11,
  /** 服务费用 */
  SERVICE_FEE: 12,
  /** 履约金 */
  BOND_AMOUNT: 13,
  /** 交强险 */
  COMPULSORY_INSURANCE: 14,
  /** 商业险 */
  COMMERCIAL_INSURANCE: 15,
  /** 提前还款_已逾期本金 */
  OVERDUE_PRINCIPAL: 16,
  /** 提前还款_逾期违约金 */
  OVERDUE_PENALTY: 17,
  /** 提前还款_第一阶段本金 */
  FIRST_STAGE_PRINCIPAL: 18,
  /** 提前还款_第一阶段违约金 */
  FIRST_STAGE_PENALTY: 19,
  /** 提前还款_第二阶段本金 */
  SECOND_STAGE_PRINCIPAL: 20,
  /** 提前还款_第二阶段违约金 */
  SECOND_STAGE_PENALTY: 21,
  /** 提前还款_尾付租金 */
  FINAL_RENT: 22,
  /** 提前还款_手续费 */
  HANDLING_FEE: 23,
  /** 提前还款_其他款项 */
  OTHER_PAYMENT: 24,
} as const

/** 收入付款类型标签 */
export const ExpenseInPayTypeLabelEnum = {
  /** 未知 */
  UNKNOWN: '未知',
  /** 车辆成交价 */
  CAR_DEAL: '车辆成交价',
  /** 汽车精品收入 */
  CAR_ACCESSORY: '汽车精品收入',
  /** 保险增值收入 */
  INSURANCE: '保险增值收入',
  /** 金融贷款收入 */
  FINANCE_LOAN: '金融贷款收入',
  /** 其他 */
  OTHER: '其他',
  /** 定金 */
  DEPOSIT: '定金',
  /** 尾款 */
  FINAL_PAYMENT: '尾款',
  /** 首付款 */
  DOWN_PAYMENT: '首付款',
  /** 按揭款 */
  MORTGAGE: '按揭款',
  /** 全款 */
  FULL_PAYMENT: '全款',
  /** GPS费用 */
  GPS_FEE: 'GPS费用',
  /** 服务费用 */
  SERVICE_FEE: '服务费用',
  /** 履约金 */
  BOND_AMOUNT: '履约金',
  /** 交强险 */
  COMPULSORY_INSURANCE: '交强险',
  /** 商业险 */
  COMMERCIAL_INSURANCE: '商业险',
  /** 提前还款_已逾期本金 */
  OVERDUE_PRINCIPAL: '提前还款_已逾期本金',
  /** 提前还款_逾期违约金 */
  OVERDUE_PENALTY: '提前还款_逾期违约金',
  /** 提前还款_第一阶段本金 */
  FIRST_STAGE_PRINCIPAL: '提前还款_第一阶段本金',
  /** 提前还款_第一阶段违约金 */
  FIRST_STAGE_PENALTY: '提前还款_第一阶段违约金',
  /** 提前还款_第二阶段本金 */
  SECOND_STAGE_PRINCIPAL: '提前还款_第二阶段本金',
  /** 提前还款_第二阶段违约金 */
  SECOND_STAGE_PENALTY: '提前还款_第二阶段违约金',
  /** 提前还款_尾付租金 */
  FINAL_RENT: '提前还款_尾付租金',
  /** 提前还款_手续费 */
  HANDLING_FEE: '提前还款_手续费',
  /** 提前还款_其他款项 */
  OTHER_PAYMENT: '提前还款_其他款项',
} as const

/** 收入付款类型映射 */
export const ExpenseInPayTypeValueEnum: Record<number, string> = {
  [ExpenseInPayTypeEnum.UNKNOWN]: ExpenseInPayTypeLabelEnum.UNKNOWN,
  [ExpenseInPayTypeEnum.CAR_DEAL]: ExpenseInPayTypeLabelEnum.CAR_DEAL,
  [ExpenseInPayTypeEnum.CAR_ACCESSORY]: ExpenseInPayTypeLabelEnum.CAR_ACCESSORY,
  [ExpenseInPayTypeEnum.INSURANCE]: ExpenseInPayTypeLabelEnum.INSURANCE,
  [ExpenseInPayTypeEnum.FINANCE_LOAN]: ExpenseInPayTypeLabelEnum.FINANCE_LOAN,
  [ExpenseInPayTypeEnum.OTHER]: ExpenseInPayTypeLabelEnum.OTHER,
  [ExpenseInPayTypeEnum.DEPOSIT]: ExpenseInPayTypeLabelEnum.DEPOSIT,
  [ExpenseInPayTypeEnum.FINAL_PAYMENT]: ExpenseInPayTypeLabelEnum.FINAL_PAYMENT,
  [ExpenseInPayTypeEnum.DOWN_PAYMENT]: ExpenseInPayTypeLabelEnum.DOWN_PAYMENT,
  [ExpenseInPayTypeEnum.MORTGAGE]: ExpenseInPayTypeLabelEnum.MORTGAGE,
  [ExpenseInPayTypeEnum.FULL_PAYMENT]: ExpenseInPayTypeLabelEnum.FULL_PAYMENT,
  [ExpenseInPayTypeEnum.GPS_FEE]: ExpenseInPayTypeLabelEnum.GPS_FEE,
  [ExpenseInPayTypeEnum.SERVICE_FEE]: ExpenseInPayTypeLabelEnum.SERVICE_FEE,
  [ExpenseInPayTypeEnum.BOND_AMOUNT]: ExpenseInPayTypeLabelEnum.BOND_AMOUNT,
  [ExpenseInPayTypeEnum.COMPULSORY_INSURANCE]: ExpenseInPayTypeLabelEnum.COMPULSORY_INSURANCE,
  [ExpenseInPayTypeEnum.COMMERCIAL_INSURANCE]: ExpenseInPayTypeLabelEnum.COMMERCIAL_INSURANCE,
  [ExpenseInPayTypeEnum.OVERDUE_PRINCIPAL]: ExpenseInPayTypeLabelEnum.OVERDUE_PRINCIPAL,
  [ExpenseInPayTypeEnum.OVERDUE_PENALTY]: ExpenseInPayTypeLabelEnum.OVERDUE_PENALTY,
  [ExpenseInPayTypeEnum.FIRST_STAGE_PRINCIPAL]: ExpenseInPayTypeLabelEnum.FIRST_STAGE_PRINCIPAL,
  [ExpenseInPayTypeEnum.FIRST_STAGE_PENALTY]: ExpenseInPayTypeLabelEnum.FIRST_STAGE_PENALTY,
  [ExpenseInPayTypeEnum.SECOND_STAGE_PRINCIPAL]: ExpenseInPayTypeLabelEnum.SECOND_STAGE_PRINCIPAL,
  [ExpenseInPayTypeEnum.SECOND_STAGE_PENALTY]: ExpenseInPayTypeLabelEnum.SECOND_STAGE_PENALTY,
  [ExpenseInPayTypeEnum.FINAL_RENT]: ExpenseInPayTypeLabelEnum.FINAL_RENT,
  [ExpenseInPayTypeEnum.HANDLING_FEE]: ExpenseInPayTypeLabelEnum.HANDLING_FEE,
  [ExpenseInPayTypeEnum.OTHER_PAYMENT]: ExpenseInPayTypeLabelEnum.OTHER_PAYMENT,
}


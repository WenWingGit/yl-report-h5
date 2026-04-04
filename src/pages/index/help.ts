import { fullUrl } from "@/utils/utils"

export function handleReport(data) {
  data.carVin = carVin(data?.carVin)
  data.carPurchaseTime = data?.carPurchaseTime?.split(' ')[0]
  data.updatedTime = data?.updatedTime?.split(' ')[0]
  data.carMileage = carMileage(data?.carMileage || 0)

  data.carMainImg = fullUrl(data?.carMainImg || '')
  return data
}

function carMileage(num) {
  if (isNaN(num)) {
    return '-'
  }
  return (num / 10000).toFixed(2)
}

function carVin(str) {
  if (!str) {
    return '-'
  }
  // 脱敏处理：保留前3位和后3位，中间使用*号
  const len = String(str).length
  if (len <= 6) return str
  const start = str.slice(0, 3)
  const end = str.slice(-3)
  const stars = '*'.repeat(len - 6)
  return `${start}${stars}${end}`
}
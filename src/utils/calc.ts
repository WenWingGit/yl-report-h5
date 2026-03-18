/**
 * 浮点数加法运算
 * @param numbers - 要相加的数字
 * @returns 计算结果
 */
export const FloatAdd = (...numbers: number[]): number => {
  let sum = 0
  let decimals = 0

  // 遍历所有数字，计算小数部分的最大长度
  numbers.forEach((num) => {
    const parts = num.toString().split('.')
    if (parts.length > 1) {
      decimals = Math.max(decimals, parts[1].length)
    }
  })

  // 将所有数字乘以10的decimals次方，转换为整数进行加法运算
  const factor = Math.pow(10, decimals)
  numbers.forEach((num) => {
    sum += Math.round(num * factor)
  })

  // 将结果除以10的decimals次方，并保留指定的小数位数
  const result = (sum / factor).toFixed(decimals)

  // 返回数字类型的结果
  return parseFloat(result)
}

/**
 * 浮点数减法运算
 * @param numbers - 要相减的数字（第一个是被减数，其余是减数）
 * @returns 计算结果
 */
export const FloatSdd = (...numbers: number[]): number => {
  // 确保至少有两个数字参与运算
  if (numbers.length < 2) {
    throw new Error('至少需要两个数字进行减法运算')
  }

  let decimals = 0
  // 找到小数部分的最大长度
  numbers.forEach((num) => {
    const parts = num.toString().split('.')
    if (parts.length > 1) {
      decimals = Math.max(decimals, parts[1].length)
    }
  })

  // 将所有数字乘以10的decimals次方，转换为整数进行减法运算
  const factor = Math.pow(10, decimals)
  let result = Math.round(numbers[0] * factor) // 第一个数字作为被减数

  // 从第二个数字开始，依次执行减法
  for (let i = 1; i < numbers.length; i++) {
    result -= Math.round(numbers[i] * factor)
  }

  // 将结果除以10的decimals次方，并保留指定的小数位数
  const resultStr = (result / factor).toFixed(decimals)

  // 返回数字类型的结果
  return parseFloat(resultStr)
}


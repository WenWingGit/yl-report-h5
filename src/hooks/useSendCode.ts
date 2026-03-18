import { ref, computed, onUnmounted } from 'vue'
// import { sendVerificationCodeApi } from '@/service/user'
import { getWxAuthUrl } from '@/utils/url'

// 获取微信 code
const getWxCode = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    uni.login({
      success: (res) => {
        resolve(res.code)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}

export function useSendCode() {
  // 验证码
  const code = ref('')
  // 倒计时
  const timer = ref(0)
  // 是否正在发送
  const isSending = ref(false)
  // 定时器
  let interval: any = null

  // 获取验证码按钮文案
  const getCodeText = computed(() => {
    if (timer.value > 0) {
      return `${timer.value}秒后重新获取`
    }
    return isSending.value ? '发送中...' : '获取验证码'
  })

  // 发送验证码
  const handleGetCode = async (phone: string) => {
    if (timer.value > 0 || isSending.value) return

    // 校验手机号
    if (!phone) {
      uni.showToast({
        title: '请输入手机号',
        icon: 'none',
      })
      return
    }
    if (!/^1[3-9]\d{9}$/.test(phone)) {
      uni.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
      })
      return
    }

    try {
      isSending.value = true
      // TODO
      // 调用发送验证码接口
      // await sendVerificationCodeApi({
      //   phone,
      // })

      // 开始倒计时
      handleCountDown()

      uni.showToast({
        title: '验证码发送成功',
        icon: 'success',
        duration: 1500,
      })
    } catch (error: any) {
      console.error('发送验证码失败:', error)
      uni.showToast({
        title: error?.data?.message || error?.message || '发送失败,请重试',
        icon: 'none',
      })
      setTimeout(() => {
        const loginPagePath = import.meta.env.VITE_APP_LOGIN_PAGE
        const authUrl = getWxAuthUrl(loginPagePath)
        // #ifdef H5
        window.location.href = authUrl
        // #endif
      }, 1500)
    } finally {
      isSending.value = false
    }
  }

  // 倒计时
  const handleCountDown = () => {
    clearInterval(interval)
    timer.value = 60
    interval = setInterval(() => {
      if (timer.value <= 0) {
        clearInterval(interval)
        return
      }
      timer.value--
    }, 1000)
  }

  // 清理定时器
  const clear = () => {
    clearInterval(interval)
    timer.value = 0
    isSending.value = false
  }

  // 组件卸载时清理定时器
  onUnmounted(() => {
    clear()
  })

  return {
    code,
    timer,
    isSending,
    getCodeText,
    handleGetCode,
    clear,
  }
}

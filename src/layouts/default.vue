<template>
  <wd-config-provider :themeVars="themeVars">
    <view class="default-page" :data-theme="themeName">
      <CheckTest />
      <slot></slot>
    </view>

    <wd-toast />
    <wd-message-box />

    <DownloadProgress
      :visible="downloadProgress.visible"
      :version="downloadProgress.version"
      :progress="downloadProgress.progress"
      :current-size="downloadProgress.currentSize"
      :total-size="downloadProgress.totalSize"
      :status="downloadProgress.status"
    />
  </wd-config-provider>
</template>

<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni'
import { useLoginStore } from '@/store'
import DownloadProgress from '@/components/common/DownloadProgress.vue'
import { downloadProgress } from '@/utils/checkAppVersion'
import CheckTest from '@/components/common/CheckTest.vue'
import { ThemeColorConfigEnum, ThemeConfigEnum } from '@/theme'
import { useThemeStore } from '@/store/theme'
import { storeToRefs } from 'pinia'

const loginStore = useLoginStore()
const themeStore = useThemeStore()
const { themeName } = storeToRefs(themeStore)

// wot-design-uni 主題變量配置 根据用户角色设置主题
const themeVars = computed(() => {
  const themeColor = ThemeColorConfigEnum[themeName.value]
  return {
    colorTheme: themeColor,
    // buttonPrimaryBgColor: '#07c160',
    // buttonPrimaryColor: '#07c160',
  } as ConfigProviderThemeVars
})
</script>

<style lang="scss" scoped>
.default-page {
  // overflow: hidden;
}
</style>

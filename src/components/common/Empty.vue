<template>
  <view>
    <view v-if="showImg" class="flex flex-col fc sx-pt-25 sx-pb-15">
      <Pic width="112rpx" src="/src/static/images/common/empty.svg" mode="widthFix" />
      <view v-if="text" class="sx-color-999 sx-fz-14 sx-pt-20">{{ text }}</view>
      <slot></slot>
    </view>
    <view v-else class="flex flex-col fc sx-py-5">
      <view v-if="text" class="sx-color-999 sx-fz-14">{{ text }}</view>
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts" setup>
interface Props {
  showImg?: boolean
  text?: string
}
const props = withDefaults(defineProps<Props>(), {
  showImg: true,
  text: '暂无信息',
})
</script>

<style lang="scss" scoped></style>

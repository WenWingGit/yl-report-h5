<route lang="json5" type="page">
{
  layout: "default",
  style: {
    navigationBarTitleText: "售后理赔",
  },
}
</route>

<template>
  <view>
    <rich-text :nodes="detail"></rich-text>
  </view>
</template>

<script lang="ts" setup>
import { WxMinApiSettingGuaranteeServiceDescriptionGet } from "@/service/carInspection";

const detail = ref("");
onLoad(async () => {
  // 获取车辆检测保障服务说明
  const res = await WxMinApiSettingGuaranteeServiceDescriptionGet();
  if (res?.data) {
    console.log("车辆检测保障服务说明:", res?.data);
    detail.value = res?.data;
  }
});
</script>

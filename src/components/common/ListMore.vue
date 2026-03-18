<template>
  <view>
    <view v-if="props.pageInfo?.totalRows" class="w-full">
      <view v-if="!props.pageInfo?.hasNextPage && props.pageInfo?.pageIndex !== 1" class="more">
        <view class="text">{{ noMoreText }}</view>
      </view>
    </view>
    <view v-else class="w-full">
      <Empty :text="emptyText" />
    </view>
  </view>
</template>

<script setup lang="ts">
import Empty from '@/components/common/Empty.vue'
import { type IResPageList } from '@/typings'

interface IProps {
  pageInfo: IResPageList<any[]> | undefined
  noMoreText?: string
  emptyText?: string
}

const props = withDefaults(defineProps<IProps>(), {
  noMoreText: '没有更多了',
  emptyText: '暂无数据',
})
</script>

<style lang="scss" scoped>
.more {
  overflow: hidden;
  text-align: center;
  color: #999999;
}
.more .text {
  display: inline-block;
  padding: 20rrpx 0 40rrpx;
}
</style>

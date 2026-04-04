<template>
  <view class="swiper-container">
    <swiper
      class="card-swiper"
      :current="currentIndex"
      previous-margin="30rpx"
      next-margin="80rpx"
      @change="onSwiperChange"
    >
      <swiper-item v-for="(item, index) in list" :key="index">
        <view class="card-item" :class="{ 'is-active': currentIndex === index }">
          <view class="card-header">
            <text class="title">{{ item.title }}</text>
          </view>

          <view class="card-image-box">
            <image class="image" :src="item.imageUrl" mode="aspectFill"></image>
          </view>

          <view class="card-footer">
            <text class="label">解读：</text>
            <text>{{ item.statusText }}</text>
          </view>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  name: "InspectionCard",
  props: {
    // 接收外部传入的列表数据
    list: {
      type: Array,
      default: () => [],
    },
    // 接收外部传入的初始索引
    initIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      // 内部维护的当前索引
      currentIndex: 0,
    };
  },
  watch: {
    // 监听外部 initIndex 的变化，如果外部重置了索引，内部同步更新
    initIndex: {
      handler(newVal) {
        this.currentIndex = newVal;
      },
      immediate: true, // 组件初始化时立刻执行一次
    },
  },
  methods: {
    // 滑动切换时触发
    onSwiperChange(e) {
      // e.detail.current 是 swiper 内部滑动后的最新索引
      this.currentIndex = e.detail.current;

      // 如果需要，可以将当前索引通知给父组件 (比如用于顶部 Tab 联动)
      this.$emit("change", this.currentIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  // padding: 20rpx 0;
}

/* 注意：swiper 组件在 UniApp 中默认高度是 150px，必须手动覆盖它的高度以适应你的卡片内容 */
.card-swiper {
  height: 520rpx; // 根据你实际卡片的高度进行微调
  width: 100%;
}

/* 卡片内部样式 */
.card-item {
  height: 100%;
  background-color: #f7f8fa; // 灰色背景凸显卡片
  border-radius: 12rpx;
  /* 利用 margin 制造卡片之间的间距。右侧留白，配合 next-margin 形成视觉效果 */
  margin-right: 20rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease; // 添加平滑过渡动画
}

/* 可选：如果你想让当前激活的卡片稍微放大，或者旁边的卡片稍微缩小，可以使用这个类名 */
// .card-item:not(.is-active) {
//   transform: scale(0.95);
//   opacity: 0.8;
// }

.card-header {
  padding: 24rpx;
}

.card-header .title {
  font-size: 28rpx;
  color: #333333;
  line-height: 1.4;
  font-weight: 500;
}

.card-image-box {
  width: 100%;
  flex: 1; // 自动撑满剩余高度
  min-height: 300rpx;
  padding: 20rpx;
  box-sizing: border-box;
}

.card-image-box .image {
  width: 100%;
  height: 100%;
  display: block;
}

.card-footer {
  padding: 24rpx;
  display: flex;
  align-items: center;
}

.card-footer .label {
  font-size: 26rpx;
  color: #666666;
}

.status-tag {
  font-size: 22rpx;
  padding: 4rpx 12rpx;
  border-radius: 6rpx;
  margin-left: 10rpx;
}

/* 绿色标签 */
.tag-success {
  color: #07c160;
  border: 1px solid #07c160;
  background-color: rgba(7, 193, 96, 0.05);
}

/* 红色标签 */
.tag-danger {
  color: #ee0a24;
  border: 1px solid #ee0a24;
  background-color: rgba(238, 10, 36, 0.05);
}
</style>

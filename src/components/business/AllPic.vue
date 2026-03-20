<template>
  <view class="photo-container">
    <view class="tabs">
      <view
        class="tab-item"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: currentTab === index }"
        @click="switchTab(index)"
      >
        <text class="tab-text">{{ tab.name }}</text>
        <view class="tab-line" v-if="currentTab === index"></view>
      </view>
    </view>

    <view class="grid-content">
      <view class="grid-item" v-for="(item, index) in currentPhotoList" :key="index">
        <image
          class="photo"
          :src="item.url"
          mode="aspectFill"
          @click="previewImage(index)"
        ></image>
        <text class="photo-label">{{ item.label }}</text>
      </view>

      <view class="empty-tip" v-if="currentPhotoList.length === 0"> 暂无照片数据 </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentTab: 0, // 当前选中的 Tab 索引
      tabs: [
        { name: "基础照片", key: "basic" },
        { name: "留底照片", key: "archive" },
        { name: "异常照片", key: "abnormal" },
      ],
      // 模拟所有照片数据，你可以根据接口返回格式调整
      allPhotos: {
        basic: [
          { label: "左前45°", url: "https://via.placeholder.com/200x150.png?text=1" },
          { label: "右后45°", url: "https://via.placeholder.com/200x150.png?text=2" },
          { label: "着车仪表盘", url: "https://via.placeholder.com/200x150.png?text=3" },
          { label: "中控台", url: "https://via.placeholder.com/200x150.png?text=4" },
          { label: "驾驶位", url: "https://via.placeholder.com/200x150.png?text=5" },
          {
            label: "左侧后排座椅",
            url: "https://via.placeholder.com/200x150.png?text=6",
          },
          { label: "正前", url: "https://via.placeholder.com/200x150.png?text=7" },
          { label: "发动机舱", url: "https://via.placeholder.com/200x150.png?text=8" },
        ],
        archive: [
          { label: "铭牌", url: "https://via.placeholder.com/200x150.png?text=Archive" },
        ],
        abnormal: [],
      },
    };
  },
  computed: {
    // 根据当前选中的 tab 动态计算应该显示的图片列表
    currentPhotoList() {
      const currentTabKey = this.tabs[this.currentTab].key;
      return this.allPhotos[currentTabKey] || [];
    },
  },
  methods: {
    // 切换 Tab
    switchTab(index) {
      this.currentTab = index;
    },
    // 关闭操作（通知父组件）
    close() {
      this.$emit("close");
    },
    // 预览图片
    previewImage(index) {
      // 提取当前列表所有的图片 URL 组成数组
      const urls = this.currentPhotoList.map((item) => item.url);
      uni.previewImage({
        current: index, // 当前显示图片的索引
        urls: urls, // 需要预览的图片链接列表
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.photo-container {
}
/* 2. Tabs 样式 */
.tabs {
  display: flex;
  justify-content: space-around;
  padding: 10rpx 0 30rpx;
}

.tab-item {
  position: relative;
  padding: 10rpx 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab-text {
  font-size: 28rpx;
  color: #666;
}

.tab-item.active .tab-text {
  color: #333;
  font-weight: bold;
}

/* 底部绿色指示线 */
.tab-line {
  position: absolute;
  bottom: -4rpx;
  width: 40rpx;
  height: 6rpx;
  background-color: #07c160; /* 微信绿，你可以替换成你项目的UI主色调 */
  border-radius: 4rpx;
}

/* 3. 网格内容区样式 */
.grid-content {
  display: flex;
  flex-wrap: wrap; /* 允许换行 */
  padding: 0 0;
  justify-content: flex-start; /* 靠左对齐 */
}

/* 一行排3个，计算宽度和间距 */
.grid-item {
  width: 31%; /* 留出一点空间给间距 */
  margin-right: 3.5%;
  margin-bottom: 30rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 每行第3个元素取消右边距，防止被挤到下一行 */
.grid-item:nth-child(3n) {
  margin-right: 0;
}

.photo {
  width: 100%;
  height: 160rpx; /* 图片高度，根据实际设计稿调整 */
  background-color: #f0f0f0;
  border-radius: 8rpx;
  margin-bottom: 12rpx;
}

.photo-label {
  font-size: 24rpx;
  color: #666;
  text-align: center;
  /* 防止文字过长换行，超出省略号 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.empty-tip {
  width: 100%;
  text-align: center;
  color: #999;
  font-size: 28rpx;
  padding: 60rpx 0;
}
</style>

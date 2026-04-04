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
      <view class="grid-item" v-for="(item, index) in photoList" :key="index">
        <image
          class="photo"
          :src="item.url"
          mode="aspectFill"
          @click="previewImage(index)"
        ></image>
        <text class="photo-label">{{ item.label }}</text>
      </view>

      <view class="empty-tip" v-if="photoList.length === 0"> 暂无照片数据 </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { WxMinApiCarInspectionGetCarInspectionPhotoListGet } from "@/service/carInspection";
import { fullUrl } from "@/utils/utils";
import { ref, computed } from "vue";

// Tab 数据类型
interface TabType {
  name: string;
  key: string;
}

// 照片项类型
interface PhotoItem {
  label: string;
  url: string;
}

interface IProps {
  carInspectionId: string;
}
const props = withDefaults(defineProps<IProps>(), {
  carInspectionId: "",
});

// tabs定义
const tabs = ref<TabType[]>([
  { name: "基础照片", key: "0" },
  { name: "留底照片", key: "1" },
  { name: "异常照片", key: "2" },
]);

const currentTab = ref<number>(0);

onMounted(() => {
  loadPhotoList();
});

watch(
  () => props.carInspectionId,
  (va) => {
    if (va) {
      loadPhotoList();
    }
  }
);

const photoList = ref([]);

async function loadPhotoList() {
  if (!props.carInspectionId) {
    return 0;
  }
  const res = await WxMinApiCarInspectionGetCarInspectionPhotoListGet(
    props.carInspectionId,
    currentTab.value
  );
  if (res?.data) {
    photoList.value = res?.data?.map((item) => {
      return {
        label: item.description,
        url: fullUrl(item?.imgStr),
      };
    });
  }
}

// 切换 tab
function switchTab(index: number) {
  currentTab.value = index;
  loadPhotoList();
}

// 关闭回调（如需与父通信可emit，当前未用到）
function close() {
  // 暂未传递 emits, 可补： defineEmits(['close'])
  // emit('close')
}

// 预览图片
function previewImage(index: number) {
  const urls = currentPhotoList.value.map((item) => item.url);
  uni.previewImage({
    current: index,
    urls: urls,
  });
}
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

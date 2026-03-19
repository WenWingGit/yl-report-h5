<route lang="json5" type="page">
{
  layout: "default",
  style: {
    navigationBarTitleText: "检测报告",
  },
}
</route>

<template>
  <view class="page-report">
    <div class="report-brief">
      <div class="report-header__content">
        <div class="check-content">
          <div class="report-info">
            <div class="logo">
              <image
                class="logo-img"
                src="/static/images/yilian/logo.png"
                mode="widthFix"
              ></image>
            </div>
            <p class="report-no">报告编号: SGJC20260228-163391109</p>
          </div>
          <div class="car-card">
            <div class="me-image car-photo" style="overflow: hidden; border-radius: 4px">
              <image
                class="me-image__img"
                src="/static/images/yilian/qnbdp7206xf850062988b941f99f5ce028d840e0f51772242791.jpg"
                mode="widthFix"
              >
              </image>
            </div>
            <div class="car-info">
              <p class="title">本田 思域 2019款 220TURBO CVT劲动版 国VI</p>
              <p class="car-info__desc">VIN: LVH**********8856</p>
              <p class="car-info__desc">2020-6-3 | 6.5万公里（表显里程）</p>
            </div>
          </div>
          <div class="detection-overview-card detection-overview-card-insured">
            <image
              class="detection-overview-card-img"
              src="/static/images/yilian/carInsure-7d1aa9f1.png"
              mode="widthFix"
            ></image>
            <div class="card-content">
              <div class="conclusion">
                <div class="item">
                  <image
                    class="item-img"
                    src="/static/images/yilian/qnbdp169060989292497c7deb9e47c5ad954cd79ce0a0381066.png"
                    alt=""
                    mode="widthFix"
                  >
                  </image>
                  <p class="total">共63项</p>
                  <p class="desc">非重大事故</p>
                </div>
                <div class="item">
                  <image
                    class="item-img"
                    src="/static/images/yilian/qnbdp16906099181b3c6fc1025244fcb9c092ced5a7c3a71066.png"
                    alt=""
                    mode="widthFix"
                  >
                  </image>
                  <p class="total">共39项</p>
                  <p class="desc">非泡水</p>
                </div>
                <div class="item">
                  <image
                    class="item-img"
                    src="/static/images/yilian/qnbdp16906099500cac95b468bc454e8b14663f3db1ed9e1066.png"
                    alt=""
                    mode="widthFix"
                  >
                  </image>
                  <p class="total">共13项</p>
                  <p class="desc">非火烧</p>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <span>检测师<i>蔡成生</i></span>
              </li>
              <li>
                <span>检测日期<i>2026-02-28</i></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom-bg"></div>
      </div>
      <div class="divide"><em></em><span>更多详细检测 请看下方</span></div>
    </div>

    <view class="detection-list">
      <view class="me-tabs me-tabs--line">
        <div v-if="isFixed" :style="{ height: elementInitHeight + 'px' }"></div>
        <div>
          <div id="me-sticky" class="me-sticky" :class="{ 'me-sticky--fixed': isFixed }">
            <div>
              <div class="me-tabs__wrap me-tabs__wrap--scrollable">
                <div
                  class="me-tabs__nav me-tabs__nav--line me-tabs__nav--complete"
                  style="background: transparent"
                >
                  <view
                    v-for="(item, index) in tabData"
                    :id="'me-tabs-1-' + index"
                    class="me-tab me-tab--line"
                    :class="{ 'me-tab--active': tabIndex === index }"
                    :style="{
                      color:
                        tabIndex === index
                          ? 'rgb(255, 255, 255)'
                          : 'rgba(255, 255, 255, .7)',
                    }"
                    @click="onClickItem(item, index)"
                  >
                    <text class="me-tab__text">{{ item.name }}</text>

                    <view class="me-tabs__line"></view>
                  </view>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="me-tabs__content">
          <div
            v-for="(type, typeIndex) in allData"
            :id="'me-tab-' + typeIndex"
            class="me-tab__panel"
          >
            <div
              v-for="(result, resultIndex) in type.resultList"
              class="detection-item"
              :key="resultIndex"
            >
              <div class="detection-title">
                <image
                  class="detection-title-img"
                  src="/static/images/yilian/title-bg.png"
                  mode="widthFix"
                ></image>
                <div class="detection-title-left">
                  <h2>{{ result.name }}</h2>
                  <span class="me-tag me-tag--primary detection-title-tag">
                    非重大事故
                  </span>
                </div>
                <span class="assess" @click="onClickStandard(resultIndex)">
                  <span>判定标准</span>
                  <i class="me-badge__wrapper me-icon me-icon-arrow"></i>
                </span>
              </div>
              <div class="detection-content">
                <div class="item-desc">
                  <div class="normal-num">
                    <div class="normal-num-title">只看问题项</div>
                    <div
                      role="switch"
                      class="me-switch"
                      :class="{ 'me-switch--on': result.justProblem }"
                      tabindex="0"
                      aria-checked="false"
                      style="font-size: 20px"
                      @click="onSwitch(typeIndex, resultIndex, result.justProblem)"
                    >
                      <div class="me-switch__node"></div>
                    </div>
                  </div>
                  <image :src="result.img" mode="widthFix"></image>
                </div>
                <div class="defect-item">
                  <div class="item-sidler">
                    <image class="icon" :src="normal" mode="widthFix"></image>
                    <div class="defect-text">通过</div>
                    <div class="defect-total">62</div>
                  </div>
                  <div class="item-sidler">
                    <image class="icon" :src="warning" mode="widthFix"></image>
                    <div class="defect-text">异常</div>
                    <div class="defect-total">1</div>
                  </div>
                  <div class="item-sidler">
                    <image class="icon" :src="danger" mode="widthFix"></image>
                    <div class="defect-text">重大事故判定</div>
                    <div class="defect-total">0</div>
                  </div>
                </div>
                <div
                  v-if="result?.subTabList?.length"
                  class="cars-render-tab-container cars-render-tab-scrollable"
                >
                  <div class="cars-tab-scroll">
                    <div
                      v-for="(subTag, subTagIndex) in result.subTabList"
                      class="cars-tab isScroll"
                      :class="{ active: subTagIndex === result.curSubTabIndex }"
                      :key="subTagIndex"
                      @click="onClickSubTag(typeIndex, resultIndex, subTagIndex)"
                    >
                      <span class="cars-tab__text">{{ subTag }}</span>
                      <div
                        v-if="subTagIndex === result.curSubTabIndex"
                        class="tab-active-line"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="cars-render-tab-content">
                  <div class="result-list">
                    <template v-if="result?.justProblem || result.curSubTabIndex !== 0">
                      <div v-if="result?.filterList?.length" class="result-info">
                        <div
                          v-for="(subResultItem, subResultIndex) in result.filterList"
                          :key="subResultIndex"
                          class="result-item"
                          @click="
                            onClickWarningItem(typeIndex, resultIndex, subResultItem)
                          "
                        >
                          <div class="item-row">
                            <div class="row-left">
                              <image
                                class="arrow-icon"
                                :src="normal"
                                mode="widthFix"
                              ></image>
                              <div class="name">{{ subResultItem.name }}</div>
                            </div>
                            <div class="row-right"></div>
                          </div>
                        </div>
                      </div>
                      <view v-else>
                        <Empty :text="result.name + '没有问题项'" />
                      </view>
                    </template>
                    <div v-else class="result-info">
                      <div
                        v-for="(subResultItem, subResultIndex) in result.list"
                        :key="subResultIndex"
                        class="result-item"
                        @click="onClickWarningItem(typeIndex, resultIndex, subResultItem)"
                      >
                        <div class="item-row">
                          <div class="row-left">
                            <image
                              class="arrow-icon"
                              :src="normal"
                              mode="widthFix"
                            ></image>
                            <div class="name">{{ subResultItem.name }}</div>
                          </div>
                          <div class="row-right"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </view>
    </view>

    <div class="module">
      <div class="title"><h2>检测照片</h2></div>
      <div>
        <div class="ImageViewApp">
          <div class="middle">
            <div class="middleImg">
              <div class="me-image" style="width: 100%; height: 100%">
                <img
                  src="https://image-public.guazistatic.com/qnbdp7206xf850062988b941f99f5ce028d840e0f51772242791.jpg?x-bce-process=image/resize,p_50"
                  class="me-image__img"
                  style="object-fit: cover"
                />
              </div>
            </div>
            <div class="middleImg">
              <div class="me-image" style="width: 100%; height: 100%">
                <img
                  src="https://image-public.guazistatic.com/qnbdp7206x51b61019c17442df93064bc0a9f3b6ce1772242793.jpg?x-bce-process=image/resize,p_50"
                  class="me-image__img"
                  style="object-fit: cover"
                />
              </div>
            </div>
            <div class="middleImg lastDiv">
              <div class="me-image" style="width: 100%; height: 100%">
                <img
                  src="https://image-public.guazistatic.com/qnbdp7964x57dce77db3c7400fb7bcda0ad0c4b9991772242686.jpg?x-bce-process=image/resize,p_50"
                  class="me-image__img"
                  style="object-fit: cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="module">
      <div class="title">
        <h2>保障服务说明</h2>
        <i class="me-badge__wrapper me-icon me-icon-arrow"></i>
      </div>
      <div>
        温馨提示：瓜子检测检测标准符合国家二手车鉴定标准,如对检测标准有异议,或您需要对检测报告进行解读,请拨打4000606047咨询
      </div>
    </div>

    <PagePopup
      v-model:show="isShowStandard"
      alert
      innerScroll
      :title="currentStandard.name"
    >
      <rich-text :nodes="currentStandard.content"></rich-text>
    </PagePopup>

    <PagePopup
      v-model:show="isShowWarningItem"
      alert
      innerScroll
      :title="currentWarningItem.name"
    >
      <swiper
        class="swiper"
        circular
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <swiper-item>
          <view class="swiper-item uni-bg-red">A</view>
        </swiper-item>
      </swiper>
      {{ currentWarningItem.list }}
    </PagePopup>
  </view>
</template>

<script lang="ts" setup>
import normal from "@/static/images/yilian/icon_normal.png";
import warning from "@/static/images/yilian/icon_warning.png";
import danger from "@/static/images/yilian/icon_danger.png";
import tab0 from "@/static/images/yilian/tab_0.png";
import tab1 from "@/static/images/yilian/tab_1.jpg";
import tab2 from "@/static/images/yilian/tab_2.jpg";
import tab3 from "@/static/images/yilian/tab_3.svg";
import tab4 from "@/static/images/yilian/tab_4.svg";
import tab5 from "@/static/images/yilian/tab_5.svg";
import tab6 from "@/static/images/yilian/tab_6.svg";
import tab7 from "@/static/images/yilian/tab_7.png";
import tab8 from "@/static/images/yilian/tab_8.png";

import {
  standard,
  accident,
  soakInWaterList,
  fireList,
  leftList,
  carHead,
  rightList,
  carTailList,
  decorationList,
  cabinList,
} from "@/data/index";
import Empty from "@/components/common/Empty.vue";
import { useClickStandard, useClickWarningItem } from "./useClickHook";

let isClickScrolling = false; // 互斥锁：判断是否是点击触发的滚动
const instance = getCurrentInstance();

const sectionTops = ref([]); // 存放所有模块的绝对 top 坐标

const tabIndex = ref(0);

const allData = ref([
  {
    name: "事故检测",
    value: 0,
    isNormal: true,
    resultList: [
      {
        name: "事故检测",
        curSubTabIndex: 0,
        subTabList: ["全部", "前部", "右侧", "后部", "左侧"],
        list: accident.value,
        img: tab0,
        justProblem: false,
        filterList: [],
      },
    ],
    standard: standard.accident,
  },
  {
    name: "泡水检测",
    value: 1,
    isNormal: true,
    resultList: [
      {
        name: "泡水检测",
        curSubTabIndex: 0,
        subTabList: [],
        list: soakInWaterList.value,
        img: tab1,
        justProblem: false,
        filterList: [],
      },
    ],
    standard: standard.soakInWater,
  },
  {
    name: "火烧检测",
    value: 2,
    isNormal: true,
    resultList: [
      {
        name: "火烧检测",
        curSubTabIndex: 0,
        subTabList: [],
        list: fireList.value,
        img: tab2,
        justProblem: false,
        filterList: [],
      },
    ],
    standard: standard.fire,
  },
  {
    name: "车身外观",
    value: 3,
    isNormal: true,
    resultList: [
      {
        name: "驾驶侧",
        list: leftList.value,
        curSubTabIndex: 0,
        subTabList: [],
        img: tab3,
        justProblem: false,
        filterList: [],
      },
      {
        name: "车头",
        list: carHead.value,
        img: tab4,
        curSubTabIndex: 0,
        subTabList: [],
        justProblem: false,
        filterList: [],
      },
      {
        name: "副驾驶侧",
        list: rightList.value,
        img: tab5,
        curSubTabIndex: 0,
        subTabList: [],
        justProblem: false,
        filterList: [],
      },
      {
        name: "车尾",
        list: carTailList.value,
        img: tab6,
        curSubTabIndex: 0,
        subTabList: [],
        justProblem: false,
        filterList: [],
      },
    ],
    standard: standard.body,
  },
  {
    name: "内饰配置",
    value: 4,
    isNormal: true,
    resultList: [
      {
        name: "内饰配置",
        list: decorationList.value,
        img: tab7,
        curSubTabIndex: 0,
        subTabList: [],
        justProblem: false,
        filterList: [],
      },
    ],
    standard: standard.inside,
  },
  {
    name: "机舱工况",
    value: 5,
    isNormal: true,
    resultList: [
      {
        name: "机舱工况",
        list: cabinList.value,
        img: tab8,
        curSubTabIndex: 0,
        justProblem: false,
        subTabList: [],
        filterList: [],
      },
    ],
    standard: standard.cabin,
  },
]);

const tabData = computed(() => {
  return allData.value.map((item) => {
    return {
      name: item.name,
      value: item.value,
    };
  });
});

const onClickItem = (item, index) => {
  tabIndex.value = index;
  isClickScrolling = true; // 加锁，防止滚动过程中触发 IntersectionObserver 导致高亮错乱

  uni.pageScrollTo({
    selector: "#me-tab-" + index,
    duration: 300, // 滚动动画时长
    complete: () => {
      // 滚动结束后稍微延迟解锁
      setTimeout(() => {
        isClickScrolling = false;
      }, 100);
    },
  });
};

const onSwitch = (typeIndex, resultIndex, justProblem) => {
  allData.value[typeIndex].resultList[resultIndex].justProblem = !justProblem;
  filterList(typeIndex, resultIndex);
};

const filterList = (typeIndex, resultIndex) => {
  allData.value[typeIndex].resultList[resultIndex].filterList = allData.value[
    typeIndex
  ].resultList[resultIndex].list.filter((item) => {
    const curResultItem = allData.value[typeIndex].resultList[resultIndex];
    let flag = true;
    // 看看有没有选中 subTabList,有的话要匹配
    if (curResultItem?.subTabList?.length) {
      flag =
        curResultItem.subTabList[curResultItem.curSubTabIndex] === "全部" ||
        item.tag === curResultItem.subTabList[curResultItem.curSubTabIndex];
    }

    if (curResultItem.justProblem) {
      return !item.isNormal && flag;
    }
    return true && flag;
  });
};

const onClickSubTag = (typeIndex, resultIndex, subTagIndex) => {
  allData.value[typeIndex].resultList[resultIndex].curSubTabIndex = subTagIndex;
  filterList(typeIndex, resultIndex);
};

onMounted(() => {
  tabData.value.forEach((_, index) => {
    const observer = uni.createIntersectionObserver(instance.proxy);

    // relativeToViewport 定义视口。
    // top: -50 表示元素到达距离顶部 50px (通常是导航栏的高度) 时触发
    observer.relativeToViewport({ top: 100 }).observe("#me-tab-" + index, (res) => {
      // res.intersectionRatio > 0 表示元素进入了设定的视口范围
      if (res.intersectionRatio > 0 && !isClickScrolling) {
        tabIndex.value = index;
      }
    });
  });
});

const isFixed = ref(false); // 是否处于吸顶状态
const elementInitTop = ref(0); // 元素距离顶部的初始距离
const elementInitHeight = ref(0); // 元素的高度
const h5NavHeight = ref(0); // H5 端默认导航栏的高度

onReady(() => {
  // 1. 获取 H5 环境下的系统导航栏高度
  // 如果你在 pages.json 中设置了 "navigationStyle": "custom"，这个值会是 0
  const sysInfo = uni.getSystemInfoSync();
  h5NavHeight.value = sysInfo.windowTop || 0;

  // 2. 获取包裹器在页面中的初始位置
  // 注意：一定要在 onReady 中获取，确保 DOM 已经渲染完毕
  const query = uni.createSelectorQuery();
  query
    .select("#me-sticky")
    .boundingClientRect((data) => {
      if (data) {
        // 记录元素距离页面顶部的绝对高度
        elementInitTop.value = data.top;
        elementInitHeight.value = data.height;
      }
    })
    .exec();
});

// 3. 监听页面滚动事件
onPageScroll((e) => {
  // e.scrollTop 是当前页面滚动的距离
  // 触发条件：滚动距离 >= (元素初始位置 - 顶部导航栏高度)
  if (e.scrollTop >= elementInitTop.value - h5NavHeight.value) {
    if (!isFixed.value) isFixed.value = true;
  } else {
    if (isFixed.value) isFixed.value = false;
  }
});

const { currentStandard, isShowStandard, onClickStandard } = useClickStandard(allData);

const { currentWarningItem, isShowWarningItem, onClickWarningItem } = useClickWarningItem(
  allData
);
</script>

<style lang="scss" scoped>
.page-report {
  background-color: #2b3a4c;
  padding-bottom: 30rpx;
}

.me-tabs__line {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.me-tab--active .me-tabs__line {
  opacity: 1;
  visibility: visible;
}
</style>

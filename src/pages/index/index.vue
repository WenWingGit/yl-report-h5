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
    <div v-if="reportInfo" class="report-brief">
      <div class="report-header__content">
        <div class="check-content">
          <div class="report-info">
            <div class="logo">
              <image
                class="logo-img"
                src="/static/images/yilian/logo1.svg"
                mode="widthFix"
              ></image>
            </div>
            <p class="report-no">报告编号: {{ reportInfo?.number }}</p>
          </div>
          <div class="car-card">
            <div class="me-image car-photo" style="overflow: hidden; border-radius: 4px">
              <image
                class="me-image__img"
                :src="reportInfo.carMainImg"
                mode="widthFix"
              ></image>
            </div>
            <div class="car-info">
              <p class="title">{{ reportInfo.brandThirdText }}</p>
              <p class="car-info__desc">VIN: {{ reportInfo.carVin }}</p>
              <p class="car-info__desc">
                {{ reportInfo.carPurchaseTime }} |
                {{ reportInfo.carMileage }}万公里（表显里程）
              </p>
            </div>
          </div>
          <div class="detection-overview-card detection-overview-card-insured">
            <image
              class="detection-overview-card-img"
              src="/static/images/yilian/carInsure-7d1aa9f1.png"
              mode="widthFix"
            ></image>
            <div v-if="reportInfoCount" class="card-content">
              <div class="conclusion">
                <div class="item">
                  <image
                    class="item-img"
                    src="/static/images/yilian/qnbdp169060989292497c7deb9e47c5ad954cd79ce0a0381066.png"
                    alt=""
                    mode="widthFix"
                  >
                  </image>
                  <p class="total">共{{ reportInfoCount[0].count }}项</p>
                  <p class="desc">{{ reportInfoCount[0].resultName }}</p>
                </div>
                <div class="item">
                  <image
                    class="item-img"
                    src="/static/images/yilian/qnbdp16906099181b3c6fc1025244fcb9c092ced5a7c3a71066.png"
                    alt=""
                    mode="widthFix"
                  >
                  </image>
                  <p class="total">共{{ reportInfoCount[1].count }}项</p>
                  <p class="desc">{{ reportInfoCount[1].resultName }}</p>
                </div>
                <div class="item">
                  <image
                    class="item-img"
                    src="/static/images/yilian/qnbdp16906099500cac95b468bc454e8b14663f3db1ed9e1066.png"
                    alt=""
                    mode="widthFix"
                  >
                  </image>
                  <p class="total">共{{ reportInfoCount[2].count }}项</p>
                  <p class="desc">{{ reportInfoCount[2].resultName }}</p>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <span
                  >检测师<i>{{ reportInfo.inspector }}</i></span
                >
              </li>
              <li>
                <span
                  >检测日期<i>{{ reportInfo.updatedTime }}</i></span
                >
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
          <div v-for="(type, typeIndex) in allData" class="me-tab__panel">
            <div
              class="me-tab-location"
              :id="'me-tab-' + typeIndex"
              :style="{ marginTop: '-' + elementInitHeight + 'px' }"
            ></div>
            <div :style="{ paddingBottom: elementInitHeight + 'px' }"></div>
            <div class="detection-item">
              <div class="detection-title">
                <image
                  class="detection-title-img"
                  src="/static/images/yilian/title-bg.png"
                  mode="widthFix"
                ></image>
                <div class="detection-title-left">
                  <h2>{{ type.name }}</h2>
                  <span
                    v-if="type.tagInfo?.name"
                    class="me-tag detection-title-tag"
                    :style="{ background: type.tagInfo?.color }"
                    >{{ type.tagInfo?.name }}</span
                  >
                </div>
                <span class="assess" @click="onClickStandard(typeIndex, type.category)">
                  <span>判定标准</span>
                  <i class="me-badge__wrapper me-icon me-icon-arrow"></i>
                </span>
              </div>
              <div
                v-for="(result, resultIndex) in type.resultList"
                :key="resultIndex"
                class="detection-content"
              >
                <div class="item-desc">
                  <div class="normal-num">
                    <h2 v-if="type.resultList?.length > 1">{{ result.name }}</h2>
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
                  <image
                    :id="result.imgIdName"
                    class="img"
                    :src="result.img"
                    mode="widthFix"
                  ></image>
                </div>

                <!-- 子的 -->
                <div v-if="result?.problemList?.length" class="defect-item-rows">
                  <div class="defect-item">
                    <div
                      v-for="(problemItem, problemIndex) in result?.problemList"
                      :key="problemIndex"
                      class="item-sidler"
                    >
                      <image class="icon" :src="problemItem.url" mode="widthFix"></image>
                      <div class="defect-text">{{ problemItem?.resultName }}</div>
                      <div class="defect-total">{{ problemItem?.count || 0 }}</div>
                    </div>
                  </div>
                </div>
                <div v-else-if="type?.problemList?.length" class="defect-item-rows">
                  <div class="defect-item">
                    <div
                      v-for="(problemItem, problemIndex) in type?.problemList"
                      :key="problemIndex"
                      class="item-sidler"
                    >
                      <image class="icon" :src="problemItem.url" mode="widthFix"></image>
                      <div class="defect-text">{{ problemItem?.resultName }}</div>
                      <div class="defect-total">{{ problemItem?.count || 0 }}</div>
                    </div>
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
                            onClickWarningItem(
                              carInspectionId,
                              !subResultItem.isNormal || subResultItem.historyRepairIcon,
                              subResultItem
                            )
                          "
                        >
                          <div class="item-row">
                            <div class="row-left">
                              <image
                                class="arrow-icon"
                                :src="subResultItem.icon"
                                mode="widthFix"
                              ></image>
                              <div class="name">{{ subResultItem.name }}</div>
                            </div>
                            <div class="row-right">
                              <img
                                v-if="subResultItem.historyRepairIcon"
                                class="arrow"
                                :src="subResultItem.historyRepairIcon"
                              />
                              <i
                                v-if="
                                  !subResultItem.isNormal ||
                                  subResultItem.historyRepairIcon
                                "
                                class="me-badge__wrapper me-icon me-icon-arrow arrow-return"
                              ></i>
                            </div>
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
                        @click="
                          onClickWarningItem(
                            carInspectionId,
                            !subResultItem.isNormal || subResultItem.historyRepairIcon,
                            subResultItem
                          )
                        "
                      >
                        <div class="item-row">
                          <div class="row-left">
                            <image
                              class="arrow-icon"
                              :src="subResultItem.icon"
                              mode="widthFix"
                            ></image>
                            <div class="name">{{ subResultItem.name }}</div>
                          </div>
                          <div class="row-right">
                            <img
                              v-if="subResultItem.historyRepairIcon"
                              class="arrow"
                              :src="subResultItem.historyRepairIcon"
                            />
                            <i
                              v-if="
                                !subResultItem.isNormal || subResultItem.historyRepairIcon
                              "
                              class="me-badge__wrapper me-icon me-icon-arrow arrow-return"
                            ></i>
                          </div>
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

    <div class="module" @click="showAllPic">
      <div class="title"><h2>检测照片</h2></div>
      <div>
        <div class="ImageViewApp">
          <div class="middle">
            <div v-for="item in allPhotos" :key="item.url" class="middleImg lastDiv">
              <div class="me-image" style="width: 100%; height: 100%">
                <image :src="item.url" class="me-image__img" style="object-fit: cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="module">
      <div class="title">
        <h2>保障服务说明</h2>
        <i class="me-badge__wrapper me-icon me-icon-arrow" @click="goAfterSales"></i>
      </div>
      <div>
        {{ tips }}
      </div>
    </div>

    <!--  -->
    <div class="fixed-layer home-live-box" @click="toTop">
      <div class="live-border1"></div>
      <div class="live-wrap fold">
        <!---->
        <div class="live__avatar">
          <img class="return" src="/static/images/yilian/totop.png" />
        </div>
        <!-- <div class="live__text" style="">
          <p class="subtitle">返回顶部</p>
        </div> -->
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
      <PicSwiper
        :list="currentWarningItem.list"
        :initIndex="currentListIndex"
        @change="handleCardChange"
      />
    </PagePopup>

    <PagePopup
      v-model:show="isShowAllPic"
      alert
      max-height="80vh"
      inner-scroll
      title="检测照片"
    >
      <view class="h-80vh">
        <AllPic :car-inspection-id="carInspectionId" />
      </view>
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
  WxMinApiCarInspectionGetDtoByCarIdGet,
  WxMinApiCarInspectionGetCarInspectionCategoryOptionCountStaGet,
  WxMinApiCarInspectionGetCarInspectionOptionResultListGet,
  WxMinApiCarInspectionGetCarInspectionPhotoListGet,
  WxMinApiCarInspectionCriterionGetDtoByCategoryGet,
  WxMinApiSettingSetCarInspectionTipGet,
  WxMinApiSettingGuaranteeServiceDescriptionGet,
  GetCarInspectionCountStaList,
  GetCarInspectionProblemListGet,
} from "@/service/carInspection";
import Empty from "@/components/common/Empty.vue";
import { useClickStandard, useClickWarningItem } from "./useClickHook";
import PicSwiper from "@/components/business/PicSwiper.vue";
import AllPic from "@/components/business/AllPic.vue";
import { useMessage } from "wot-design-uni";
import { fullUrl } from "@/utils/utils";
import { handleReport } from "./help";
import {
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
import { isNumber } from "wot-design-uni/components/common/util";
import { getItemClass } from "wot-design-uni/components/wd-calendar-view/utils";

let isClickScrolling = false; // 互斥锁：判断是否是点击触发的滚动
const instance = getCurrentInstance();

const sectionTops = ref([]); // 存放所有模块的绝对 top 坐标

const tagNameList = {
  accident,
  soakInWaterList,
  fireList,
  leftList,
  carHead,
  rightList,
  carTailList,
  decorationList,
  cabinList,
};

const tabIndex = ref(0);

const allData = ref([
  {
    name: "事故检测",
    value: 0,
    category: 1,
    tagInfo: {},
    problemList: [],
    resultList: [
      {
        name: "事故检测",
        curSubTabIndex: 0,
        subTabList: ["全部", "前部", "右侧", "后部", "左侧"],
        list: [],
        img: tab0,
        justProblem: false,
        filterList: [],
        tagName: "accident",
        imgIdName: "",
      },
    ],
    standard: [],
  },
  {
    name: "泡水检测",
    value: 1,
    category: 2,
    tagInfo: {},
    problemList: [],
    resultList: [
      {
        name: "泡水检测",
        curSubTabIndex: 0,
        subTabList: [],
        list: [],
        img: tab1,
        justProblem: false,
        filterList: [],
        tagName: "soakInWaterList",
        imgIdName: "",
      },
    ],
    standard: [],
  },
  {
    name: "火烧检测",
    value: 2,
    category: 3,
    tagInfo: {},
    resultList: [
      {
        name: "火烧检测",
        curSubTabIndex: 0,
        subTabList: [],
        list: [],
        img: tab2,
        justProblem: false,
        filterList: [],
        tagName: "fireList",
        imgIdName: "",
      },
    ],
    standard: [],
  },
  {
    name: "车身外观",
    value: 3,
    category: 4,
    tagInfo: {},
    resultList: [
      {
        name: "驾驶侧",
        list: [],
        curSubTabIndex: 0,
        subTabList: [],
        img: tab3,
        justProblem: false,
        filterList: [],
        tagName: "leftList",
        imgIdName: "driving-seat",
        tabKey: 5,
      },
      {
        name: "车头",
        list: [],
        img: tab4,
        curSubTabIndex: 0,
        subTabList: [],
        justProblem: false,
        filterList: [],
        tagName: "carHead",
        imgIdName: "svg-head",
        tabKey: 6,
      },
      {
        name: "副驾驶侧",
        list: [],
        img: tab5,
        curSubTabIndex: 0,
        subTabList: [],
        justProblem: false,
        filterList: [],
        tagName: "rightList",
        imgIdName: "front-passenger-seat",
        tabKey: 7,
      },
      {
        name: "车尾",
        list: [],
        img: tab6,
        curSubTabIndex: 0,
        subTabList: [],
        justProblem: false,
        filterList: [],
        tagName: "carTailList",
        imgIdName: "svg-trail",
        tabKey: 8,
      },
    ],
    standard: [],
  },
  {
    name: "内饰配置",
    value: 4,
    category: 5,
    tagInfo: {},
    resultList: [
      {
        name: "内饰配置",
        list: [],
        img: tab7,
        curSubTabIndex: 0,
        subTabList: [],
        justProblem: false,
        filterList: [],
        tagName: "decorationList",
        imgIdName: "",
      },
    ],
    standard: [],
  },
  {
    name: "机舱工况",
    value: 5,
    category: 6,
    tagInfo: {},
    resultList: [
      {
        name: "机舱工况",
        list: [],
        img: tab8,
        curSubTabIndex: 0,
        justProblem: false,
        subTabList: [],
        filterList: [],
        tagName: "cabinList",
        imgIdName: "",
      },
    ],
    standard: [],
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

const carId = ref(0);
const carInspectionId = ref(0);
const message = useMessage();

const reportInfo = ref();
const reportInfoCount = ref();
const allPhotos = ref([]);
const tips = ref("");

onLoad(async (options) => {
  if (!options.carId) {
    message.alert("无法查看该车辆");
    return "";
  }
  carId.value = options.carId;
  // 调用接口获取数据
  try {
    // 获取车辆检测报告
    const carInspectionReport = await WxMinApiCarInspectionGetDtoByCarIdGet(carId.value);

    loadTipText();

    await loadCarReport();
    await loadPhotoList();
    await loadAllReportList();
    await loadAllReportCount();
    await loadReportCount();

    await setTimeout(async () => {
      await onReadyDom();
    }, 1200);
  } catch (error) {
    console.error("获取车辆检测数据失败:", error);
  }
});

async function loadReportCount() {
  const res = await WxMinApiCarInspectionGetCarInspectionCategoryOptionCountStaGet(
    carInspectionId.value
  );
  if (res?.data) {
    const list = res?.data || [];
    list.forEach((item, index) => {
      if (item.category) {
        allData.value[item.category - 1].category = item.category;
        allData.value[item.category - 1].tagInfo = {
          name: item?.resultName,
          color: item?.resultColor,
        };
      }
    });
    reportInfoCount.value = list.filter((item) => {
      return [1, 2, 3].includes(item.category);
    });
  }
}

async function loadAllReportList() {
  const promiseMap = [1, 2, 3, 4, 5, 6].map((item) => {
    return WxMinApiCarInspectionGetCarInspectionOptionResultListGet(
      carInspectionId.value,
      0,
      item
    );
  });

  Promise.all(promiseMap).then((res) => {
    res?.map((item, index) => {
      if (item?.success && item?.data) {
        allData.value[index].resultList.forEach((resultItem) => {
          const mockList = tagNameList[resultItem.tagName];
          const list = item?.data
            .filter((_dataItem) => {
              return mockList.find((mockItem) => {
                return _dataItem.name === mockItem.name;
              });
            })
            .map((_dataItem) => {
              const mockItem = mockList.find((mockItem) => {
                return _dataItem.name === mockItem.name;
              });
              return {
                id: _dataItem.id,
                name: _dataItem.name,
                tag: mockItem?.tag || "",
                isNormal: _dataItem?.overallResultName === "通过",
                historyRepairIcon: fullUrl(_dataItem?.historyRepairIcon),
                icon: fullUrl(_dataItem?.overallResultIcon),
              };
            });
          console.log({ list });
          resultItem.list = list;
        });
      }
    });
  });
}

async function loadAllReportCount() {
  const res = await GetCarInspectionCountStaList(carInspectionId.value);
  if (res?.success) {
    const list = res?.data ?? [];
    list.forEach((item) => {
      const allDataItem = allData.value.find(
        (allDataItem) => allDataItem.category === item?.category
      );
      if (allDataItem) {
        if (allDataItem.category === 4) {
          allDataItem.resultList.forEach((resultItem, resultIndex) => {
            if (resultItem.tabKey === item.location) {
              resultItem.problemList = item.countList
                .filter((countItem) => countItem?.count)
                .map((countItem) => {
                  return {
                    ...countItem,
                    url: fullUrl(countItem.resultIcon),
                  };
                });
            }
          });
        } else {
          allDataItem.problemList = item.countList
            .filter((countItem) => countItem?.count)
            .map((countItem) => {
              return {
                ...countItem,
                url: fullUrl(countItem.resultIcon),
              };
            });
        }
      }
    });
  }
}

async function loadCarReport() {
  const res = await WxMinApiCarInspectionGetDtoByCarIdGet(carId.value);
  if (res.data?.id) {
    carInspectionId.value = res.data?.id;
    reportInfo.value = handleReport(res?.data);
  }
}

async function loadPhotoList() {
  const res = await WxMinApiCarInspectionGetCarInspectionPhotoListGet(
    carInspectionId.value,
    0
  );
  if (res?.data) {
    allPhotos.value = res?.data.slice(0, 3).map((item) => {
      return {
        label: item.description,
        url: fullUrl(item?.imgStr),
      };
    });
  }
}

async function loadTipText() {
  // 获取车辆检测温馨提示
  const tipsRes = await WxMinApiSettingSetCarInspectionTipGet();
  tips.value = tipsRes?.data;
}

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

const isFixed = ref(false); // 是否处于吸顶状态
const elementInitTop = ref(0); // 元素距离顶部的初始距离
const elementInitHeight = ref(0); // 元素的高度
const h5NavHeight = ref(0); // H5 端默认导航栏的高度

function onReadyDom() {
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
}

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

const toTop = () => {
  uni.pageScrollTo({
    scrollTop: 0,
    duration: 300,
  });
};

const { currentStandard, isShowStandard, onClickStandard } = useClickStandard(allData);

const {
  currentWarningItem,
  isShowWarningItem,
  onClickWarningItem,
} = useClickWarningItem();

const currentListIndex = ref(0);

const handleCardChange = () => {};

const isShowAllPic = ref(false);
const showAllPic = () => {
  isShowAllPic.value = true;
};

const goAfterSales = () => {
  uni.navigateTo({
    url: "/pages/index/afterSales",
  });
};
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

.defect-item-rows {
  overflow-x: auto;
  overflow-y: hidden;
}
.defect-item {
  min-width: 100%;
  width: fit-content;
  white-space: nowrap;
}
.me-tab-location {
  position: relative;
}

.fixed-layer {
  z-index: 999;
}
</style>

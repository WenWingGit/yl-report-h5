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
        <div>
          <div class="me-sticky">
            <div>
              <div class="me-tabs__wrap me-tabs__wrap--scrollable">
                <div
                  class="me-tabs__nav me-tabs__nav--line me-tabs__nav--complete"
                  style="background: transparent"
                >
                  <view
                    v-for="(item, index) in tabData"
                    :id="'me-tabs-1-' + index"
                    role="tab"
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
                  </view>
                  <view
                    class="me-tabs__line"
                    style="
                      transform: translateX(63px) translateX(-50%);
                      transition-duration: 0.3s;
                    "
                  ></view>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="me-tabs__content">
          <div
            id="me-tab-2"
            role="tabpanel"
            class="me-tab__panel"
            tabindex="0"
            aria-labelledby="me-tabs-1-0"
          >
            <div class="detection-item">
              <div class="detection-title">
                <image
                  class="detection-title-img"
                  src="/static/images/yilian/title-bg.png"
                  mode="widthFix"
                >
                </image>
                <div class="detection-title-left">
                  <h2>事故检测</h2>
                  <span class="me-tag me-tag--primary detection-title-tag">
                    非重大事故
                    <!---->
                  </span>
                </div>
                <span class="assess">
                  判定标准
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
                      tabindex="0"
                      aria-checked="false"
                      style="font-size: 20px"
                    >
                      <div class="me-switch__node"></div>
                    </div>
                  </div>
                  <image
                    src="/static/images/yilian/qnbdp16906202696d3959d72b204c79a15eacee7baf27c11066.png"
                    mode="widthFix"
                  >
                  </image>
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
                <div class="cars-render-tab-container cars-render-tab-scrollable">
                  <div class="cars-tab-scroll">
                    <div class="cars-tab active isScroll">
                      <span class="cars-tab__text">
                        全部
                        <!---->
                      </span>
                      <div class="tab-active-line"></div>
                    </div>
                    <div class="cars-tab isScroll">
                      <span class="cars-tab__text">前部</span>
                    </div>
                    <div class="cars-tab isScroll">
                      <span class="cars-tab__text"> 右侧 </span>
                    </div>
                    <div class="cars-tab isScroll">
                      <span class="cars-tab__text"> 后部 </span>
                    </div>
                    <div class="cars-tab isScroll">
                      <span class="cars-tab__text"> 左侧 </span>
                    </div>
                  </div>
                </div>
                <div class="cars-render-tab-content">
                  <div>
                    <div class="result-list">
                      <div class="result-info">
                        <div
                          v-for="(item, index) in one"
                          :key="index"
                          class="result-item"
                        >
                          <div class="item-row">
                            <div class="row-left">
                              <image
                                class="arrow-icon"
                                :src="normal"
                                mode="widthFix"
                              ></image>
                              <div class="name">{{ item.name }}</div>
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

const tabIndex = ref(0);

const tabData = ref([
  {
    name: "事故检测",
    value: 0,
    curSubTabIndex: 0,
    subTabList: ["全部", "前部", "右侧", "后部", "左侧"],
    isNormal: true,
  },
  {
    name: "泡水检测",
    value: 1,
    curSubTabIndex: 0,
    subTabList: [],
    isNormal: true,
  },
  {
    name: "火烧检测",
    value: 2,
    curSubTabIndex: 0,
    subTabList: [],
    isNormal: true,
  },
  {
    name: "车身外观",
    value: 3,
    curSubTabIndex: 0,
    subTabList: [],
    isNormal: true,
  },
  {
    name: "内饰配置",
    value: 4,
    curSubTabIndex: 0,
    subTabList: [],
    isNormal: true,
  },
  {
    name: "机舱工况",
    value: 5,
    curSubTabIndex: 0,
    subTabList: [],
    isNormal: true,
  },
]);

const onClickItem = (item, index) => {
  tabIndex.value = index;
};
</script>

<style lang="scss" scoped>
.page-report {
  background-color: #2b3a4c;
  padding-bottom: 30rpx;
}
</style>

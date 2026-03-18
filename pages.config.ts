import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    // navigationStyle: 'default',
    navigationStyle: 'custom',
    navigationBarTitleText: '易联汽车账单',
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
    pageOrientation: 'default',
    // pageOrientation: [
    //   // 竖屏正方向
    //   'portrait-primary',
    //   // 竖屏反方向
    //   'portrait-secondary',
    //   // 横屏正方向
    //   'landscape-primary',
    //   // 横屏反方向
    //   'landscape-secondary',
    //   // 自然方向
    //   'default',
    // ],
    // rpxCalcMaxDeviceWidth: 960, // rpx 计算所支持的最大设备宽度，单位 px，默认值为 960
    // rpxCalcBaseDeviceWidth: 375, // rpx 计算使用的基准设备宽度，设备实际宽度超出 rpx 计算所支持的最大设备宽度时将按基准宽度计算，单位 px，默认值为 375
    // rpxCalcIncludeWidth: 750, // rpx 计算特殊处理的值，始终按实际的设备宽度计算，单位 rpx，默认值为 750
    bounce: 'none', // 禁止页面回弹
    pullToRefresh: {
      color: '#1d2088',
    },
  },
  easycom: {
    autoscan: true,
    custom: {
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
    },
  },
  tabBar: {
    color: '#999999',
    selectedColor: '#1a1a1a',
    backgroundColor: '#ffffff',
    borderStyle: '#f4f4f4',
    height: '52px',
    fontSize: '11px',
    iconWidth: '18px',
    spacing: '3px',
    list: [],
  },
})

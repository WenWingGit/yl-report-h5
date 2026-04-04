import { http } from '@/utils/http'

// 响应接口
export interface WxMinApiCarInspectionGetDtoByCarIdGetRes {
  /*执行成功 */
  success: boolean;

  /*状态码 */
  code: number;

  /*错误信息 */
  message: string;

  /* */
  data: {
    /*主键Id */
    id: number;

    /*创建者Id */
    createdUserId: number;

    /*创建时门店Id */
    createdStoreId: number;

    /*实际所属门店Id */
    affiliatedStoreId: number;

    /*实际所属人Id */
    affiliatedUserId: number;

    /*更新时间 */
    updatedTime: Record<string, unknown>;

    /*更新时间时间戳 */
    updatedTimestamp: number;

    /*编号 */
    number: string;

    /*车辆Id */
    carId: number;

    /*检测师 */
    inspector: string;

    /*检测时间 */
    inspectionDate: Record<string, unknown>;

    /*类别检测结果1 */
    categoryResult1: number;

    /*类别检测结果2 */
    categoryResult2: number;

    /*类别检测结果3 */
    categoryResult3: number;

    /*类别检测结果4 */
    categoryResult4: number;

    /*类别检测结果5 */
    categoryResult5: number;

    /*类别检测结果6 */
    categoryResult6: number;

    /*类别检测结果1 */
    categoryResultName1: string;

    /*类别检测结果2 */
    categoryResultName2: string;

    /*类别检测结果3 */
    categoryResultName3: string;

    /*类别检测结果4 */
    categoryResultName4: string;

    /*类别检测结果5 */
    categoryResultName5: string;

    /*类别检测结果6 */
    categoryResultName6: string;

    /*类别检测结果颜色1 */
    categoryResultColor1: string;

    /*类别检测结果颜色2 */
    categoryResultColor2: string;

    /*类别检测结果颜色3 */
    categoryResultColor3: string;

    /*类别检测结果颜色4 */
    categoryResultColor4: string;

    /*类别检测结果颜色5 */
    categoryResultColor5: string;

    /*类别检测结果颜色6 */
    categoryResultColor6: string;

    /*车辆车牌号 */
    carPlateNumber: string;

    /*车辆品牌 */
    brandText: string;

    /*车辆车系 */
    brandMinText: string;

    /*车辆车型 */
    brandThirdText: string;

    /*车辆Vin */
    carVin: string;

    /*车辆表显里程 */
    carMileage: Record<string, unknown>;

    /*车辆采购时间 */
    carPurchaseTime: Record<string, unknown>;

    /*车辆主图 */
    carMainImg: string;

    /*车辆文本 */
    carText: string;

    /* */
    createdTime: Record<string, unknown>;

    /* */
    inspectionDateStr: string;
  };

  /*附加数据 */
  extras: string;

  /*时间戳 */
  timestamp: number;

  /*是否是自定返回值 */
  __abp: boolean;
}

/** 
 * 根据车辆Id获取车辆报告
 * @param {string} carId 
  * @returns
 */
export function WxMinApiCarInspectionGetDtoByCarIdGet(carId: number): Promise<WxMinApiCarInspectionGetDtoByCarIdGetRes> {
  return http.get(`/WxMinApi/CarInspection/GetDtoByCarId?carId=${carId}`);
}




// 响应接口
export interface WxMinApiCarInspectionGetCarInspectionCategoryOptionCountStaGetRes {
  /*执行成功 */
  success: boolean;

  /*状态码 */
  code: number;

  /*错误信息 */
  message: string;

  /*数据 */
  data: {
    /* */
    category: {};

    /*数量 */
    count: number;

    /*类别的检测结果Mid */
    result: number;

    /*类别的检测结果名称 */
    resultName: string;

    /*类别的检测结果颜色 */
    resultColor: string;
  }[];

  /*附加数据 */
  extras: string;

  /*时间戳 */
  timestamp: number;

  /*是否是自定返回值 */
  __abp: boolean;
}

/** 
 * 根据类别统计检测项数量
 * @param {string} CarInspectionId 检测报告Id
  * @returns
 */
export function WxMinApiCarInspectionGetCarInspectionCategoryOptionCountStaGet(CarInspectionId: number): Promise<WxMinApiCarInspectionGetCarInspectionCategoryOptionCountStaGetRes> {
  return http.get(`/WxMinApi/CarInspection/GetCarInspectionCategoryOptionCountSta?CarInspectionId=${CarInspectionId}`);
}


// 响应接口
export interface WxMinApiCarInspectionGetCarInspectionOptionResultListGetRes {
  /*执行成功 */
  success: boolean;

  /*状态码 */
  code: number;

  /*错误信息 */
  message: string;

  /*数据 */
  data: {
    /*主键Id */
    id: number;

    /*创建者Id */
    createdUserId: number;

    /*创建时门店Id */
    createdStoreId: number;

    /*实际所属门店Id */
    affiliatedStoreId: number;

    /*实际所属人Id */
    affiliatedUserId: number;

    /*更新时间 */
    updatedTime: Record<string, unknown>;

    /*更新时间时间戳 */
    updatedTimestamp: number;

    /* */
    category: {};

    /* */
    location: {};

    /*名称 */
    name: string;

    /* */
    createdTime: Record<string, unknown>;

    /*检测结果（权重最大的值） */
    overallResult: number;

    /*检测结果名称 */
    overallResultName: string;

    /*检测结果图标 */
    overallResultIcon: string;

    /*检测结果权重 */
    overallResultLevel: number;

    /*是否有历史修复 */
    hasHistoryRepair: boolean;

    /*历史修复图标 */
    historyRepairIcon: string;

    /*检测结果图标缩略图 */
    overallResultIconThPath: string;

    /*检测结果图标缩略图 */
    historyRepairIconThPath: string;
  }[];

  /*附加数据 */
  extras: string;

  /*时间戳 */
  timestamp: number;

  /*是否是自定返回值 */
  __abp: boolean;
}

/** 
 * 获取带结果的检测项列表
 * @param {string} CarInspectionId 检测报告Id
  * @param {string} OnlyProblemOption 仅问题项，为1时生效
  * @param {string} Category 检测类别<br />&nbsp; 未知 = 0<br />&nbsp;事故检测 事故检测 = 1<br />&nbsp;泡水检测 泡水检测 = 2<br />&nbsp;火烧检测 火烧检测 = 3<br />&nbsp;车身外观 车身外观 = 4<br />&nbsp;内饰配置 内饰配置 = 5<br />&nbsp;机舱工况 机舱工况 = 6<br />
  * @returns
 */
export function WxMinApiCarInspectionGetCarInspectionOptionResultListGet(CarInspectionId: number, OnlyProblemOption: number, Category: object): Promise<WxMinApiCarInspectionGetCarInspectionOptionResultListGetRes> {
  return http.get(`/WxMinApi/CarInspection/GetCarInspectionOptionResultList?CarInspectionId=${CarInspectionId}&OnlyProblemOption=${OnlyProblemOption}&Category=${Category}`);
}




// 响应接口
export interface WxMinApiCarInspectionGetCarInspectionPhotoListGetRes {
  /*执行成功 */
  success: boolean;

  /*状态码 */
  code: number;

  /*错误信息 */
  message: string;

  /*数据 */
  data: {
    /*图片 */
    imgStr: string;

    /*描述 */
    description: string;
  }[];

  /*附加数据 */
  extras: string;

  /*时间戳 */
  timestamp: number;

  /*是否是自定返回值 */
  __abp: boolean;
}

/** 
 * 检测图片列表
 * @param {string} CarInspectionId 检测报告Id
  * @param {string} PhotoType <br />&nbsp; 未知 = 0<br />&nbsp; 基础照片 = 1<br />&nbsp; 留底照片 = 2<br />&nbsp; 异常照片 = 3<br />
  * @returns
 */
export function WxMinApiCarInspectionGetCarInspectionPhotoListGet(CarInspectionId: number, PhotoType: number): Promise<WxMinApiCarInspectionGetCarInspectionPhotoListGetRes> {
  return http.get(`/WxMinApi/CarInspection/GetCarInspectionPhotoList?CarInspectionId=${CarInspectionId}&PhotoType=${PhotoType}`);
}


// 响应接口
export interface WxMinApiCarInspectionCriterionGetDtoByCategoryGetRes {
  /*执行成功 */
  success: boolean;

  /*状态码 */
  code: number;

  /*错误信息 */
  message: string;

  /* */
  data: {
    /*主键Id */
    id: number;

    /*创建者Id */
    createdUserId: number;

    /*创建时门店Id */
    createdStoreId: number;

    /*实际所属门店Id */
    affiliatedStoreId: number;

    /*实际所属人Id */
    affiliatedUserId: number;

    /*更新时间 */
    updatedTime: Record<string, unknown>;

    /*更新时间时间戳 */
    updatedTimestamp: number;

    /* */
    category: {};

    /*内容 */
    content: string;

    /* */
    createdTime: Record<string, unknown>;
  };

  /*附加数据 */
  extras: string;

  /*时间戳 */
  timestamp: number;

  /*是否是自定返回值 */
  __abp: boolean;
}

/** 
 * 根据类别获取单个记录
 * @param {string} category 检测类别<br />&nbsp; 未知 = 0<br />&nbsp;事故检测 事故检测 = 1<br />&nbsp;泡水检测 泡水检测 = 2<br />&nbsp;火烧检测 火烧检测 = 3<br />&nbsp;车身外观 车身外观 = 4<br />&nbsp;内饰配置 内饰配置 = 5<br />&nbsp;机舱工况 机舱工况 = 6<br />
  * @returns
 */
export function WxMinApiCarInspectionCriterionGetDtoByCategoryGet(category: object): Promise<WxMinApiCarInspectionCriterionGetDtoByCategoryGetRes> {
  return http.get(`/WxMinApi/CarInspectionCriterion/GetDtoByCategory?category=${category}`);
}



// 响应接口
export interface WxMinApiSettingSetCarInspectionTipGetRes {
  /*执行成功 */
  success: boolean;

  /*状态码 */
  code: number;

  /*错误信息 */
  message: string;

  /*数据 */
  data: string;

  /*附加数据 */
  extras: string;

  /*时间戳 */
  timestamp: number;

  /*是否是自定返回值 */
  __abp: boolean;
}

/** 
 * 车辆检测温馨提示
 * @returns
 */
export function WxMinApiSettingSetCarInspectionTipGet(): Promise<WxMinApiSettingSetCarInspectionTipGetRes> {
  return http.get(`/WxMinApi/Setting/SetCarInspectionTip`);
}



// 响应接口
export interface WxMinApiSettingGuaranteeServiceDescriptionGetRes {
  /*执行成功 */
  success: boolean;

  /*状态码 */
  code: number;

  /*错误信息 */
  message: string;

  /*数据 */
  data: string;

  /*附加数据 */
  extras: string;

  /*时间戳 */
  timestamp: number;

  /*是否是自定返回值 */
  __abp: boolean;
}

/** 
 * 车辆检测保障服务说明
 * @returns
 */
export function WxMinApiSettingGuaranteeServiceDescriptionGet(): Promise<WxMinApiSettingGuaranteeServiceDescriptionGetRes> {
  return http.get(`/WxMinApi/Setting/GuaranteeServiceDescription`);
}

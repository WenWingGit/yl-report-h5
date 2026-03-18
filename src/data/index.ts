export const standard = {
  shigu: `<div class="content">1、本合同所指的“重大事故车”是指车辆结构部件受到一定程度的损伤且经过修复仍旧不能恢复全部性能的车辆的总称，具体判定规则标准如下：<br>2、事故车判定规则：<br>（1）车身结构部件检测项存在严重变形、严重钣金、切割、焊接、更换等维修经历或对应维修手段（指钣金、切割、焊接、更换）遗留的维修痕迹时，判定车辆存在事故风险；<br>（2）下表中任一检测项存在对应缺陷结果栏中的任何一项缺陷时，即判定为“重大事故车”，但“改装损伤”除外；<br>（3）针对车身结构件因改装发生状态改变的情况（仅限于改装打孔情况，且打孔直径≤3cm），该检测项将标记为“改装损伤”，存在改装损伤的车辆不定义为重大事故车，因改装进行过切割、焊接或改装部位发生变形、撕裂（包括打孔后孔眼撕裂）的，按照具体部位的对应标准执行。<br>注：不同部件/部位存在缺陷需要描述程度时，不同的部件/部位对“严重”的概念将予以单独标注，未予描述的则不区分缺陷的程度。</div>
  <img src="/shigu.jpg"/>`,
}

// 事故检测
export const accident = ref([
  {
    name: '左C柱内侧',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '左侧顶边梁内侧',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '右B柱内侧',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '右C柱内侧',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '右A柱内侧',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '左A柱内侧',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '左B柱内侧',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '右侧顶边梁内侧',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: 'VIN码',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '左侧车顶边梁覆盖面',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '左B柱铰链',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '左后尾灯框架',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '左后翼子板内骨架',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '左后减震器座',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '右后减震器座',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '右侧车顶边梁覆盖面',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '右前翼子板内骨架',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '左A柱铰链',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '右后尾灯框架',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '右后翼子板内骨架',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '右后翼子板',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '车顶',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '左后翼子板',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '左前翼子板内骨架',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '行李箱后遮物板',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '后备箱导水槽及封边',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '后备箱盖铰链',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '右B柱铰链',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '右A柱铰链',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '左后纵梁梁头连接板',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '右后纵梁梁头连接板',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '右D柱覆盖面',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '左D柱覆盖面',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '右侧门槛梁',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '左侧底边梁饰板',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '左侧门槛梁',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '右侧底边梁饰板',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前纵梁梁头连接板',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '左前纵梁梁头连接板',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '右A柱覆盖面',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '右B柱覆盖面',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '右前纵梁',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '防火墙',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '右C柱覆盖面',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '右侧底边梁',
    isNormal: true,
    tag: '右侧',
  },
  {
    name: '左前减震器座',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '前防撞梁',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '右前减震器座',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '左前纵梁',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '水箱框架',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '左A柱覆盖面',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '左侧底边梁',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '左C柱覆盖面',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '左B柱覆盖面',
    isNormal: true,
    tag: '左侧',
  },
  {
    name: '后防撞梁',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '右后纵梁',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '左后纵梁',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '后围板',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '后备箱底板',
    isNormal: true,
    tag: '后部',
  },
  {
    name: '右前翼子板骨架漆面',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '右前减震器座漆面',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '左前翼子板骨架漆面',
    isNormal: true,
    tag: '前部',
  },
  {
    name: '左前减震器座漆面',
    isNormal: true,
    tag: '前部',
  },
])

// 泡水检测
export const soakInWaterList = ref([
  {
    name: '保养记录进水维修',
    isNormal: true,
    tag: '',
  },
  {
    name: '左前底板隔音胶及封边胶',
    isNormal: true,
    tag: '',
  },
  {
    name: '右后底板隔音胶及封边胶',
    isNormal: true,
    tag: '',
  },
  {
    name: '左后底板隔音胶及封边胶',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前底板隔音胶及封边胶',
    isNormal: true,
    tag: '',
  },
  {
    name: '转向柱',
    isNormal: true,
    tag: '',
  },
  {
    name: '点烟器底座',
    isNormal: true,
    tag: '',
  },
  {
    name: 'OBD接口',
    isNormal: true,
    tag: '',
  },
  {
    name: '车身控制模块',
    isNormal: true,
    tag: '',
  },
  {
    name: '后备箱地板线束及插接器',
    isNormal: true,
    tag: '',
  },
  {
    name: '后排出风口',
    isNormal: true,
    tag: '',
  },
  {
    name: '机舱保险丝盒',
    isNormal: true,
    tag: '',
  },
  {
    name: '车内保险丝盒',
    isNormal: true,
    tag: '',
  },
  {
    name: '车顶内饰板',
    isNormal: true,
    tag: '',
  },
  {
    name: '发动机线束',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧底板出风口',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧底板出风口',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧第二排安全带',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧第二排安全带',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧地板线束及插接器',
    isNormal: true,
    tag: '',
  },
  {
    name: '左前安全带锁扣',
    isNormal: true,
    tag: '',
  },
  {
    name: '左前地毯',
    isNormal: true,
    tag: '',
  },
  {
    name: '左后第二排座椅滑轨或安装支架',
    isNormal: true,
    tag: '',
  },
  {
    name: '左前安全带',
    isNormal: true,
    tag: '',
  },
  {
    name: '后备箱内控制模块',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧地板线束及插接器',
    isNormal: true,
    tag: '',
  },
  {
    name: '左前座椅骨架及海绵',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前地毯',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前安全带锁扣',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧门槛梁内侧及空腔',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前座椅骨架及海绵',
    isNormal: true,
    tag: '',
  },
  {
    name: '左后地毯',
    isNormal: true,
    tag: '',
  },
  {
    name: '仪表台内骨架',
    isNormal: true,
    tag: '',
  },
  {
    name: '右后地毯',
    isNormal: true,
    tag: '',
  },
  {
    name: '仪表台出风口',
    isNormal: true,
    tag: '',
  },
  {
    name: '右后第二排座椅滑轨或安装支架',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前安全带',
    isNormal: true,
    tag: '',
  },
  {
    name: '后备箱四边边角',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧门槛梁内侧及空腔',
    isNormal: true,
    tag: '',
  },
])

// 火烧检测
export const fireList = ref([
  {
    name: '机舱内管路',
    isNormal: true,
    tag: '',
  },
  {
    name: '仪表台及内饰',
    isNormal: true,
    tag: '',
  },
  {
    name: '后备箱地板线束及插接器',
    isNormal: true,
    tag: '',
  },
  {
    name: '防火墙隔音棉',
    isNormal: true,
    tag: '',
  },
  {
    name: '机舱保险丝盒',
    isNormal: true,
    tag: '',
  },
  {
    name: '车内保险丝盒',
    isNormal: true,
    tag: '',
  },
  {
    name: '机舱盖隔音棉',
    isNormal: true,
    tag: '',
  },
  {
    name: '电瓶',
    isNormal: true,
    tag: '',
  },
  {
    name: '车顶内饰板',
    isNormal: true,
    tag: '',
  },
  {
    name: '发动机线束',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧地板线束及插接器',
    isNormal: true,
    tag: '',
  },
  {
    name: '后备箱内控制模块',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧地板线束及插接器',
    isNormal: true,
    tag: '',
  },
])

// 左侧
export const leftList = ref([
  {
    name: '左前翼子板',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧车顶边梁覆盖面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左B柱铰链',
    isNormal: true,
    tag: '',
  },
  {
    name: '左A柱铰链',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧前门',
    isNormal: true,
    tag: '',
  },
  {
    name: '左后翼子板',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧后门',
    isNormal: true,
    tag: '',
  },
  {
    name: '左后轮毂',
    isNormal: true,
    tag: '',
  },
  {
    name: '左后轮胎',
    isNormal: true,
    tag: '',
  },
  {
    name: '左前轮毂',
    isNormal: true,
    tag: '',
  },
  {
    name: '左前轮胎',
    isNormal: true,
    tag: '',
  },
  {
    name: '左C柱三角玻璃',
    isNormal: true,
    tag: '',
  },
  {
    name: '左前门玻璃',
    isNormal: true,
    tag: '',
  },
  {
    name: '左后门玻璃',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧后视镜',
    isNormal: true,
    tag: '',
  },
  {
    name: '驾驶侧',
    isNormal: true,
    tag: '',
  },
  {
    name: '左后车门外拉手',
    isNormal: true,
    tag: '',
  },
  {
    name: '左前车门外拉手',
    isNormal: true,
    tag: '',
  },
  {
    name: '左D柱覆盖面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧底边梁饰板(塑料)',
    isNormal: true,
    tag: '',
  },
  {
    name: '左A柱覆盖面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左C柱覆盖面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左B柱覆盖面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左前门框漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左B柱外侧漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左A柱外侧漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左前翼子板漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左后翼子板漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧前门漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧后门漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左B柱内侧漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧底边梁漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左后门框漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左侧车顶边梁外侧漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左C柱外侧漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '左D柱外侧漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '车顶左侧漆面',
    isNormal: true,
    tag: '',
  },
])

// 车头
export const carHead = ref([
  {
    name: '前雾灯',
    isNormal: true,
    tag: '',
  },
  {
    name: '机舱盖铰链（左）',
    isNormal: true,
    tag: '',
  },
  {
    name: '发动机舱盖',
    isNormal: true,
    tag: '',
  },
  {
    name: '机舱盖铰链（右）',
    isNormal: true,
    tag: '',
  },
  {
    name: '前风挡玻璃',
    isNormal: true,
    tag: '',
  },
  {
    name: '日间行车灯',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前大灯',
    isNormal: true,
    tag: '',
  },
  {
    name: '左前大灯',
    isNormal: true,
    tag: '',
  },
  {
    name: '中网',
    isNormal: true,
    tag: '',
  },
  {
    name: '车头下',
    isNormal: true,
    tag: '',
  },
  {
    name: '车头上',
    isNormal: true,
    tag: '',
  },
  {
    name: '机舱盖锁',
    isNormal: true,
    tag: '',
  },
  {
    name: '发动机舱盖漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '前保险杠',
    isNormal: true,
    tag: '',
  },
])

// 右侧
export const rightList = ref([
  {
    name: '右侧车顶边梁覆盖面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右后翼子板',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧前门',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧后门',
    isNormal: true,
    tag: '',
  },
  {
    name: '车顶',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前翼子板',
    isNormal: true,
    tag: '',
  },
  {
    name: '右后轮毂',
    isNormal: true,
    tag: '',
  },
  {
    name: '右后轮胎',
    isNormal: true,
    tag: '',
  },
  {
    name: '右B柱铰链',
    isNormal: true,
    tag: '',
  },
  {
    name: '右A柱铰链',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前轮毂',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前轮胎',
    isNormal: true,
    tag: '',
  },
  {
    name: '右C柱三角玻璃',
    isNormal: true,
    tag: '',
  },
  {
    name: '右后门玻璃',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前门玻璃',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧后视镜',
    isNormal: true,
    tag: '',
  },
  {
    name: '副驾驶侧',
    isNormal: true,
    tag: '',
  },
  {
    name: '右后车门外拉手',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前车门外拉手',
    isNormal: true,
    tag: '',
  },
  {
    name: '右D柱覆盖面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧底边梁饰板(塑料)',
    isNormal: true,
    tag: '',
  },
  {
    name: '右A柱覆盖面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右B柱覆盖面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右C柱覆盖面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前门框漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右B柱外侧漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右A柱外侧漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右后翼子板漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧前门漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右前翼子板漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧后门漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右B柱内侧漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右C柱外侧漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右后门框漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧底边梁漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右侧车顶边梁外侧漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '右D柱外侧漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '车顶右侧漆面',
    isNormal: true,
    tag: '',
  },
])

// 车尾
export const carTailList = ref([
  {
    name: '后雾灯',
    isNormal: true,
    tag: '',
  },
  {
    name: '后备箱盖',
    isNormal: true,
    tag: '',
  },
  {
    name: '后风挡玻璃',
    isNormal: true,
    tag: '',
  },
  {
    name: '后备箱盖铰链',
    isNormal: true,
    tag: '',
  },
  {
    name: '左后尾灯',
    isNormal: true,
    tag: '',
  },
  {
    name: '右后尾灯',
    isNormal: true,
    tag: '',
  },
  {
    name: '车尾下',
    isNormal: true,
    tag: '',
  },
  {
    name: '车尾上',
    isNormal: true,
    tag: '',
  },
  {
    name: '后牌照灯',
    isNormal: true,
    tag: '',
  },
  {
    name: '后保险杠',
    isNormal: true,
    tag: '',
  },
  {
    name: '后备箱盖漆面',
    isNormal: true,
    tag: '',
  },
  {
    name: '后备箱导水槽漆面',
    isNormal: true,
    tag: '',
  },
])

// 内饰
export const decorationList = ref([
  { name: '保养记录进水维修', isNormal: true, tag: '' },
  { name: '里程表', isNormal: true, tag: '' },
  { name: '维修保养记录里程', isNormal: true, tag: '' },
  { name: '综合判断是否为泡水车', isNormal: true, tag: '' },
  { name: '左前底板隔音胶及封边胶', isNormal: true, tag: '' },
  { name: '车辆改装', isNormal: true, tag: '' },
  { name: '右后底板隔音胶及封边胶', isNormal: true, tag: '' },
  { name: '仪表台及内饰', isNormal: true, tag: '' },
  { name: '左后底板隔音胶及封边胶', isNormal: true, tag: '' },
  { name: '手刹杆', isNormal: true, tag: '' },
  { name: '右前底板隔音胶及封边胶', isNormal: true, tag: '' },
  { name: '转向柱', isNormal: true, tag: '' },
  { name: '点烟器底座', isNormal: true, tag: '' },
  { name: '空调状态', isNormal: true, tag: '' },
  { name: '是否表显有误', isNormal: true, tag: '' },
  { name: '备胎', isNormal: true, tag: '' },
  { name: 'OBD接口', isNormal: true, tag: '' },
  { name: '车身控制模块', isNormal: true, tag: '' },
  { name: '后备箱地板线束及插接器', isNormal: true, tag: '' },
  { name: '后排出风口', isNormal: true, tag: '' },
  { name: '保养记录火烧维修', isNormal: true, tag: '' },
  { name: '车内保险丝盒', isNormal: true, tag: '' },
  { name: '中央扶手箱', isNormal: true, tag: '' },
  { name: '中控按钮', isNormal: true, tag: '' },
  { name: '敞篷', isNormal: true, tag: '' },
  { name: '天窗遮阳帘', isNormal: true, tag: '' },
  { name: '车顶内饰板', isNormal: true, tag: '' },
  { name: '后备箱开启状态', isNormal: true, tag: '' },
  { name: '仪表检测', isNormal: true, tag: '' },
  { name: '车内后视镜', isNormal: true, tag: '' },
  { name: '遥控钥匙', isNormal: true, tag: '' },
  { name: '车内后排', isNormal: true, tag: '' },
  { name: '车内前排', isNormal: true, tag: '' },
  { name: '中控锁(含门锁)', isNormal: true, tag: '' },
  { name: '无钥匙启动', isNormal: true, tag: '' },
  { name: 'OBD检测', isNormal: true, tag: '' },
  { name: '工况检测', isNormal: true, tag: '' },
  { name: '防盗螺栓钥匙', isNormal: true, tag: '' },
  { name: '灯光控制', isNormal: true, tag: '' },
  { name: '左右后视镜调节控制', isNormal: true, tag: '' },
  { name: '踏板/踏板支架', isNormal: true, tag: '' },
  { name: '车内顶部控制面板', isNormal: true, tag: '' },
  { name: '天窗', isNormal: true, tag: '' },
  { name: '多媒体系统', isNormal: true, tag: '' },
  { name: '档把', isNormal: true, tag: '' },
  { name: 'HUD抬头显示', isNormal: true, tag: '' },
  { name: '雨刷器控制', isNormal: true, tag: '' },
  { name: '右侧底板出风口', isNormal: true, tag: '' },
  { name: '左侧底板出风口', isNormal: true, tag: '' },
  { name: '方向盘', isNormal: true, tag: '' },
  { name: '后备箱按键', isNormal: true, tag: '' },
  { name: '后风挡遮阳帘', isNormal: true, tag: '' },
  { name: '中控台', isNormal: true, tag: '' },
  { name: '左后车门按键', isNormal: true, tag: '' },
  { name: '左后车门内扣手', isNormal: true, tag: '' },
  { name: '右侧第二排安全带', isNormal: true, tag: '' },
  { name: '第三排座椅', isNormal: true, tag: '' },
  { name: '右侧第二排座椅', isNormal: true, tag: '' },
  { name: '右前座椅', isNormal: true, tag: '' },
  { name: '右后车门按键', isNormal: true, tag: '' },
  { name: '右后车门内扣手', isNormal: true, tag: '' },
  { name: '左前车门按键', isNormal: true, tag: '' },
  { name: '左前车门内扣手', isNormal: true, tag: '' },
  { name: '左前座椅', isNormal: true, tag: '' },
  { name: '右前车门按键', isNormal: true, tag: '' },
  { name: '左侧第二排安全带', isNormal: true, tag: '' },
  { name: '右前车门内扣手', isNormal: true, tag: '' },
  { name: '左侧第二排座椅', isNormal: true, tag: '' },
  { name: '左侧地板线束及插接器', isNormal: true, tag: '' },
  { name: '左前安全带锁扣', isNormal: true, tag: '' },
  { name: '左前地毯', isNormal: true, tag: '' },
  { name: '左后第二排座椅滑轨或安装支架', isNormal: true, tag: '' },
  { name: '左前安全带', isNormal: true, tag: '' },
  { name: '后备箱内控制模块', isNormal: true, tag: '' },
  { name: '右侧地板线束及插接器', isNormal: true, tag: '' },
  { name: '左前座椅骨架及海绵', isNormal: true, tag: '' },
  { name: '左前座椅滑轨及安装螺丝', isNormal: true, tag: '' },
  { name: '右前地毯', isNormal: true, tag: '' },
  { name: '右前座椅滑轨及安装螺丝', isNormal: true, tag: '' },
  { name: '右前安全带锁扣', isNormal: true, tag: '' },
  { name: '左侧门槛梁内侧及空腔', isNormal: true, tag: '' },
  { name: '右前座椅骨架及海绵', isNormal: true, tag: '' },
  { name: '左后地毯', isNormal: true, tag: '' },
  { name: '右后地毯', isNormal: true, tag: '' },
  { name: '仪表台出风口', isNormal: true, tag: '' },
  { name: '右后第二排座椅滑轨或安装支架', isNormal: true, tag: '' },
  { name: '右前安全带', isNormal: true, tag: '' },
  { name: '后备箱四边边角', isNormal: true, tag: '' },
  { name: '右侧门槛梁内侧及空腔', isNormal: true, tag: '' },
  { name: '安全气囊', isNormal: true, tag: '' },
])

// 机舱检测
export const cabinList = ref([
  {
    name: '防冻液补水壶',
    isNormal: true,
    tag: '',
  },
  {
    name: '涡轮增压器',
    isNormal: true,
    tag: '',
  },
  {
    name: '机舱内管路',
    isNormal: true,
    tag: '',
  },
  {
    name: '正时罩(链条)',
    isNormal: true,
    tag: '',
  },
  {
    name: 'VIN码',
    isNormal: true,
    tag: '',
  },
  {
    name: '启动状态',
    isNormal: true,
    tag: '',
  },
  {
    name: '发动机总成',
    isNormal: true,
    tag: '',
  },
  {
    name: '变速箱',
    isNormal: true,
    tag: '',
  },
  {
    name: '发动机机油',
    isNormal: true,
    tag: '',
  },
  {
    name: '气门室盖垫',
    isNormal: true,
    tag: '',
  },
  {
    name: '发动机缸垫',
    isNormal: true,
    tag: '',
  },
  {
    name: '防火墙隔音棉',
    isNormal: true,
    tag: '',
  },
  {
    name: '机舱保险丝盒',
    isNormal: true,
    tag: '',
  },
  {
    name: '机舱盖隔音棉',
    isNormal: true,
    tag: '',
  },
  {
    name: '电瓶',
    isNormal: true,
    tag: '',
  },
  {
    name: '发动机线束',
    isNormal: true,
    tag: '',
  },
])

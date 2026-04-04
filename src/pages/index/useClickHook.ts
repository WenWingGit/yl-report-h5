import { GetCarInspectionProblemListGet, WxMinApiCarInspectionCriterionGetDtoByCategoryGet } from "@/service/carInspection"
import { fullUrl } from "@/utils/utils"

export function useClickStandard(allData) {
  const currentStandard = reactive({
    name: '',
    content: '',
  })
  const isShowStandard = ref(false)
  const onClickStandard = async (typeIndex, category) => {

    const res = await WxMinApiCarInspectionCriterionGetDtoByCategoryGet(category)
    if (res?.success) {
      currentStandard.name = allData.value[typeIndex].name + '判定标准'
      currentStandard.content = res?.data?.content || ''
      isShowStandard.value = true
    }
  }

  return { currentStandard, isShowStandard, onClickStandard }
}

export function useClickWarningItem() {
  const currentWarningItem = ref({
    name: '',
    list: [],
  })
  const isShowWarningItem = ref(false)
  const onClickWarningItem = async (carInspectionId, flag, resultItem) => {
    if (!flag) {
      return false
    }
    const res = await GetCarInspectionProblemListGet(carInspectionId, resultItem.id)
    if (res?.success) {
      console.log(res)
      currentWarningItem.value.name = resultItem?.name ?? ''
      const list = res?.data?.rows || []
      currentWarningItem.value.list = list.map(item => {
        return {
          ...item,
          title: item?.description || '-',
          statusText: item?.interpretation || '-',
          imageUrl: fullUrl(item?.imgStr),
        }
      })
      isShowWarningItem.value = true
    }
  }

  return { currentWarningItem, isShowWarningItem, onClickWarningItem }
}

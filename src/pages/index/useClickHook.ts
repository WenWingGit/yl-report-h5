export function useClickStandard(allData) {
  const currentStandard = reactive({
    name: '',
    content: '',
  })
  const isShowStandard = ref(false)
  const onClickStandard = (resultIndex) => {
    currentStandard.name = allData.value[resultIndex].name + '判定标准'
    currentStandard.content = allData.value[resultIndex].standard
    isShowStandard.value = true
  }

  return { currentStandard, isShowStandard, onClickStandard }
}

export function useClickWarningItem(allData) {
  const currentWarningItem = ref({
    name: '',
    list: [],
  })
  const isShowWarningItem = ref(false)
  const onClickWarningItem = (typeIndex, resultIndex, resultItem) => {
    currentWarningItem.value.name = allData.value[typeIndex].resultList[resultIndex]?.name ?? ''
    currentWarningItem.value.list = resultItem?.problemImgList || []
    isShowWarningItem.value = true
  }

  return { currentWarningItem, isShowWarningItem, onClickWarningItem }
}

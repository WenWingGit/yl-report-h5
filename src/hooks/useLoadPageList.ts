// import { eam_t } from '@/locale'
import { $tips } from '@/utils/common'

export default function (
  apiFn,
  defaultQuery,
  { isAutoLoad = true, loadedCallBack = () => {}, cacheMode = false, cacheLimit = 0 } = {},
) {
  const isRefreshLoading = ref(false)

  const list = ref([])

  // 分页查询参数
  const pageQuery = reactive(defaultQuery)

  // 列表加载状态
  const listStatus = reactive({
    isLoading: false,
    isEmpty: false,
    isNoMore: false,
    totalPage: 0,
  })

  const allList = ref([])
  // 是否是缓存模式
  const isCacheMode = cacheMode

  const isReadPage = ref(false)

  onMounted(() => {
    if (isAutoLoad) {
      getList()
    }
    setTimeout(() => {
      isReadPage.value = true
    }, 600)
  })

  async function getList<T>({ isRefresh = false, cb = () => {} } = {}) {
    if (listStatus.isLoading) {
      return
    }

    if (isCacheMode && pageQuery.page !== 1) {
      // 從allList中取數據
      let copyList = allList.value.slice(
        (pageQuery.page - 1) * cacheLimit,
        pageQuery.page * cacheLimit,
      )
      copyList = loadedCallBack?.(copyList) ?? (copyList as any)
      list.value.push(...copyList)
      listStatus.isLoading = false
      listStatus.isNoMore =
        allList.value.length === 0
          ? true
          : (allList.value?.length ?? 0) <= pageQuery.page * cacheLimit
      cb && cb()
      return
    }

    listStatus.isLoading = true

    if (isRefresh) {
      list.value.length = 0
    }

    const res = await apiFn(pageQuery, {
      isShowLoading: pageQuery.page !== 1,
    })
    listStatus.isLoading = false
    if (res) {
      const resList = res?.data?.rows ?? []
      if (pageQuery.page > 1) {
        if (resList.length) {
          const copyList = loadedCallBack?.(resList) ?? resList
          list.value.push(...copyList)
          listStatus.isEmpty = (list.value?.length ?? 0) === 0
          listStatus.isNoMore = (res?.data?.current ?? 0) >= (res?.data?.totalPage ?? 0)
          listStatus.totalPage = res?.data?.totalPage ?? 0
        }
      } else {
        if (isCacheMode) {
          allList.value = resList
          list.value = allList.value.slice(0, cacheLimit)
          listStatus.isEmpty = (list.value?.length ?? 0) === 0
          listStatus.isNoMore = list.value?.length < cacheLimit
          listStatus.totalPage = res?.data?.totalPage ?? 0
        } else {
          const copyList = loadedCallBack?.(resList) ?? resList
          list.value = copyList
          listStatus.isEmpty = (list.value?.length ?? 0) === 0
          listStatus.isNoMore = (res?.data?.current ?? 0) >= (res?.data?.totalPage ?? 0)
          listStatus.totalPage = res?.data?.totalPage ?? 0
        }
      }
      // console.log(list.value)
      cb && cb()
    }
  }

  const onRefresh = async () => {
    if (isRefreshLoading.value || listStatus.isLoading) {
      return
    }
    pageQuery.page = 1
    isRefreshLoading.value = true
    await getList({ isRefresh: true })
    uni.stopPullDownRefresh()
    isRefreshLoading.value = false
    // $tips(eam_t('page_common.refresh_success'))
    $tips('刷新成功')
  }

  async function onLoadMore() {
    if (listStatus.isNoMore || listStatus.isLoading) return
    pageQuery.page++
    await getList()
  }

  /** 重置列表 */
  function resetList() {
    pageQuery.page = 1
    list.value.length = 0
  }

  return {
    isReadPage,
    isRefreshLoading,
    list,
    allList,
    pageQuery,
    listStatus,
    getList,
    resetList,
    onRefresh,
    onLoadMore,
  }
}

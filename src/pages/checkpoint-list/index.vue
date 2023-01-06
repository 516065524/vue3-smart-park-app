<template>
  <view class="page-wrapper">
    <u-collapse hover-class="none">
      <u-collapse-item v-for="item in reactiveData.list" :key="item.id">
        <template #title>
          <view class="collapse-title">
            <image class="collapse-title-icon" src="@/static/alarm-checkpoint-list/company.png" mode="widthFix">
            </image>
            <view>
              {{ item.name }}
            </view>
          </view>
        </template>
        <view class="collapse-item">
          <view
            v-for="(child, childIndex) in item.child"
            :key="child.id"
            :class="{ borderTop: childIndex != 0 }"
            class="item-child u-hover-class"
          >
            {{ child.name }}
          </view>
        </view>
      </u-collapse-item>
    </u-collapse>
  </view>
</template>
<script setup lang="ts">
import { dataPermission } from '@/request/checkpoint-alarm'
import { checkPoint } from '@/request/interface'
import { getDataDictionaryData } from '@/utils/util'
import { onLoad } from '@dcloudio/uni-app'
import { reactive } from 'vue'
let reactiveData: {
  list: Array<checkPoint.permissionDataItem>
  workList: { id: string | undefined; name: string | undefined }[]
} = reactive({
  list: [],
  workList: [],
})
// let list: Array<checkPoint.permissionDataItem> = reactive([])
// let workList: { id: string | undefined; name: string | undefined }[] = reactive([])
// const childItemSelected = (item, parent) => {
//   console.log({ item, parent })
// }
onLoad(() => {
  getDataDictionaryData('94c0e57157264e1fa54d7e8b0fceb3fc').then((data) => {
    reactiveData.workList = data.map((val) => {
      return {
        id: val!.id,
        name: val!.name,
      }
    })
    getList()
  })
})
const getList = async () => {
  let { data } = await dataPermission()
  reactiveData.list = toTreeData(data || [])
  console.log(reactiveData.list)
}
const toTreeData = (data: Array<checkPoint.permissionDataItem>): Array<checkPoint.permissionDataItem> => {
  data.map((val) => {
    val.child = []
    reactiveData.workList.map((v) => {
      val.child.push({
        name: v.name,
        id: v.id,
      })
    })
  })
  return data
}
</script>

<style scoped lang="scss">
image {
  display: block;
}

view {
  box-sizing: border-box;
}

.collapse-title {
  display: flex;
  align-items: center;

  .collapse-title-icon {
    width: 32rpx;
    margin: 0 16rpx 0 24rpx;
  }
}

.borderTop {
  border-top: 2rpx dashed #dcdee2;
}

.collapse-item {
  background: #fff;
  border-radius: 0 0 8rpx 8rpx;
  border-top: 2rpx dashed #dcdee2;
  min-height: 68rpx;

  .item-child {
    padding: 0 24rpx;
    height: 64rpx;
    font-size: 24rpx;
    font-weight: 400;
    line-height: 64rpx;
  }
}

.page-wrapper {
  height: 100%;
  background: #f4f5f7;
  padding: 24rpx;
}
</style>

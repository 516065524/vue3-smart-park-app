<template>
  <view class="page-wrapper">
    <view class="operate-list">
      <view v-for="(item, i) in list" :key="i" class="list-item">
        <view class="item-content" :class="{ border: i != 0 }">
          <view class="item-content-title">
            {{ item.title }}
          </view>
          <view class="item-right">
            <image v-if="i == 0" :src="list.find((i) => i.title == '头像')!.content" mode="aspectFit"></image>
            <view v-else>
              {{ item.content }}
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { reactive } from 'vue'

type listItem = {
  title: string
  content: string
}
let list: Array<listItem> = reactive([
  {
    title: '头像',
    content: '',
  },
  {
    title: '姓名',
    content: '',
  },
  {
    title: '性别',
    content: '',
  },
  {
    title: '手机号',
    content: '',
  },
  {
    title: '所属部门',
    content: '',
  },
  {
    title: '注册时间',
    content: '',
  },
])
onLoad(() => {
  let info = uni.getStorageSync('info')
  list = [
    {
      title: '头像',
      content: info.avatar,
    },
    {
      title: '姓名',
      content: info.name,
    },
    {
      title: '性别',
      content: info.sex,
    },
    {
      title: '手机号',
      content: info.mobile,
    },
    {
      title: '所属企业',
      content: info.companyName,
    },
    {
      title: '注册时间',
      content: info.gmtCreateDate,
    },
  ]
})
</script>

<style scoped lang="scss">
image {
  display: block;
}

view {
  box-sizing: border-box;
}

.page-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f4f5f7;
  overflow: hidden;

  .operate-list {
    margin-top: 20rpx;
    background-color: #ffffff;

    .list-item {
      display: flex;
      padding-left: 32rpx;
      align-items: center;

      .border {
        border-top: 1px solid #dcdee2;
      }

      .item-content {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 12rpx 0;

        .item-content-title {
          flex: 1;
          font-size: 14px;
          font-weight: 400;
          color: #17233d;
        }

        .item-right {
          padding-right: 32rpx;
          font-size: 14px;
          color: #17233d;

          view {
            line-height: 76rpx;
            height: 76rpx;
          }

          image {
            width: 104rpx;
            height: 104rpx;
          }
        }
      }
    }
  }

  .button-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 80rpx;

    .button {
      margin: 0 auto;
      height: 72rpx;
      line-height: 72rpx;
      font-size: 16px;
      border-radius: 36rpx;
      color: #e02020;
      border: 1px solid #e02020;
      width: 74%;
    }
  }
}
</style>

<template>
  <view class="page-wrapper">
    <view class="page-header">
      <image src="../../static/user/top-bg.png" mode="widthFix"></image>
      <view class="header-content" @click="toUserInfo">
        <view class="content-left">
          <image :src="info.avatar" mode="widthFix"></image>
        </view>
        <view class="content-center">
          <view class="top">
            {{ info.name }}
          </view>
          <view class="bottom">
            {{ info.companyName }}
          </view>
        </view>
        <view class="content-arrow">
          <uni-icons type="arrowright" size="18" color="#C5C8CE"></uni-icons>
        </view>
      </view>
    </view>
    <view class="operate-list">
      <view v-for="(item, i) in list" :key="item.title" class="list-item" @click="toSomePage(item)">
        <view class="item-icon">
          <image :src="item.icon" mode="aspectFit"></image>
        </view>
        <view class="item-content" :class="{ border: i != 0 }">
          <view class="item-content-title">
            {{ item.title }}
          </view>
          <view class="item-right">
            <uni-icons type="arrowright" size="16" color="#C5C8CE"></uni-icons>
          </view>
        </view>
      </view>
    </view>
    <view class="button-wrapper">
      <button class="button" type="default" @click="logOff">退出登陆</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { logOut } from '@/request/account'

const list = [
  {
    icon: '../../static/user/password.png',
    title: '修改密码',
  },
  {
    icon: '../../static/user/account.png',
    title: '切换账号',
  },
  {
    icon: '../../static/user/notice.png',
    title: '通知公告',
  },
  {
    icon: '../../static/user/about-us.png',
    title: '关于我们',
  },
]
type infoType = {
  name?: string
  avatar?: string
  companyName?: string
}
let info: infoType = reactive({})
onLoad(() => {
  info = uni.getStorageSync('info')
})
const logOff = () => {
  logOut().then((res) => {
    if (res.code == 0) {
      uni.clearStorageSync()
      uni.reLaunch({
        url: '/pages/login/index',
      })
    }
  })
}
const toUserInfo = () => {
  uni.navigateTo({
    url: 'detail',
  })
}
const toSomePage = (item: { title: string }) => {
  let title = item.title
  if (title == '修改密码') {
    uni.navigateTo({
      url: 'updatePassword',
    })
  } else if (title == '通知公告') {
    uni.navigateTo({
      url: '../notice/index',
    })
  } else if (title == '关于我们') {
    uni.navigateTo({
      url: 'aboutUs',
    })
  }
}
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

  .page-header {
    position: relative;

    image {
      width: 100%;
    }

    .header-content {
      padding: 0 48rpx;
      position: absolute;
      bottom: 40rpx;
      display: flex;
      align-items: center;
      width: 100%;

      .content-left image {
        width: 104rpx;
      }

      .content-center {
        color: #ffffff;
        margin-left: 32rpx;
        font-weight: 400;

        .top {
          font-size: 16px;
        }

        .bottom {
          font-size: 14px;
          margin-top: 10rpx;
        }
      }

      .content-arrow {
        flex: 1;
        text-align: right;
      }
    }
  }

  .operate-list {
    margin-top: 20rpx;
    background-color: #ffffff;

    .list-item {
      display: flex;
      padding-left: 48rpx;
      align-items: center;

      .item-icon image {
        width: 32rpx;
        height: 32rpx;
      }

      .border {
        border-top: 1px solid #dcdee2;
      }

      .item-content {
        flex: 1;
        margin-left: 20rpx;
        display: flex;
        align-items: center;
        padding-right: 48rpx;

        .item-content-title {
          flex: 1;
          padding-left: 12rpx;
          font-size: 14px;
          font-weight: 400;
          color: #17233d;
          line-height: 100rpx;
        }

        .item-right {
          font-size: 14px;
          color: #c5c8ce;
        }
      }
    }
  }

  .button-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 160rpx;

    .button {
      margin: 0 auto;
      height: 72rpx;
      line-height: 72rpx;
      font-size: 32rpx;
      border-radius: 36rpx;
      color: #ffffff;
      width: 74%;
      background: #5476fd;
    }
  }
}
</style>

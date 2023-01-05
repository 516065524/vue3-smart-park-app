<template>
  <view class="wrap">
    <view class="status_bar"></view>
    <view class="content-top">
      <view v-for="(item, index) in tablist" :key="index" style="padding: 10rpx" :class="{ active: current == index }">
        <view @tap="change(index)">{{ item.name }}</view>
      </view>
    </view>
    <!--园区概况 -->
    <view v-if="current == 0" class="yqgl">
      <view class="content-banner">
        <image style="width: 100%; height: 360rpx" src="../../static/park/park-banner.png"></image>
      </view>
      <view style="padding-left: 70rpx; margin-top: 32rpx; padding-bottom: 2rpx">
        <!-- <u-time-line>
          <u-time-line-item v-for="(item, index) in zoneslist" :key="index" node-top="2">
            此处自定义了左边内容，用一个图标替代
            <template #node>
              <view class="u-node">
                此处为uView的icon组件
                <image style="width: 100rpx; height: 100rpx" src="../../static/park/park-tx.png"></image>
              </view>
            </template>
            <template #content>
              <view class="sjnr">
                <view style="display: flex; justify-content: space-between">
                  <view class="u-order-title">{{ item.text }}</view>
                  <view class="u-order-title-two">{{ item.level }}</view>
                </view>
                <view class="u-order-desc">{{ item.survey }}</view>
                <view class="u-order-time">2019-05-08 12:12</view>
              </view>
            </template>
          </u-time-line-item>
        </u-time-line> -->
      </view>
    </view>

    <!--发展历程-->
    <view v-if="current == 1">
      <development></development>
    </view>

    <!--产品定位-->
    <view v-if="current == 2">
      <scroll-view class="scroll-view" scroll-y>
        <view class="content-banner">
          <image style="width: 100%; height: 360rpx" src="../../static/park/park-banner.png"></image>
        </view>

        <view v-for="(item, index) in cpdwlist" :key="index" class="wrap-content">
          <view class="wrap-content-one">
            <view class="content-left" style="min-width: 124px">重点产业名称：</view>
            <view style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap">{{
              item.importantIndustry
            }}</view>
          </view>
          <view class="wrap-content-two">
            <view class="two-top">
              <view class="two-top-left" style="width: 113px">类别：</view>
              <view class="two-top-right">{{ item.type }}</view>
            </view>
            <view class="two-top" style="margin-top: 16rpx">
              <view class="two-top-left" style="min-width: 113px">细分领域名称：</view>
              <view class="two-top-right">{{ item.domainName }}</view>
            </view>
          </view>
        </view>
        <!-- <uni-load-more :status="loadStatus" show-icon></uni-load-more> -->
      </scroll-view>
    </view>

    <!--园区企业信息-->
    <information v-if="current == 3"></information>
    <!--结束-->
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import development from './components/development-history.vue'
import information from './components/qyxx-information.vue'

const tablist = [
  {
    name: '园区概况',
  },
  {
    name: '发展历程',
  },
  {
    name: '产业定位',
  },
  {
    name: '园区企业信息',
  },
]

type cpdwlistType = {
  importantIndustry: string
  type: string
  domainName: string
}
let current = ref(0)
let cpdwlist: Array<cpdwlistType> = reactive([])
const change = (index: number) => {
  current.value = index
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  min-height: 100%;
  background: #f3f4f6;
}
.content-banner {
  width: 100%;
  height: 360rpx;
}
.u-node {
  width: 100rpx;
  height: 100rpx;
  border-radius: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d0d0d0 !important;
}

.u-order-title {
  color: #333333;
  font-weight: bold;
  font-size: 28rpx;
}
.u-order-title-two {
  color: #5476fd;
  font-size: 24rpx;
}

.u-order-desc {
  color: #515a6e;
  font-size: 24rpx;
  margin-top: 16rpx;
  margin-bottom: 6rpx;
}

.sjnr {
  min-height: 100rpx;
  width: 560rpx;
  margin-left: 20px;
  background: #ffffff;
  border-radius: 10rpx;
  padding: 16rpx 16rpx;
}
.wrap-content {
  background: #ffffff;
  margin: 24rpx 24rpx 24rpx 24rpx;
  border-radius: 3%;
  .wrap-content-one {
    display: flex;
    align-items: center;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    font-size: 32rpx;
    border-bottom: 1px dashed #dcdee2;
    .content-left {
      color: #17233d;

      font-size: 32rpx;
      line-height: 40rpx;
      font-weight: bold;
      position: relative;
      padding-left: 24rpx;

      &::before {
        position: absolute;
        left: 0;
        top: 4rpx;
        bottom: 0;
        content: '';
        width: 8rpx;
        height: 32rpx;
        background-color: #5476fd;
      }
    }
  }
  .wrap-content-two {
    padding: 22rpx;
    .two-top {
      display: flex;
      .two-top-left {
        font-size: 28rpx;
        color: #515a6e;
        line-height: 40rpx;
      }
      .two-top-right {
        font-size: 28rpx;
        color: #17233d;
        line-height: 40rpx;
      }
    }
  }
}
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
  background: #5476fd;
}
.content-top {
  // height: 60rpx;
  padding-top: 20rpx;
  display: flex;
  justify-content: space-around;
  background: #5476fd;
  color: #ffff;
  font-size: 28rpx;
}
.active {
  background: #ffffff;
  color: #5476fd;
  border-radius: 15rpx 15rpx 0rpx 0rpx;
  font-weight: bold;
}
.yqgl {
  height: calc(100vh - 89px);
  overflow-y: auto;
}
.scroll-view {
  height: calc(100vh - 89px);
}
</style>

<template>
  <view class="x-wrap">
    <scroll-view class="scroll-view" scroll-y>
      <view v-for="(item, index) in qylist" :key="index" class="wrap-content">
        <view class="wrap-content-one">
          <view class="content-left">{{ item.companyName }}</view>
        </view>
        <view class="wrap-content-two">
          <view class="two-top">
            <view>
              <span class="two-top-left">企业类型：</span><span class="two-top-right">{{ item.companyType }}</span>
            </view>
            <view style="width: 50%; text-align: left"
              ><span class="two-top-left">行业分类：</span>
              <span class="two-top-right">{{ item.industryClassify }}</span></view
            >
          </view>
          <view class="two-top" style="margin-top: 16rpx">
            <view
              ><span class="two-top-left">法人：</span> <span class="two-top-right">{{ item.legalPerson }}</span></view
            >
            <view style="width: 50%; text-align: left"
              ><span class="two-top-left">联系电话：</span>
              <span class="two-top-right">{{ item.legalPersonPhone }}</span></view
            >
          </view>
          <view style="margin-top: 16rpx; display: flex">
            <view class="two-top-left">统一社会信用代码：</view>
            <view class="two-top-right">{{ item.creditCode }}</view>
          </view>
        </view>
      </view>
      <!-- <uni-load-more :status="loadStatus" showIcon></uni-load-more> -->
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
let qylist: Array<object> = reactive([])
</script>

<style lang="scss" scoped>
.scroll-view {
  height: calc(100vh - 200rpx);
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
      justify-content: space-between;
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
</style>

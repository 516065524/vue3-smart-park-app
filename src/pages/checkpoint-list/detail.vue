<template>
  <view class="page-wrapper">
    <view class="card-wrapper preview-wrapper">
      <view class="total-preview"> 全部：{{ total }} </view>
      <view class="each-preview">
        <view v-for="(kind, index) in kindList" :key="index">
          <view class="color-dot" :style="{ background: kind.color }"></view>
          {{ kind.name }}
          <view>
            {{ kind.value }}
          </view>
        </view>
      </view>
    </view>
    <scroll-view scroll-y class="list-wrapper" @scrolltolower="scrolltolower">
      <view v-for="item in list" :key="item.id" class="card-wrapper">
        <view class="list-item-title">
          <image src="@/static/alarm-checkpoint-list/checkpoint.png" mode="widthFix"> </image>
          <view class="inline-block">
            {{ item.sensorDescription }}
          </view>
        </view>
        <view class="list-item-content">
          <view class="content-row">
            <view class="content-row-label"> 所属企业： </view>
            <view>
              {{ item.company }}
            </view>
          </view>
          <view class="content-row">
            <view class="content-row-label"> 实时监测值： </view>
            <view :style="{ color: getStatus(item.map.alarmStatus).color }">
              {{ item.map && item.map.value ? item.map.value : '--' }}
            </view>
            <view class="content-row-unit">
              {{ item.unit == '/' ? '' : item.unit }}
            </view>
          </view>
          <view class="content-row">
            <view class="content-row-label"> 监测点分类： </view>
            <view>
              {{ item.type }}
            </view>
          </view>
          <view class="content-row" style="margin-bottom: 0">
            <view class="content-row-label"> 更新时间： </view>
            <view>
              {{ item.map.times ? formatDate(new Date(Number(item.map.times))) : '--' }}
            </view>
          </view>
          <image
            class="content-button"
            src="@/static/alarm-checkpoint-list/trend-chart.png"
            mode="widthFix"
            @click="toTrendChart(item)"
          >
          </image>
        </view>
      </view>
      <u-loadmore :status="status" />
    </scroll-view>
  </view>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
image {
  vertical-align: middle;
}

view {
  box-sizing: border-box;
}

.page-wrapper {
  height: 100%;
  background: #f4f5f7;
  padding: 24rpx;
  display: flex;
  flex-direction: column;

  .card-wrapper {
    background: #ffffff;
    box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin-bottom: 24rpx;
    padding: 24rpx;
  }

  .preview-wrapper {
    font-size: 24rpx;
    font-weight: 400;
    color: #20386a;
    padding: 16rpx;

    .each-preview {
      margin-top: 16rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;
    }
  }

  .color-dot {
    display: inline-block;
    width: 16rpx;
    height: 16rpx;
    border-radius: 50%;
    margin-right: 4rpx;
    margin-bottom: 1rpx;
  }

  .list-wrapper {
    flex: 1;
    overflow: auto;

    .list-item-title {
      padding-bottom: 24rpx;
      border-bottom: 1px dashed #dcdee2;
      font-size: 32rpx;
      font-weight: 400;
      line-height: 44rpx;

      image {
        width: 32rpx;
        margin-right: 16rpx;
      }
    }

    .list-item-content {
      position: relative;
      padding-top: 24rpx;

      .content-button {
        position: absolute;
        bottom: 0rpx;
        right: 0rpx;
        width: 156rpx;
      }

      .content-row {
        line-height: 40rpx;
        margin-bottom: 16rpx;
        color: #17233d;

        > view {
          display: inline-block;
          vertical-align: middle;
        }

        .content-row-label {
          color: #696e79;
        }

        .content-row-unit {
          color: #9b9b9b;
          margin-left: 8rpx;
        }
      }
    }
  }
}

.inline-block {
  display: inline-block;
  vertical-align: middle;
}
</style>

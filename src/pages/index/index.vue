<template>
  <view class="page-wrapper">
    <view class="page-top">
      <image src="@/static/index/home-bg.png" mode="widthFix"></image>
    </view>
    <view class="page-content">
      <view class="card-wrapper content-top">
        <view @click="toCheckpointList">
          <image src="@/static/index/checkpoint-list.png" mode="widthFix"></image>
          <view>监测点列表</view>
        </view>
        <view @click="toAlarmList">
          <image src="@/static/index/alarm-list.png" mode="widthFix"></image>
          <view>报警列表</view>
        </view>
      </view>
      <view class="card-wrapper content-menu">
        <view class="menu-title"> 安全监管 </view>
        <view class="menu-content">
          <!-- <view class="margin-bottom">
  					<image @click="toMenuItem('重大危险源监管')" class="margin-right" src="@/static/index/1.png"
  						mode="widthFix"></image>
  					<image @click="toMenuItem('安全风险分区')" src="@/static/index/2.png" mode="widthFix"></image>
  				</view> -->
          <view class="margin-bottom">
            <image
              class="margin-right"
              src="@/static/index/1.png"
              mode="widthFix"
              @click="toMenuItem('新重大危险源监管')"
            ></image>
            <image src="@/static/index/2.png" mode="widthFix" @click="toMenuItem('安全风险分区')"></image>
          </view>
          <view>
            <image
              class="margin-right"
              src="@/static/index/3.png"
              mode="widthFix"
              @click="toMenuItem('隐患排查治理')"
            ></image>
            <image src="@/static/index/4.png" mode="widthFix" @click="toMenuItem('安全培训考核')"></image>
          </view>
        </view>
      </view>
      <!-- <view class="card-wrapper content-menu">
  			<view class="menu-title-wrapper">
  				<view class="menu-title">
  					智慧环保
  				</view>
  				<view class="menu-title" style="margin-left:30rpx">
  					智慧能源
  				</view>
  			</view>
  			<view class="menu-content">
  				<view>
  					<image @click="toMenuItem('智慧环保')" class="margin-right" src="@/static/index/5.png"
  						mode="widthFix"></image>
  					<image @click="toMenuItem('智慧能源')" src="@/static/index/6.png" mode="widthFix"></image>
  				</view>
  			</view>
  		</view> -->
      <view class="card-wrapper content-menu">
        <view class="menu-title-wrapper">
          <view class="menu-title"> 封闭园区 </view>
          <view class="menu-title" style="margin-left: 30rpx"> 智慧应急 </view>
        </view>
        <view class="menu-content">
          <view>
            <image
              style="width: 50%"
              class="margin-right"
              src="@/static/index/7.png"
              mode="widthFix"
              @click="toMenuItem('封闭园区')"
            ></image>
            <image
              style="width: 50%"
              src="@/static/index/8.png"
              mode="widthFix"
              @click="toMenuItem('应急指挥')"
            ></image>
          </view>
        </view>
      </view>
      <!-- <view class="card-wrapper content-menu">
  			<view class="menu-title-wrapper">
  				<view class="menu-title">
  					公共服务
  				</view>
  			</view>
  			<view class="menu-content">
  				<view>
  					<image @click="toMenuItem('知识库')" class="margin-right" src="@/static/index/9.png"
  						mode="widthFix"></image>
  					<view style="width:100%"></view>
  				</view>
  			</view>
  		</view> -->
    </view>
  </view>
</template>

<script setup lang="ts">
const toCheckpointList = () => {
  navigateTo('/pages/checkpoint-list/index')
}
const toAlarmList = () => {
  navigateTo('/pages/alarm-list/index')
}
const navigateTo = (path: string) => {
  uni.navigateTo({
    url: path,
    complete(e) {
      console.log(e)
    },
  })
}
const toMenuItem = (menu: string) => {
  console.log(menu)
  let path
  switch (menu) {
    case '封闭园区':
      path = '/pages/closed-park/views/index'
      break
    case '智慧环保':
      path = '/pages/environmental-protection/views/index'
      break
    case '隐患排查治理':
      path = '/pages/danger-troubleshoot/views/index'
      break
    case '安全培训考核':
      path = '/pages/train-test/views/index'
      break
    case '重大危险源监管':
      path = '/pages/major-hazard/index'
      break
    case '新重大危险源监管':
      path = '/pages/new-major-hazard/index'
      break
    case '安全风险分区':
      path = '/pages/risk-zoning/index'
      break
    case '应急指挥':
      path = '/pages/emergency-command/views/home'
      break
    case '知识库':
      path = '/pages/safe-knowledge/index'
      break
    default:
      return
  }
  navigateTo(path)
}
</script>

<style scoped lang="scss">
view {
  box-sizing: border-box;
}

image {
  display: block;
}

.page-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f4f5f7;

  .page-top > image {
    width: 100%;
  }

  .page-content {
    flex: 1;
    overflow: auto;
    padding: 24rpx;
    padding-bottom: 0;

    .card-wrapper {
      background: #ffffff;
      border-radius: 4px;
      margin-bottom: 24rpx;
    }

    .content-top {
      display: flex;
      padding: 28rpx 32rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: #59657a;
      line-height: 40rpx;
      text-align: center;

      > view {
        margin-right: 64rpx;
      }

      image {
        width: 120rpx;
      }
    }

    .content-menu {
      padding: 24rpx 0 20rpx;

      .menu-title-wrapper {
        display: flex;

        > view {
          flex: 1;
        }
      }

      .menu-title {
        font-size: 32rpx;
        color: #00355b;
        font-weight: 500;
        position: relative;
        padding-left: 24rpx;
        line-height: 44rpx;
        margin-bottom: 20rpx;
        margin-left: 8rpx;

        &::after {
          content: '';
          position: absolute;
          width: 8rpx;
          height: 32rpx;
          background-color: #5476fd;
          border-radius: 4rpx;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto 0;
        }
      }

      .menu-content {
        padding: 0 18rpx 0 28rpx;

        view {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
      }
    }
  }
}

.margin-right {
  margin-right: 16rpx;
}

.margin-bottom {
  margin-bottom: 16rpx;
}
</style>

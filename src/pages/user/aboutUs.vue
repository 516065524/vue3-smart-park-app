<template>
  <view class="page-wrapper">
    <view class="content">
      <view>
        <view class="logo-wrapper">
          <image src="../../unpackage/res/icons/192x192.png" mode="aspectFill"></image>
        </view>
        <view class="code"> 当前版本号：V 3.0.0.0 </view>
      </view>
    </view>
    <view class="bottom-tec"> 技术支持 江苏海内软件科技有限公司 </view>
  </view>
</template>

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
  padding-bottom: 100rpx;

  .bottom-tec {
    text-align: center;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #515a6e;
  }

  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 30%;

    .logo-wrapper {
      display: flex;
      justify-content: center;

      image {
        width: 272rpx;
        height: 272rpx;
      }
    }

    .code {
      font-size: 14px;
      font-weight: 500;
      color: #17233d;
      margin-top: 52rpx;
    }
  }
}
</style>

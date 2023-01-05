<template>
  <view class="fzlc-wrap">
    <!-- <u-time-line>
				<u-time-line-item v-for='(item,index) in slxxlist' :key='index' node-top="30">
					此处自定义了左边内容，用一个图标替代
					<template #node>
						<view v-if="index%2==0" class="u-node" >
						</view>
						<view v-if="index%2!=0" class="u-node-two">
							<image style="width: 100rpx;height: 88rpx;" src="@/static/park/park-lc.png">
						</view>
					</template>
					<template #content>
						<view v-if="index%2==0" class="content-left">
							<view class="u-order-title">{{item.planName}}</view>
							<view class="u-order-title">园区性质：{{item.parkNature}}</view>
							<view class="u-order-title">规划时间：{{item.planDate}} </view>
							<view class="u-order-title">规划面积：{{item.planArea}}(km²) </view>
						</view>
						<view v-if="index%2!=0" class="content-left-two">
							<view class="u-order-title">{{item.planName}}</view>
							<view class="u-order-title">园区性质：{{item.parkNature}}</view>
							<view class="u-order-title">规划时间：{{item.planDate}} </view>
							<view class="u-order-title">规划面积：{{item.planArea}}(km²) </view>
						</view>
					</template>
				</u-time-line-item>
				
			</u-time-line> -->
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.fzlc-wrap {
  // width: 100%;
  height: calc(100vh - 200rpx);
  // height: 100%;
  background: #ffffff;
  margin: 24rpx;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: 20px;
  // height: 100%;
}
.u-node {
  width: 44rpx;
  height: 44rpx;
  border-radius: 100rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #5476fd;
}
.u-node-two {
  width: 100rpx;
  height: 88rpx;
}

.u-order-title {
  color: #515a6e;
  font-size: 24rpx;
  line-height: 34rpx;
}

.u-order-desc {
  color: rgb(150, 150, 150);
  font-size: 28rpx;
  margin-bottom: 6rpx;
}

.u-order-time {
  color: rgb(200, 200, 200);
  font-size: 26rpx;
}
.u-time-axis {
  padding-top: 60rpx;
  left: 50%;
  border-left: 1px dashed #5476fd;
}
.content-left {
  width: 268rpx;
  position: relative;
  left: -55%;
}
.content-left-two {
  width: 268rpx;
  margin-left: 14rpx;
}
</style>

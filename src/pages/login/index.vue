<template>
	<view class="page-wrapper">
		<view class="page-top">
			<image src="@/static/login/bg.png" mode="widthFix"></image>
		</view>
		<view class="page-form-wrapper">
			<form @submit="formSubmit" class="page-form">
				<view class="form-input">
					<view class="icon">
						<image src="../../static/login/loginId-icon.png" mode="aspectFit"></image>
					</view>
					<input name="loginId" type="text" :maxlength="20" placeholder="请输入用户名" :cursor-spacing="160"
						placeholder-class="input-placeholder" />
				</view>
				<view class="form-input form-input-gap">
					<view class="icon">
						<image src="../../static/login/password-icon.png" mode="aspectFit"></image>
					</view>
					<input name="password" type="text" password :maxlength="20" :cursor-spacing="100" adjust-position
						placeholder="请输入密码" placeholder-class="input-placeholder" />
				</view>
				<view class="form-tip">
					忘记密码请联系管理员
				</view>
				<view class="form-button form-input-gap">
					<button type="default" plain form-type="submit">登录</button>
				</view>
			</form>
		</view>

	</view>
</template>

<script setup lang="ts">
import config from '@/config/app'
import { loginIn } from '@/request/account'
const getAvatar = (avatar = '', sex: string | number = '男') => {
	if (!avatar) {
		if (sex === '女' || sex == 1) {
			return '/static/user/default-head-icon-female.png';
		}
		return '/static/user/default-head-icon-male.png';
	}
	return config.VITE_FILE_URL + avatar;
};
const formSubmit = (e: { detail: { value: any; }; }) => {
	let form = e.detail.value
	if (form.loginId && form.password) {
		loginIn({ ...form, type: 'App' }).then(res => {
			if (res.code === 0) {
				let {
					accessToken,
					info,
					refreshToken
				} = res.data;
				uni.setStorageSync("authorization", accessToken);
				uni.setStorageSync("refresh_token", refreshToken);
				uni.setStorageSync("info", {
					id: info.id,
					account: info.loginId,
					name: info.name,
					companyId: info.companyId,
					companyName: info.companyName,
					email: info.email,
					sex: info.sex,
					avatar: getAvatar(info.headImg, info.sex),
					mobile: info.phone,
					belongToPark: info.belongTo
				});
				uni.switchTab({
					url: "/pages/index/index"
				})
			} else {
				// #ifdef APP-PLUS
				plus.nativeUI.toast('用户名或密码不能为空', {
					verticalAlign: 'center'
				});
				// #endif
				// #ifndef APP-PLUS
				uni.showToast({
					title: '用户名或密码不能为空',
					icon: 'none',
				})
				// #endif
			}
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

.input-placeholder {
	font-size: 14px;
	font-weight: 400;
	color: #C5C8CE;
}

.page-wrapper {
	width: 100%;
	height: 100%;
	position: relative;

	.page-top>image {
		width: 100%;
	}

	.page-form-wrapper {
		position: absolute;
		bottom: 0;
		margin: 0 32rpx 80rpx 32rpx;
		width: calc(100% - 64rpx);
		height: 892rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #FFFFFF;
		box-shadow: 0px 0px 6px 0px rgba(199, 199, 199, 0.5);
		border-radius: 4px;
		padding-bottom: 100rpx;
	}
}

.page-form {
	width: 77%;
	margin: 0 auto;

	.form-input-gap {
		margin-top: 40rpx;
	}

	.form-input {
		display: flex;
		align-items: center;
		padding: 0 28rpx;
		height: 72rpx;
		border: 1px solid #DCDEE2;
		border-radius: 36rpx;

		.icon>image {
			width: 40rpx;
			height: 40rpx;
			margin-right: 18rpx;
		}

		input {
			width: 100%;
		}
	}

	.form-tip {
		font-size: 24rpx;
		font-weight: 400;
		color: #6D7278;
		text-align: right;
		line-height: 42rpx;
		padding-right: 26rpx;
	}

	.form-button {
		margin-top: 126rpx;

		button {
			margin: 0 auto;
			height: 72rpx;
			background-color: #4468F5;
			border-radius: 36rpx;
			color: #FFFFFF;
			font-size: 16px;
			line-height: 72rpx;
			border: none;
		}
	}
}
</style>
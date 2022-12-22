import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import appConfig from '@/config/app'
type RequestOptionsMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
/**
 * 未登录码
 */
const NOT_LOGIN_CODE = 40100001
const LOGIN_TIMEOUT_CODE = 40100002
/**
 * 成功码
 */
const SUCCESS_CODE = 0
// 数据返回的接口
// 定义请求响应参数，不含data
interface Result {
	code: number;
	msg: string
}

// 请求响应参数，包含data
interface ResultData<T = any> extends Result {
	data?: T;
}
type ResultData2 = {
	data: ResultData
}

type Options = {
	url: string;
	method?: RequestOptionsMethod,
	timeout?: number,
	header?: object,
	data?: object
}

const requestTask = async function(options: Options) {
	// let opts: Options = {
	// 	data: {},
	//     url: '',
	// 	method: "GET",
	// 	timeout: 5000,
	// 	header: {
	// 		authorization: uni.getStorageSync("authorization"),
	// 		refresh_token: uni.getStorageSync("refresh_token")
	// 	}
	// }
	// Object.assign(opts, options, {
	// 	url: appConfig.VITE_BASE_URL + options.url
	// });
	const URL = appConfig.VITE_BASE_URL
	const token = '';
	if (!token) {
		setTimeout(toLogin, 2000);
		return Promise.reject({
			msg: '未登录'
		})
	}

	return new Promise((resolve, reject) => {
		uni.request({
			url: URL + options.url,
			method: options.method || "GET",
			header: options.header || {
				authorization: uni.getStorageSync("authorization"),
				refresh_token: uni.getStorageSync("refresh_token")
			},
			data: options.data || {},
			success: (res) => {
				responHandler(res as unknown as ResultData2, resolve);
			}
		})
	})
}


const deaufaultRes = {
	code: false,
	msg: '未知错误,请联系管理员',
	data: null
}

function responHandler(res: ResultData2, resolve: (value: unknown) => void) {
	const { code } = res.data;
	if (code === NOT_LOGIN_CODE || code === LOGIN_TIMEOUT_CODE) {
		uni.showToast({
			title: '登录失效，请重新登录',
			icon: 'none',
			mask: true,
			complete: () => {
				toLogin();
			},
		})
		console.log('我失效了')

		return false
	}
	if (code === SUCCESS_CODE) {
		return resolve({ ...res.data })
	}
}

function requestErr(err: string) {
	// #ifdef APP-PLUS
	plus.nativeUI.toast(err);
	// #endif
	// #ifndef APP-PLUS
	uni.showToast({
		title: err,
		icon: 'none',
		mask: true,
	})
	// #endif
}

function toLogin() {
	let routes = getCurrentPages();
	let curRoute;
	console.log(routes)
	if (routes.length > 0) curRoute = routes[routes.length - 1].route
	if (curRoute != "pages/login/index") {
		uni.reLaunch({
			url: '/pages/login/index'
		});
	}
}
export default requestTask;
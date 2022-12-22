import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import appConfig from '@/config/app'
type RequestOptionsMethod = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'
/**
 * 未登录码
 */
const NOT_LOGIN_CODE = 40100001
const LOGIN_TIMEOUT_CODE = 40100002
// 数据返回的接口
// 定义请求响应参数，不含data
interface Result {
	code: number;
	msg: string
}

// 请求响应参数，包含data
interface ResultData<T = any> extends Result {
	data: T;
}

interface Res<T = any> {
	data: ResultData<T>
} 


const requestTask = <T>(options: UniApp.RequestOptions) :Promise<ResultData<T>> => {
	const URL = appConfig.VITE_BASE_URL
	let url: string
    if (/^(http|https):\/\/.*/.test(options.url)) {
        // 如果是以http/https开头的则不添加VITE_REQUEST_BASE_URL
        url = options.url
    } else {
        url = URL + options.url
    }
	return new Promise<ResultData<T>>((resolve, reject) => {
		uni.request({
			...options,
			url,
			header: options.header || {
				authorization: uni.getStorageSync("authorization"),
				refresh_token: uni.getStorageSync("refresh_token")
			},
			success: (res) => {
				// resolve(res.data as unknown as ResultData<T>)
				responHandler(res as unknown as Res<T>, resolve);
			},
			fail(err) {
				reject(err)
			}
		})
	})
}


const deaufaultRes = {
	code: false,
	msg: '未知错误,请联系管理员',
	data: null
}

function responHandler(res: Res, resolve: (value: any) => void) {
	const { code } = res.data;
	if (code === NOT_LOGIN_CODE) {
		toLogin();
		console.log('我失效了')
		return false
	} else {
		if (code === LOGIN_TIMEOUT_CODE) {
			setTimeout(toLogin, 2000);
			requestErr('登陆过期')
		} else {
			requestErr(res.data.data.msg)
		}
		let data = res.data || deaufaultRes
		return resolve({ ...data })
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
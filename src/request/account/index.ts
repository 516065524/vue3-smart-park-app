import request from "@/request";
import { Login } from "../interface";

// 登陆
export function loginIn(data: Login.ReqLoginForm) {
	return request<Login.ResLogin>({
		url: "/api/user/login",
		method: "POST",
		data
	})
}

// 登出
export function logOut() {
	return request({
		url: '/api/user/logout',
		method: 'GET'
	})
}

import request from "@/request";
type LoginData = {
    username: string,
    password: string
}
type loginRes = {
    data: {

    }
}
// 登陆
export function loginIn(data: LoginData) {
	return request({
		url: "/api/user/login",
		method: "POST",
		data
	})
}
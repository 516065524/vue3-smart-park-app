// * 登录
export namespace Login {
	export interface ReqLoginForm {
		loginId: string,
        password: string,
        type: string
	}
	export interface ResLogin {
		accessToken: string;
		info: ResLoginInfo,
		refreshToken: string
	}
	export interface ResLoginInfo {
		[propName: string]: any;
	}
}
// * 监测点
export namespace checkPoint {
	export interface permissionDataItem {
		name: string
  		id: string
  		[propName: string]: any
	}
}
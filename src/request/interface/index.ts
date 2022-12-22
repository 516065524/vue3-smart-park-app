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
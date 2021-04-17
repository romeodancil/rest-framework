import request from './request'

export const login = (data: any, sucessCallBack: Function, errorCallback: Function) => {
	request('POST', '/api/login/', null, data, sucessCallBack, errorCallback)
}

export const registerApi = (data: any, sucessCallBack: Function, errorCallback: Function) => {
	request('POST', '/api/register/', null, data, sucessCallBack, errorCallback)
}

export const logoutApi = (token: string, sucessCallBack: Function, errorCallback: Function) => {
	request('POST', '/api/logout/', token, null, sucessCallBack, errorCallback)
}

export const changePassword = (token: string, data: any, sucessCallBack: Function, errorCallback: Function) => {
	request('PUT', '/api/change-password/', token, data, sucessCallBack, errorCallback)
}

export const forgotPassword = (data: any, sucessCallBack: Function, errorCallback: Function) => {
	request('POST', '/api/password_reset/', null, data, sucessCallBack, errorCallback)
}

export const confirmPassword = (data: any, sucessCallBack: Function, errorCallback: Function) => {
	request('POST', '/api/password_reset/confirm/', null, data, sucessCallBack, errorCallback)
}
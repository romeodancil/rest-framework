import axios from 'axios'
import request from './request'

export const login = (data, sucessCallBack, errorCallback) => {
	request('POST', '/api/login/', null, data, sucessCallBack, errorCallback)
}

export const registerApi = (data, sucessCallBack, errorCallback) => {
	request('POST', '/api/register/', null, data, sucessCallBack, errorCallback)
}

export const logoutApi = (token, sucessCallBack, errorCallback) => {
	request('POST', '/api/logout/', token, null, sucessCallBack, errorCallback)
}

export const changePassword = (data, token, sucessCallBack, errorCallback) => {
	request('PUT', '/api/change-password/', token, data, sucessCallBack, errorCallback)
}
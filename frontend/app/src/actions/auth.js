import axios from 'axios'
import request from './request'

export const login = (data, sucessCallBack, errorCallback) => {
	request('POST', '/api/login/', null, data, sucessCallBack, errorCallback)
}

export const registerApi = (data, sucessCallBack, errorCallback) => {
	request('POST', '/api/register/', null, data, sucessCallBack, errorCallback)
}
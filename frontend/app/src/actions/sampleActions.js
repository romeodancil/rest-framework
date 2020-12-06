import axios from 'axios'
import request from './request'

export const sampleRequest = (sucessCallBack, errorCallback) => {
	request('GET', '/api/allsample', null, null, sucessCallBack, errorCallback)
}
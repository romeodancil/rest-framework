import axios from 'axios'

const request = async (method, api, token, data, successCallback, errorCallback) => {
	let apiUrl;
	const isDev = process.env.REACT_APP_ENV === 'dev'
	const hostName = window.location.hostname
	const protocol = window.location.protocol

	if (isDev) {
		apiUrl = `${protocol}//${hostName}:8000`
	} else {
		apiUrl = window.location.origin
	}

	const axiosRequest = {
		method: method,
		url: `${apiUrl + api}`,
	}

	if (token) {
		axiosRequest['headers'] = {
			'Authorization': `token ${token}`
		}
	}

	if (data) {
		axiosRequest['data'] = data
	}

	try {
		const response = await axios(axiosRequest)
		successCallback(response.data)
	} catch (e) {
		errorCallback(e)
	}
}

export default request
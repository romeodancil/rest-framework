import axios from 'axios'

interface AxiosProps {
	method: any;
	url: string;
	headers?: any;
	params?: any;
	data?: any;
}

const request = async (
	method: string,
	api: string,
	token?: any,
	data?: any,
	successCallback?: Function,
	errorCallback?: Function
) => {
	let apiUrl;
	const isDev = process.env.REACT_APP_ENV === 'dev'
	const hostName = window.location.hostname
	const protocol = window.location.protocol
	axios.defaults.withCredentials = true;
	
	if (isDev) {
		apiUrl = `${protocol}//${hostName}:8000`
	} else {
		apiUrl = 'prod url'
	}

	const axiosRequest: AxiosProps = {
		method: method,
		url: `${apiUrl}${api}`,
	}

	if (token) {
		axiosRequest['headers'] = {
			'Authorization': `token ${token}`,
		}
	}

	if (method == 'GET' && data) {
		axiosRequest['params'] = data
	} else {
		axiosRequest['data'] = data
	}

	try {
		const response = await axios(axiosRequest)

		if (successCallback)
			successCallback(response.data)

	} catch (e) {
		const { response } = e
		if (response && response?.status == 401) {
			localStorage.removeItem('token')
			window.location.href = '/signin'
			return false
		}

		if (response && response?.status == 500) {
			response['data'] = { internal_server_error: 'Internal Server Error' }
		}

		console.error('e', e)
		if (errorCallback) errorCallback(e)
	}
}

export default request
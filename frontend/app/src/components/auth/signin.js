import React from 'react'
import App from '../../App'
import { useForm } from 'react-hook-form'
import { login } from '../../actions/auth'
import { useLocalState } from '../../hooks/hooks'

function Signin() {
	const {register, handleSubmit, errors} = useForm()
	const [token, setToken] = useLocalState('token')

	const onSubmit = (formData) => {
		login(formData, (data) => {
			setToken(data)
		}, () => {})
	}

	return (
		<div className="App">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="username">Username</label>
				<input ref={register} type="text" name="username"/>
				<label htmlFor="username">Password</label>
				<input ref={register} type="password" name="password"/>
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Signin
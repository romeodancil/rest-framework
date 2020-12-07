import React from 'react'
import App from '../../App'
import { useForm } from 'react-hook-form'

function Signin() {
	const {register, handleSubmit, errors} = useForm()

	const onSubmit = (formData) => {
		console.log('formData', formData)
	}

	return (
		<div className="App">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="username">Username</label>
				<input ref={register} type="text" name="username"/>
				<label htmlFor="username">Password</label>
				<input ref={register} type="text" name="password"/>
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Signin
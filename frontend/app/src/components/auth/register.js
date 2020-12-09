import React from 'react'
import App from '../../App'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { registerApi } from '../../actions/auth'

function Register() {
	const {register, handleSubmit, errors} = useForm()

	const onSubmit = (formData) => {
		registerApi(formData, (data) => {
			console.log('registered data', data)
		}, () => {})
	}

	return (
		<div className="App">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="username">Username</label>
				<input ref={register} type="text" name="username"/>
				<label htmlFor="first_name">First Name</label>
				<input ref={register} type="text" name="first_name"/>
				<label htmlFor="last_name">Last Name</label>
				<input ref={register} type="text" name="last_name"/>
				<label htmlFor="email">Email</label>
				<input ref={register} type="text" name="email"/>
				<label htmlFor="password">Password</label>
				<input ref={register} type="password" name="password"/>
				<label htmlFor="confirm_password">Confirm Password</label>
				<input ref={register} type="password" name="confirm_password"/>

				
				<button type="submit">Register</button>
			</form>
			<div>
				<Link to={
							{
								pathname: "/signin",
								state: {
									from: "Register"
								}
							}
					}>
					Login
				</Link>
			</div>
		</div>
	)
}

export default Register
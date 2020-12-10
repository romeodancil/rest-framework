import React, { useState } from 'react'
import App from '../../App'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { registerApi } from '../../actions/auth'
import AlertMessage from '../common/alertMessage'

function Register() {
	const {register, handleSubmit, errors} = useForm()
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState('')

	const onSubmit = (formData) => {
		registerApi(formData, (data) => {
			setSuccess(true)
			setError('')
		}, (error) => {
			const { response: { data } } = error
			setError(data)
			setSuccess(false)
		})
	}

	return (
		<div className="App">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="username">Username</label>
				<input ref={register} type="text" name="username" required/>
				<label htmlFor="first_name">First Name</label>
				<input ref={register} type="text" name="first_name" required/>
				<label htmlFor="last_name">Last Name</label>
				<input ref={register} type="text" name="last_name" required/>
				<label htmlFor="email">Email</label>
				<input ref={register} type="text" name="email" required/>
				<label htmlFor="password">Password</label>
				<input ref={register} type="password" name="password" required/>
				<label htmlFor="confirm_password">Confirm Password</label>
				<input ref={register} type="password" name="confirm_password" required/>
				<button type="submit">Register</button>
				{
					(success)
					?
						<div>
							<AlertMessage className={""} message={["Successfully Save"]}/>
						</div>
					: ''
				}
				{
					(error)
					?
						<div>
							<AlertMessage className={""} message={error}/>
						</div>
					: ''
				}
				
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
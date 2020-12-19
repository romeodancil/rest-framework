import React, { useState } from 'react'
import App from '../../App'
import { useForm } from 'react-hook-form'
import AlertMessage from '../common/alertMessage'
import { forgotPassword } from '../../actions/auth'

function ForgotPassword() {
	const {register, handleSubmit, errors} = useForm()
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState('')

	const onSubmit = (formProps) => {
		console.log('formProps', formProps)

		forgotPassword(formProps, (success) => {
			setSuccess(true)
			setError('')
		}, (error) => {
			const { response: { data } } = error
			setError(data)
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor="email">Email: </label>
			<input ref={register} type="email" name="email"/>
			{
				(success)
				?
					<div>
						<AlertMessage className={""} message={["Password Reset Email Successfully Sent"]}/>
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
			<button type="submit">Submit</button>
		</form>
	)
}

export default ForgotPassword
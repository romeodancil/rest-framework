import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { confirmPassword } from '../../actions/auth'
import AlertMessage from '../common/alertMessage'
import { useHistory, useLocation } from 'react-router-dom'

function ConfirmPassword() {
	const {register, handleSubmit, errors} = useForm()
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState('')
	const history = useHistory()
	const location = useLocation()

	const onSubmit = (formProps) => {
		formProps['token'] = location.pathname.split('/').pop()
		confirmPassword(formProps, (success) => {
			setSuccess(true)
			setError('')
		}, (error) => {
			const { response: { data } } = error
			setError(data)
			setSuccess(false)
		})
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="password">New Password</label>
				<input ref={register} type="password" name="password"/>
				{
					(success)
					?
						<div>
							<AlertMessage className={""} message={["Password Successfully Reset"]}/>
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
			</div>
		</form>
	)
}

export default ConfirmPassword
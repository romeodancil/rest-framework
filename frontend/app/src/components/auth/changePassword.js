import React, { useState } from 'react'
import App from '../../App'
import { useForm } from 'react-hook-form'
import { changePassword } from '../../actions/auth'
import { useLocalState } from '../../hooks/hooks'
import AlertMessage from '../common/alertMessage'

function ChangePassword() {
	const {register, handleSubmit, errors} = useForm()
	const [token, setToken] = useLocalState('token')
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState('')

	const onSubmit = (formProps) => {
		changePassword(formProps, token.token, (success) => {
			setSuccess(true)
			setError('')
		}, (error) => {
			const { response: { data } } = error
			setError(data)
		})
	}

	return (
		<App>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="old_password">Old Password</label>
				<input ref={register} type="password" name="old_password" required/>
				<label htmlFor="new_password">New Password</label>
				<input ref={register} type="password" name="new_password" required/>
				<label htmlFor="confirm_password">Confirm Password</label>
				<input ref={register} type="password" name="confirm_password" required/>
				{
					(success)
					?
						<div>
							<AlertMessage className={""} message={["Password Successfully Updated"]}/>
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
		</App>
	)
}

export default ChangePassword
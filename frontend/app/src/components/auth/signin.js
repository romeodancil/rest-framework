import React, { useState } from 'react'
import App from '../../App'
import { useForm } from 'react-hook-form'
import { login } from '../../actions/auth'
import { useLocalState } from '../../hooks/hooks'
import { Link } from 'react-router-dom'
import AlertMessage from '../common/alertMessage'
import { useHistory } from 'react-router-dom'

function Signin() {
	const {register, handleSubmit, errors} = useForm()
	const [token, setToken] = useLocalState('token')
	const [error, setError] = useState('')
	const history = useHistory()

	const onSubmit = (formData) => {
		login(formData, (data) => {
			setToken(data)
			history.push('/')
		}, (e) => {
			const { response: { data } } = e
			setError(data)
		})
	}

	return (
		<div className="App">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="username">Username</label>
				<input ref={register} type="text" name="username"/>
				<label htmlFor="password">Password</label>
				<input ref={register} type="password" name="password"/>
				<button type="submit">Login</button>
				{
					(error)
					?
						<div>
							<AlertMessage className={""} message={error}/>
						</div>
					: ''
				}
				<div>
					<Link to={
								{
									pathname: "/register",
									state: {
										from: "Register"
									}
								}
						}>
						Register
					</Link>
					&nbsp;|&nbsp;
					<Link to={
								{
									pathname: "#",
									state: {
										from: "Register"
									}
								}
						}>
						Forgot Password
					</Link>
				</div>
			</form>
		</div>
	)
}

export default Signin
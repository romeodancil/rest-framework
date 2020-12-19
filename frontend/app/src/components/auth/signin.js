import React, { useState } from 'react'
import App from '../../App'
import { useForm } from 'react-hook-form'
import { login } from '../../actions/auth'
import { useLocalState } from '../../hooks/hooks'
import { Link } from 'react-router-dom'
import AlertMessage from '../common/alertMessage'
import { useHistory } from 'react-router-dom'
import { Form, Button, Input } from 'antd'

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
			<Form name="basic" onFinish={onSubmit}>
				<Form.Item
			        label="Username"
			        name="username"
			        rules={[
			          {
			            required: true,
			            message: 'Please input your username!',
			          },
			        ]}
			    >
			    	<Input />
      			</Form.Item>
				<Form.Item
			        label="Password"
			        name="password"
			        rules={[
			          {
			            required: true,
			            message: 'Please input your password!',
			          },
			        ]}
			    >
			    	<Input.Password />
      			</Form.Item>
      			{
					(error)
					?
						<Form.Item>
							<div>
								<AlertMessage title="Error" type="error" message={error}/>
							</div>
						</Form.Item>
					: ''
				}
      			<Form.Item>
			        <Button type="primary" htmlType="submit">
			          Login
			        </Button>
			        &nbsp;
			        <Link to={
								{
									pathname: "/register",
									state: {
										from: "Signin"
									}
								}
						}>
						Register
					</Link>
					&nbsp;|&nbsp;
					<Link to={
								{
									pathname: "/password-reset",
									state: {
										from: "Signin"
									}
								}
						}>
						Forgot Password
					</Link>
			    </Form.Item>
		    </Form>
		</div>
	)
}

export default Signin
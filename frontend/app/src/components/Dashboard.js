import React from 'react'
import App from '../App'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { logoutApi } from '../actions/auth'
import { useLocalState } from '../hooks/hooks'

function Dashboard() {
	const history = useHistory()
	const [token, setToken] = useLocalState('token')

	const logout = () => {
		logoutApi(token.token, () => {
			localStorage.removeItem('token')
			history.push('/signin')
		}, () => {})
	}

	return (
		<App>
			<h1>Dashboard</h1>
			<button onClick={logout}>Logout</button>
			&nbsp;|&nbsp;
			<Link to={"/change-password"}>Change Password</Link>
		</App>
	)
}

export default Dashboard
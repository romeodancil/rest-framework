import { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { sampleRequest } from './actions/sampleActions'
import { useLocalState } from './hooks/hooks'
import { useHistory } from 'react-router-dom'

function App({children}) {
	const [token, setToken] = useLocalState('token')
	const history = useHistory()
	console.log('token', token)
	if (!token) {
		history.push('/signin')
	}

	useEffect(() => {
		sampleRequest((data) => {
			console.log('data', data)
		}, () => {})
	}, [])

	const { Header, Footer, Content } = Layout
	return (
		<Layout>
			<Header>
				<h3>Header</h3>
			</Header>
			<Content>
				{children}
			</Content>
			<Footer>
				<h3>Footer</h3>
			</Footer>
		</Layout>
	);
}

export default App;

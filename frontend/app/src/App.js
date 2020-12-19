import "antd/dist/antd.css"
import { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { sampleRequest } from './actions/sampleActions'
import { useLocalState } from './hooks/hooks'
import { useHistory } from 'react-router-dom'

function App({children}) {
	const [token, setToken] = useLocalState('token')
	const { Header, Footer, Content } = Layout
	const history = useHistory()

	if (!token) {
		history.push('/signin')
	}

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

export default App

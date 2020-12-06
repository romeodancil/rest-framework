import { useState, useEffect } from 'react'
import { Layout } from 'antd'
import { sampleRequest } from './actions/sampleActions'

function App({children}) {

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

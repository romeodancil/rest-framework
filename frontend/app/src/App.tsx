import { useState, useEffect } from 'react'
import { useLocalState } from './hooks/hooks'

interface Props {
	children: any
}

function App({children}: Props) {
	return (
		<div>
			<div className="header">
				<h3>Header</h3>
			</div>
			<div className="content">
				{children}
			</div>
			<div className="footer">
				<h3>Footer</h3>
			</div>
		</div>
	);
}

export default App

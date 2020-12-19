import React from 'react'
import { Alert } from 'antd';

function AlertMessage({message, type, title}) {
	const messageKeys = Object.keys(message)
	let messageElem = []
	
	if (messageKeys.length > 0) {
		for (let i=0;i < messageKeys.length;i++) {
			messageElem.push(<Alert key={i} message={title} description={message[messageKeys[i]]} type={type} showIcon />)
		}
	} else {
		messageElem = `<div>${message}</div>`
	}

	return (
		<div>{messageElem}</div>
	)
}

export default AlertMessage
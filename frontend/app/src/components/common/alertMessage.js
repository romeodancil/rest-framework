import React from 'react'

function AlertMessage({message, className}) {
	const messageKeys = Object.keys(message)
	let messageElem = []
	
	if (messageKeys.length > 0) {
		for (let i=0;i < messageKeys.length;i++) {
			messageElem.push(<div key={i}>{message[messageKeys[i]]}</div>)
		}
	} else {
		messageElem = `<div>${message}</div>`
	}

	return (
		<span className={className}>{messageElem}</span>
	)
}

export default AlertMessage
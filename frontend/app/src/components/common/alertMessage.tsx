import React from 'react'

interface Props {
	message: Array<any>;
	type: any;
	title: string;
}

function AlertMessage({message, type, title}: Props) {
	let messageElem: any = []

	const messageKeys: Array<any> = Object.keys(message)
	
	if (messageKeys.length > 0) {
		for (let i=0;i < messageKeys.length;i++) {
			messageElem.push(<div key={i}>{message[messageKeys[i]]}</div>)
		}
	} else {
		messageElem = `<div>${message}</div>`
	}

	return (
		<div>{messageElem}</div>
	)
}

export default AlertMessage
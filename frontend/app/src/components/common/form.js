import React from 'react'
import { Form } from 'antd'

function CustomForm({children, onSubmit, name}) {
	return (
		<Form name={name} onFinish={onSubmit}>
			{children}
		</Form>
	)
}

export default CustomForm
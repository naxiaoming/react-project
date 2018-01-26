import React from 'react'

const Title = (props)=>(
	<div className="title">
		<p>{props.title}</p>
		<span>{props.more}</span>
	</div>
)

export default Title
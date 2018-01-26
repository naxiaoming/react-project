import React from 'react'

const Forlist = (props)=>(
	<ul>
		{
			props.show.map((item)=>(
				<li key={item.gid} className={props.show.length%2 === 0 ? 'float' : ''}>
					<span>{item.tag}</span>
					<p>{item.tag_en}</p>
					<img src={item.pic} alt=""/>
				</li>
			))
		}		
	</ul>
)

export default Forlist
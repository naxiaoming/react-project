import React from 'react'
import { Link } from 'react-router'

const Forlist = (props)=>(
	<ul>
		{
			props.show.map((item)=>(
				<Link to={`/details/${item.gid}`} key={item.gid} className={props.show.length%2 === 0 ? 'float' : ''}>
					<span>{item.tag}</span>
					<p>{item.tag_en}</p>
					<img src={item.pic} alt=""/>
				</Link>
			))
		}		
	</ul>
)

export default Forlist
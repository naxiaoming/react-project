import React,{Component} from 'react'
import { Link } from 'react-router'

class navList extends Component{
	render(){
		let { cates } = this.props
		console.log(cates)
		return (
			<div className="navlist">
				<ul>
					{
						cates.map((item)=>(
							<Link to={'/list/'+item.cid+'/'+item.tid} key={item.cid}>
								<img src={item.pic} alt="" />
								<span>{item.tag}</span>
							</Link>
						))
					}		
				</ul>
			</div>
		)
	}
}

export default navList

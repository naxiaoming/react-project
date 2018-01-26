import React,{Component} from 'react'

class navList extends Component{
	render(){
		let { cates } = this.props
//		console.log(cates)
		return (
			<div className="navlist">
				<ul>
					{
						cates.map((item)=>(
							<li key={item.cid}>
								<img src={item.pic} alt="" />
								<span>{item.tag}</span>
							</li>
						))
					}		
				</ul>
			</div>
		)
	}
}

export default navList

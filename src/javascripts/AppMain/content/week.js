import React,{Component} from 'react'

class Week extends Component{
	render(){
		let { ad } = this.props
//		console.log(ad)
		return (
			<div className="week">
				{
					ad.map((item)=>{
						return <img src={item.pic} alt="" key={item.gid}/>
					})
			}
			</div>
		)
	}
}

export default Week

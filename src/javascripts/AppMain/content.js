import React,{Component} from 'react'
import Banner from './content/banner'

class Content extends Component{
	render(){
		let { data } = this.props
		return (
			<div className="content">
				<Banner data={data}/>
			</div>
		)
	}
}

export default Content

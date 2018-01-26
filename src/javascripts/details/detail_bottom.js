import React,{Component} from 'react'
class BottomBox extends Component{
	
	render(){
		let {txtcontent}=this.props
		return(
				<div className="details-bottom-img" dangerouslySetInnerHTML={{__html:txtcontent}} />
		)
	}
	
}
export default BottomBox

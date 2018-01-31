import React,{Component} from 'react'

class Seach extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="seach">
				<div className="seach-top">
	        		<i className="fa fa-angle-left"></i>
	        		<h1>查找体验店</h1>
	        		<div className="top-right">
	        			<span className="fa fa-shopping-cart"></span>
	        			<span className="fa fa-bars"></span>
	        		</div>
	        	</div>
	        	<div className="tabs">
	 				<ul>
	 					<li>列表</li>
	 					<li>地图</li>
	 				</ul>
	        	</div>
			</div>
		)
	}
}

export default Seach

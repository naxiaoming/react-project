import React,{Component} from 'react'

class Loho extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="loho">
				<ul>
					<li>
						<i className="fa fa-eercast"></i>
						<span>欢迎到体验店试戴</span>
					</li>
					<li>
						<i className="fa fa-phone"></i>
						<p>
							<span>预约热线：400-887-1920</span>
							<span>（服务时间 9:00 - 23:00）</span>
						</p>
					</li>
				</ul>
				<div className="loimg">
					<img src="http://m.loho88.com/assets/images/logo.png" alt="" />
				</div>
				<div className="lop">©2005-2016 深圳市乐活电子商务有限公司版权所有，并保留所有权利。</div>
			</div>
		)
	}
}

export default Loho

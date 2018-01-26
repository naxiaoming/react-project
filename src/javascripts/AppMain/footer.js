import React,{Component} from 'react'
import {Link} from "react-router"
class Footer extends Component{
	render(){
		return (
			<div className="footer">
				<div>
					<Link>
						<img src="http://m.loho88.com/assets/images/index-bootom/home.jpg" alt=""/>
						<span>首页</span>
					</Link>
					<Link to="/tuangou">
						<img src="http://m.loho88.com/assets/images/index-bootom/groupBuy.png" alt=""/>
						<span>团购</span>
					</Link>
					<Link>
						<img src="http://m.loho88.com/assets/images/index-bootom/serve.jpg" alt=""/>
						<span>客服</span>
					</Link>
					<Link>
						<img src="http://m.loho88.com/assets/images/index-bootom/location.jpg" alt=""/>
						<span>附近体验店</span>
					</Link>
					<Link>
						<img src="http://m.loho88.com/assets/images/index-bootom/my.jpg" alt=""/>
						<span>我的</span>
					</Link>
				</div>
			</div>
		)
	}
}

export default Footer

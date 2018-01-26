import React,{Component} from 'react'

class Footer extends Component{
	render(){
		return (
			<div className="footer">
				<ul>
					<li>
						<img src="http://m.loho88.com/assets/images/index-bootom/home.jpg" alt=""/>
						<span>首页</span>
					</li>
					<li>
						<img src="http://m.loho88.com/assets/images/index-bootom/groupBuy.png" alt=""/>
						<span>团购</span>
					</li>
					<li>
						<img src="http://m.loho88.com/assets/images/index-bootom/serve.jpg" alt=""/>
						<span>客服</span>
					</li>
					<li>
						<img src="http://m.loho88.com/assets/images/index-bootom/location.jpg" alt=""/>
						<span>附近体验店</span>
					</li>
					<li>
						<img src="http://m.loho88.com/assets/images/index-bootom/my.jpg" alt=""/>
						<span>我的</span>
					</li>
				</ul>
			</div>
		)
	}
}

export default Footer

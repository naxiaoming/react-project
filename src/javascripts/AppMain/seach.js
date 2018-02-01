import React,{Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router'

class Seach extends Component{
	constructor(props){
		super(props)
		this.state = {
			city:'',
			stores:[],
			isShow:true
		}
	}
	componentWillMount(){
		let that = this
		axios.get('http://localhost:3000/loho/store/302').then(function(res){
			console.log(res)
			that.setState({
				city:res.data.result.city,
				stores:res.data.result.stores
			})
		})
	}
	changeShow(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
	render(){
		let { city,stores,isShow } = this.state
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
	 					<li className="active">列表</li>
	 					<li>地图</li>
	 				</ul>
	        	</div>
	        	<div className="tab-thing">
	        		<div className="tab-title">
	        			<p>北京共17家体验店（全国<span>268</span>家）</p>
	        			<Link to='/choiceCity'>{city}<i className="fa fa-angle-right"></i></Link>
	        		</div>
	        	</div>
	        	<div className="tab-nr">
	        		{
						stores.map((item)=>(
							<div className="bor" key={item.catId}>
								<p onClick={this.changeShow.bind(this)}>{item.catName}<i className="fa fa-angle-up"></i></p>
								{
									isShow?<div>
												<div className="juli"><i className="fa fa-hand-o-right"></i>25.82km</div>
								        		<img src={`http://image.loho88.com/${item.store_image}`} alt=""/>
								        		<div className="dizhi">地址：{item.chineseAddress}</div>
								        		<div className="yuyue">
								        			<span>免费预约直营店验光</span>
								        			<i className="fa fa-phone"></i>
								        		</div>
											</div>:''
								}
							</div>
						))
					}     		
	        	</div>
			</div>
		)
	}
}

export default Seach

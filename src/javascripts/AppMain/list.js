import React,{Component} from 'react'
import axios from 'axios'
import BackTop from "../details/back-top"
import { hashHistory } from "react-router"
import { Link } from 'react-router'

class List extends Component{
	constructor(props){
		super(props)
		this.state = {
			data:[]
		}
	}
	componentWillMount(props){
//		console.log(this.props.params)
		let that = this
		axios.get('http://localhost:3000/loho/search/?e='+this.props.params.tid+'&page=1').then(function(res){
//			console.log(res.data.result.data)
			that.setState({
				data:res.data.result.data
			})
		})
	}
	back() {
		hashHistory.go(-1)
	}
	render(){
		let { data } = this.state
		return (
			<div className="list">
				<div className="list-top">
	        		<i onClick={this.back} className="fa fa-angle-left"></i>
	        		<h1>新品上市</h1>
	        		<div className="top-right">
	        			<span className="fa fa-shopping-cart"></span>
	        			<span className="fa fa-bars"></span>
	        		</div>
	        	</div>
	        	<div className="list-nav">
	        		<ul>
	        			<li>综合</li>
	        			<li>销量</li>
	        			<li>价格</li>
	        			<li>筛选
	        				<i className="fa fa-filter"></i>
	        			</li>
	        		</ul>
	        	</div>
	        	<div className="list-nr">
	        		<div className="list-zhu">
	        			<ul>
	        				{
	        					data.map((item)=>(
	        						<li key={item.goodsId}>
			        					<p>
			        						<img src={`http://image.loho88.com/${item.img}`} alt="" />
			        					</p>
			        					<span>{item.title}</span>
			        					<div>
			        						<em>¥ {item.price}</em>
			        						<i>{item.salesNum}人已买</i>
			        					</div>
			        				</li>
	        					))
	        				}
	        			</ul>
	        		</div>
	        		<div className="list-fen">
	        			
	        		</div>
	        	</div>
			</div>
		)
	}
}

export default List

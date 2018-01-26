import React,{Component} from 'react'
import {Link} from 'react-router'
import TuanGouList from "./tuangou-list"
class TuanGou extends Component{
	constructor(props){
		super(props)
		this.state={
			HeaderList:[
				{id:1,text:"首页",icon:'home',path:'/home'},
				{id:2,text:"会员中心",icon:'user',path:'/vip'},
				{id:3,text:"购物车",icon:'shopping-cart',path:'/buycar'},
				{id:4,text:"在线咨询",icon:'comment',path:'/Consultation'}
			],
			isShow:true,
		}
		this.xy=this.xy.bind(this)
	}
	xy(){
		if(this.state.isShow){
			this.setState({
				isShow:false				
			})
		}else{
			this.setState({
				isShow:true				
			})
		}
	}
	render(){
		let {HeaderList,isShow}=this.state
		return(
			<div className="tg">
				<div className="tg-header">
					<Link to="/home" className="fa fa-angle-left"></Link>
					<span>团购分类</span>
					<em><i onClick={this.xy} className="fa fa-th"></i></em>
				</div>
				<div style={{display:isShow?'none':'block'}} className="tg-header-list">
					<div className="tg-header-item">
						{
							HeaderList.map((item)=>(
								<Link to={item.path} key={item.id}>
									<i  className={`fa fa-${item.icon}`}></i>
									<span>{item.text}</span>
								</Link>
							))
						}
					</div>
				</div>
				<TuanGouList/>
			</div>
		)
	}
	
}
export default TuanGou
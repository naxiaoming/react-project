import React, {
	Component
} from 'react'
import { Link } from "react-router"
import ColorChoice from './colors_type'
import DetailStore from "./detail_store"
import BottomBox from "./detail_bottom"
import PromiseItem from "./promiseItem"
import BannerBox from "./detail_banner"
import LookAgain from "./lookAgain"
import BackTop from "./back-top"
import 'swiper/dist/css/swiper.min.css'
import { hashHistory } from "react-router"
import axios from "axios"

class Details extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			swipe: [],
			promiseTag: [],
			txtcontent: '',
			color: [],
			unioned: [],
			unionedImg: [],
			lookAgain: [],
			isShow: true,
			isShowz: true

		}
		this.xy = this.xy.bind(this)
		this.xyz = this.xyz.bind(this)
		this.back = this.back.bind(this)
	}
	
	componentWillMount() {
		this.getInfo(this.props.params.id)
		
	}
	getInfo(id) {
		
		let that = this
		axios.get('/loho/goods/' + id).then((res) => {
			that.setState({
				data: res.data.result.info,
				swipe: res.data.result.info.pics,
				txtcontent: res.data.result.txtcontent.replace(/src="\/images\/blank.gif"/g, '').replace(/vip-src="\/images\//g, 'src="http://image.loho88.com/images/').replace(/data-src="\/images\//g, 'src="http://image.loho88.com/images/').replace(/vip-src="\/includes\/kindeditor\/attached\//g, 'src="http://image.loho88.com/includes/kindeditor/attached/').replace(/data-src="\/includes\/kindeditor\/attached\//g, 'src="http://image.loho88.com/includes/kindeditor/attached/'),
			})
			if(res.data.result.unioned == '') {
				that.setState({
					unioned: [],
					unionedImg: []
				})
			} else {
				that.setState({
					unioned: res.data.result.unioned[0],
					unionedImg: res.data.result.unioned[0].goods
				})
			}
			if(res.data.result.models[0].goodsName == "测试添加商品，请勿下单222") {
				that.setState({
					color: []
				})
			} else {
				that.setState({
					color: res.data.result.models
				})
			}
			if(res.data.result.info.promiseTag == "") {
				that.setState({
					lookAgain: []
				})
			} else {
				that.setState({
					promiseTag: res.data.result.info.promiseTag
				})
			}

		});
		console.log(1)
		axios.get('/loho/goods/peddle/' + id).then((res) => {
			if(res.data.result == "") {
				that.setState({
					lookAgain: []
				})
			} else {
				that.setState({
					lookAgain: res.data.result
				})
			}
		})
	}
	
	xy() {
		if(this.state.isShow) {
			this.setState({
				isShow: false
			})
		} else {
			this.setState({
				isShow: true
			})
		}
	}
	xyz() {
		if(this.state.isShowz) {
			this.setState({
				isShowz: false
			})
		} else {
			this.setState({
				isShowz: true
			})
		}
	}
	back() {
		hashHistory.go(-1)
	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.params.id !== this.props.params.id) {
			this.getInfo(nextProps.params.id)
		}
	}
	render() {

		let {
			data,
			swipe,
			promiseTag,
			txtcontent,
			color,
			unioned,
			unionedImg,
			lookAgain,
			isShow,
			isShowz
		} = this.state
		
		return(
			<div className="detail-page">
					{this.props.children}
					<div className="details-header">
						<a><i onClick={this.back} className="fa fa-angle-left"></i></a>
						<span>
							<i  className="fa fa-shopping-cart"></i>
							<em onClick={this.xy} className="fa fa-list-ul"></em>
						</span>
					</div>
					<div style={{display:isShow?'none':'block'}} className="detail-header-position">
						<ul>
							<li>
								<Link to="/vip">
									<i className="fa fa-user-o"></i>
									<b>会员中心</b>
								</Link>
							</li>
							<li>
								<Link to="/home">
									<i className="fa fa-home"></i>
									<b>首页</b>
								</Link>
							</li>
						</ul>
					</div>
					<div className="swiper-container banner">
		                <BannerBox swipe={swipe} />
		            </div>
		            <div className="details-title">
		            	<div className="details-title-title">
		            		<span>{data.goodsName}</span>
		            		<em onClick={this.xyz}>
		            			<i className="fa fa-share-alt"></i>
		            			<span>分享</span>
		            		</em>
		            	</div>
		            	<div style={{display:isShowz?'none':'block'}} className="details-share">
		            			<i className="fa fa-weixin"></i>
		            			<i className="fa fa-qq"></i>
		            			<i className="fa fa-weibo"></i>
		            	</div>
		            	<div className="details-title-price">
		            		<span>¥{data.shopPrice}</span>
		            		<b>快递:免运费</b>
		            		<em>{data.salesNum}人已购买</em>
		            	</div>
		            </div>
		            
			            	{
			            		promiseTag==""?'':<PromiseItem promiseTag={promiseTag}/>
			            	}
			            	
		            
		            {
		            	color==""?"":<ColorChoice data={color} unioned={unioned} unionedImg={unionedImg}/>
		            }
		           	
		           	<DetailStore/>
		            <BottomBox txtcontent={txtcontent}/>
		            {
		            	lookAgain==""?"":<LookAgain lookAgain={lookAgain}/>
		            }
		            <div className="lookBottomBox">
			            <div className="lookBottom">
							<span>已经到底了</span>
						</div>
					</div>
		            <div className="bottom-position">
		            	<div className="bp-left">
		            		<p>
		            			<i className="fa fa-commenting-o"></i>
		            			<span>客服</span>
		            		</p>
		            	</div>
		            	<div className="bp-left">
		            		<p>
		            			<i className="fa fa-star-o"></i>
		            			<span>收藏</span>
		            		</p>
		            	</div>
		            	<div className="bp-rightOne">
		            		<span>加入购物车</span>
		            	</div>
		            	<div className="bp-rightTwo">
		            		<span>预约附近验光点</span>
		            	</div>
		            </div>
		          	<BackTop/>
			</div>
		)
	}

}
export default Details
import React, {
	Component
} from 'react'
import ColorChoice from './colors_type'
import DetailStore from "./detail_store"
import BottomBox from "./detail_bottom"
import PromiseItem from "./promiseItem"
import BannerBox from "./detail_banner"
import 'swiper/dist/css/swiper.min.css'
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
			unionedImg: []

		}
	}
	componentWillMount() {
		let that = this
		let ItemId = this.props.params.id
		axios.get('/loho/goods/' + ItemId).then((res) => {
			that.setState({
				data: res.data.result.info,
				swipe: res.data.result.info.pics,
				
				txtcontent: res.data.result.txtcontent.replace(/src="\/images\/blank.gif"/g, '').replace(/vip-src="\/images\//g, 'src="http://image.loho88.com/images/').replace(/data-src="\/images\//g, 'src="http://image.loho88.com/images/').replace(/vip-src="\/includes\/kindeditor\/attached\//g,'src="http://image.loho88.com/includes/kindeditor/attached/').replace(/data-src="\/includes\/kindeditor\/attached\//g,'src="http://image.loho88.com/includes/kindeditor/attached/'),
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
					promiseTag: []
				})
			} else {
				that.setState({
					promiseTag: res.data.result.info.promiseTag
				})
			}

		});

		axios.get('/loho/goods/peddle/' + ItemId).then((res) => {

		})
	}
	render() {
		let {
			data,
			swipe,
			promiseTag,
			txtcontent,
			color,
			unioned,
			unionedImg
		} = this.state
		return(
			<div className="detail-page">
				
					<div className="details-header">
						<a><i className="fa fa-angle-left"></i></a>
						<span>
							<i className="fa fa-shopping-cart"></i>
							<em className="fa fa-list-ul"></em>
						</span>
					</div>
					<div className="swiper-container banner">
		                <BannerBox swipe={swipe} />
		            </div>
		            <div className="details-title">
		            	<div className="details-title-title">
		            		<span>{data.goodsName}</span>
		            		<em>
		            			<i className="fa fa-share-alt"></i>
		            			<span>分享</span>
		            		</em>
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
			</div>
		)
	}

}
export default Details
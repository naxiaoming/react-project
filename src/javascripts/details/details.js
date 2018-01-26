import React,{Component} from 'react'
import ColorChoice from './colors_type'
import DetailStore from "./detail_store"
import BottomBox from "./detail_bottom"
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import axios from "axios"

class Details extends Component{
	constructor(props){
		super(props)
		this.state={
			data:[],
			swipe:[],
			promiseTag:[],
			txtcontent:'',
			color:[],
			unioned:[],
			unionedImg:[]
			
		}
	}
	componentWillMount(){
		let that=this
		let ItemId=this.props.params.id
		axios.get('/loho/goods/'+ItemId).then((res)=>{
			that.setState({
				data:res.data.result.info,
				swipe:res.data.result.info.pics,
				promiseTag:res.data.result.info.promiseTag,
				txtcontent:res.data.result.txtcontent.replace(/src="\/images\/blank.gif"/g,'').replace(/vip-src="\/images\//g,'src="http://image.loho88.com/images/').replace(/data-src="\/images\//g,'src="http://image.loho88.com/images/'),
				color:res.data.result.models
				
			})
			if(res.data.result.unioned==''){
				that.setState({
				unioned:[],
				unionedImg:[]
			})
			}else{
				that.setState({
				unioned:res.data.result.unioned[0],
				unionedImg:res.data.result.unioned[0].goods
			})
			}
			
		});
		
		axios.get('/loho/goods/peddle/'+ItemId).then((res)=>{		
			
		})
		
		
	}
	componentDidUpdate(){
		
        new Swiper('.banner',{
        	autoplay:{
        		delay:3000,
        		stopOnLastSlide:false,
        		disableOnInteraction:false
        	},
            pagination: {
                el: '.banner-pagination',
              }
        })
        
  }
	render(){
		let {data,swipe,promiseTag,txtcontent,color,unioned,unionedImg}=this.state
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
		                <div className="swiper-wrapper">
		                    {
		                        swipe.map((item,i)=>(
		                            <div className="swiper-slide" key={i}>
		                                <img style={{width:'100%',height:'200px'}} src={`http://image.loho88.com/`+item} alt={item.name}/>
		                            </div>
		                        ))
		                    }
		                   
		                </div>		                
		            	<div className="swiper-pagination banner-pagination"></div>
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
		            <div className="details-title-tag">
			            	{
			            		promiseTag.map((item,i)=>(
			            			<span key={i}>
			            				<i className="fa fa-check-square"></i>
			            				<b>{item}</b>
			            			</span>
			            		))
			            	}
		            </div>
		           	<ColorChoice data={color} unioned={unioned} unionedImg={unionedImg}/>
		           	<DetailStore/>
		            <BottomBox txtcontent={txtcontent}/>		            
			</div>
		)
	}
	
}
export default Details


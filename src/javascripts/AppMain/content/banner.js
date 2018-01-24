import React,{Component} from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class Banner extends Component{
	shouldComponentUpdate(props){
		if(props.data.length === this.props.data.length){
			return false
		}else{
			return true
		}
	}
	componentDidUpdate(){
		new Swiper('.banner',{
			pagination:{
				el:'.banner-pagination'
			}
		})
	}
	render(){
		let { data } = this.props
		console.log(data)
		return (
			<div className="swiper-container banner">
				<div className="swiper-wrapper">
				{
					data.map((item,i)=>(
						<div className="swiper-slide" key={i}>
							<img src={item.pic} alt="" />
						</div>	
					))
				}
				</div>
				<div className="swiper-pagination banner-pagination"></div>
			</div>
		)
	}
}

export default Banner

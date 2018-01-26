import React,{Component} from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class Banner extends Component{
	shouldComponentUpdate(props){
		if(props.focus.length === this.props.focus.length){
			return false
		}else{
			return true
		}
	}
	componentDidUpdate(){
		new Swiper('.banner',{
			pagination:{
				el:'.banner-pagination'
			},
			autoplay:true,
			loop: true
		})
	}
	render(){
		let { focus } = this.props
		console.log(focus)
		return (
			<div className="swiper-container banner">
				<div className="swiper-wrapper">
				{
					focus.map((item,i)=>(
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

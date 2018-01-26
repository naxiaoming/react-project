import React, {
	Component
} from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

class DetailBanner extends Component {
	shouldComponentUpdate(props) {
		if(props.swipe === this.props.swipe) {
			return false
		} else {
			return true
		}
	}
	componentDidUpdate() {
		new Swiper('.banner', {
			autoplay: {
				delay: 3000,
				stopOnLastSlide: false,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.banner-pagination',
				clickable: true,
				loop: true
			}
		})
	}
	render() {
		let {
			swipe
		} = this.props
		return(
			<div className="swiper-container banner">
				<div className="swiper-wrapper">
		                    {
		                        swipe.map((item,i)=>(
		                            <div className="swiper-slide" key={i}>
		                                <img style={{width:'100%',height:'200px'}} src={`http://image.loho88.com/`+item} alt={item.pics}/>		                            
		                            </div>
		                        ))
		                    }
		                   
		                </div>		                
		            	<div className="swiper-pagination banner-pagination"></div>
			</div>
		)
	}
}

export default DetailBanner
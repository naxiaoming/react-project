import React, {
	Component
} from 'react'
class ColorBottom extends Component {
	render() {
		let {
			unioned,
			unionedImg
		} = this.props
		return(
			<div className="color-choice-item">
							
								{
									unionedImg.map((item,i)=>(
									<div key={i} className="color-item-img-box">
										
					            		<div className="color-item-img">
					            	
					            			<img alt={item.goodsThumbMin} src={`http://image.loho88.com/${item.goodsThumbMin}`}/>
					            		</div>
					            	
				            		</div>
				            	
									))
								}
				            	
				            	
				            	<a>
				            		<em>{unioned.tname}</em>
				            		<span>
				            			<b>{unionedImg==''?'':"¥"+unioned.price}</b>
				            			<em>{unionedImg==''?'':'¥ 698'}</em>
				            		</span>
				            	</a>
				            	{unionedImg==''?'':<i className="fa fa-angle-right"></i>}
				            </div>
		)
	}

}
export default ColorBottom
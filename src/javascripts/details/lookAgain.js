import React, {
	Component
} from 'react'
import {Link} from "react-router"
class lookAgain extends Component {
	
	render() {
		let {lookAgain}=this.props
		return(
			<div className="detail-lookAgain">
					{
						lookAgain.map((item,i)=>(
							<div key={i} className="lookAgain-item">
								<Link to={`/details/${item.goodsId}`}>{
									item.img==""?<img alt={item.img} src={`http://image.loho88.com/images/201709/G_1506385497597248186.jpg`}/>:<img src={`http://image.loho88.com/`+item.img} alt={item.img}/>
								}
								</Link>
								<p>{item.title}</p>
								<span>
									<em>¥{item.price}</em>
									<b>{item.salesNum}已购买</b>
								</span>
							</div>
						))
					}
			</div>
		)
	}

}
export default lookAgain
import React, {
	Component
} from 'react'
class DetailStore extends Component {

	render() {
		return(
			<div className="detail-store">
					<p>海淀圣熙8号店</p>
					<div className="store-km">
						<i className="fa fa-map-marker">25.82km <em>免费预约直营店验光</em></i>
					</div>
					<div className="store-address">
						<span>地址：北京市海淀区学清路甲8号圣熙8号购物中心一层A015</span>
						<i className="fa fa-volume-control-phone"></i>
					</div>
					<div className="store-num">
						<span>查看北京17家门店(全国268家)</span>
						<i className="fa fa-angle-right"></i>
					</div>
				</div>
		)
	}

}
export default DetailStore
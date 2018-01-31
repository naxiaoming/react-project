import React, {
	Component
} from 'react'
class PromiseItem extends Component {
	render() {
		let {
			promiseTag
		} = this.props
		return(
			<div className="details-title-tag">
					
						{
							promiseTag.map((item, i) => (
								<span key={i}>
								    <i className="fa fa-check-square"></i>
								    <b>{item}</b>
							    </span>
							))
						}
					
				</div>
		)
	}

}
export default PromiseItem
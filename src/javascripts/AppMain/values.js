import React, {
	Component
} from 'react'
class Values extends Component {
	
	render() {
		let {listT}=this.props
		console.log(listT)
		return(
			<ul>
				{
					listT.map((item,i)=>(
						Object.values(item).map((item,i)=>(
							<li key={i}>{item.cityName}</li>
						))												
					))
				}
			</ul>
		)
	}

}
export default Values
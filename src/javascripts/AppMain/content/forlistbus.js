import React,{Component} from 'react'
import Title from './common'
import Forlist from './common/forlist'

class Forlistbus extends Component{
	render(){
		let { classify } = this.props
//		console.log(classify)
		return (
			<div className="forlistbus">
				{
					classify.map((item,i)=>(
						<div key={i}>
							<Title title={item.title.word} more={item.more.word}/>
							<img className="one" src={item.img.pic} alt=""/>
							<Forlist show={item.show}/>
						</div>
					))
				}
			</div>
		)
	}
}

export default Forlistbus

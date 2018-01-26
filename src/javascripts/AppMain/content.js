import React,{Component} from 'react'
import Banner from './content/banner'
import NavList from './content/navList'
import Week from './content/week'
import People from './content/people'
import Forlistbus from './content/forlistbus'
import Guess from './content/guess'
import Loho from './content/loho'
import Fixed from './content/fixed'
class Content extends Component{
	constructor(props){
		super(props)
		this.state = {
			isSize:false
		}
	}
	getGood(){
		this.state.isSize = !this.state.isSize
		this.refs.show.getGoods()
	}
	render(){
		let { focus,ad,adv_home,cates,classify,popular } = this.props
//		console.log(focus,ad,adv_home,cates,classify,popular)
		let { isSize } = this.state
		return (
			<div className="content">
				<Banner focus={focus}/>
				<NavList cates={cates}/>
				<Week ad={ad}/>
				<People popular={popular}/>
				<Forlistbus classify={classify}/>
				<Guess ref='show'/>
				<p className="content-p" onClick={this.getGood.bind(this)}>
					{
						isSize == false? '点击加载更多...':'已经到底部了'
					}
				</p>
				<Loho />
				<Fixed />
			</div>
		)
	}
}

export default Content

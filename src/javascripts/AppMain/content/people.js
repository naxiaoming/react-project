import React,{Component} from 'react'
import { Link } from 'react-router'
import Title from './common'

class People extends Component{
	render(){
		let { popular } = this.props
//		console.log(popular.show)
		return (
			<div className="people">
				{
					popular.title === undefined ? '' : <Title title={popular.title.word} more={popular.more.word}/>
				}
				<img className="one" src="http://img.loho88.com/images/loho-m/guanggaowei2/08-1.jpg" alt=""/>
				<ul>
					{
						popular.show === undefined ? '' : popular.show.map((item)=>(
							<Link to={`/details/${item.gid}`} key={item.gid}>
								<span>{item.tag}</span>
								<p>{item.tag_en}</p>
								<img src={item.pic} alt=""/>
							</Link>
						))
					}		
				</ul>
			</div>
		)
	}
}

export default People

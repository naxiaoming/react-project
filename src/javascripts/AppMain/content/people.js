import React,{Component} from 'react'
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
							<li key={item.gid}>
								<span>{item.tag}</span>
								<p>{item.tag_en}</p>
								<img src={item.pic} alt=""/>
							</li>
						))
					}		
				</ul>
			</div>
		)
	}
}

export default People

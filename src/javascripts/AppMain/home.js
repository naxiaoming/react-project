import React,{Component} from 'react'
import Header from './header'
import Content from './content'

import axios from 'axios'

class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
			data:{
				focus:[]
			}
		}
	}
	componentWillMount(){
		let that = this
		axios.get('http://localhost:3000/loho/index').then(function(res){
			that.setState({
				data:res.data.result
			})
		})
	}
	render(){
		let { data } = this.state
//		console.log(data)
		return (
			<div className="home">
				<Header />
				<Content data={data.focus}/>
			</div>
		)
	}
}

export default Home

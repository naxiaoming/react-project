import React,{Component} from 'react'
import Header from './header'
import Content from './content'
import Footer from './footer'

import axios from 'axios'

class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
			data:{
				focus:[],
				ad:[],
				adv_home:[],
				cates:[],
				classify:[],
				popular:{}
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
				<Content focus={data.focus} ad={data.ad} adv_home={data.adv_home} cates={data.cates} classify={data.classify} popular={data.popular}/>
				<Footer />
				
			</div>
		)
	}
}

export default Home

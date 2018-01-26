import React,{Component} from 'react'
import { Link } from 'react-router'
import axios from 'axios'

class Guess extends Component{
	constructor(props){
		super(props)
		this.state = {
			isShow:false,
			dataLi:[],
			img:[
				'http://img.loho88.com/images/2018/yddcp/LH08011-C6.jpg',
				'http://img.loho88.com/images/2018/yddcp/LH08007-C2.jpg',
				'http://img.loho88.com/images/2018/yddcp/LH08603-C03.jpg',
				'http://img.loho88.com/images/2018/yddcp/LH3005.jpg'
			]
		}
	}
	getGoods(){
		let that = this
		this.state.isShow = !this.state.isShow
		axios.get('http://localhost:3000/loho/search/?sort=o6&e=249&page=2').then(function(res){
//			console.log(res)
			that.setState({
				dataLi:res.data.result.data
			})
//			console.log(that.state.dataLi)
		})
	}
	render(){
		let { dataLi,img } = this.state
		return (
			<div className="guess">
				<div className="guess-top">
					<h1>你可能喜欢</h1>
					<i className="fa fa-angle-down" onClick={this.getGoods.bind(this)}></i>
				</div>
				<div className={this.state.isShow?'guess-content active':'guess-content'}>
					<ul>
						{
							dataLi.map((item,i)=>(
								<Link to={`/details/${item.goodsId}`} key={item.goodsId}>
									<span>NEW</span>
									<div>
										<img src={img[i]} alt=""/>
									</div>
									<p>{item.title}</p>
									<b>¥ {item.price}</b>
								</Link>
							))
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default Guess

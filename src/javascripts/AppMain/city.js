import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			hot:[],
			letters:[],
			list:{}
		}
	}
	componentWillMount(){
		let that = this
		axios.get('http://localhost:3000/loho/store/clist').then(function(res){
			that.setState({
				hot:res.data.result.hot,
				letters:res.data.result.letters,
				list:res.data.result.list
			})
		})
	}
  render() {
  	let { hot,letters,list } = this.state
    return (
      <div className="C-city">
        	<div className="city-top">
        		<i className="fa fa-angle-left"></i>
        		<h1>选择城市</h1>
        		<div className="top-right">
        			<span className="fa fa-shopping-cart"></span>
        			<span className="fa fa-bars"></span>
        		</div>
        	</div>
        	<div className="city-now">
        		<div className="now-left">
        			<i className="fa fa-eercast"></i>
        			<p>当前城市:</p>
        			<span>北京</span>
        		</div>
        		<Link to="/seach" className="fa fa-angle-right"></Link>
        	</div>
        	<div className="hot">
        		<p>热门城市</p>
        		<ul>
        			{
        				hot.map((item)=>(
        					<li key={item.cityId}>{item.cityName}</li>
        				))
        			}
        		</ul>
        	</div>
   				<div className="city-all">
   						<p>全部城市</p>
   						<ul>
	   						{
	   							letters.map((item,i)=>(
	   								<li key={i}>{item}</li>
	   							))
	   						}
   						</ul>
   				</div>
   				<div className="city-class">
   					<div className="city-warp">
   						{
   							Object.keys(list).map((item)=>(
   								list[item].map((key)=>(
   									<ul>
   										<h1>{item}</h1>
   										<li>{key.cityName}</li>
   									</ul>
   								))
   							))
   						}
   					</div>
   				</div>
      </div>
    );
  }
}

export default App;

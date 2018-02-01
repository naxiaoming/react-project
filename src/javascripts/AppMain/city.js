import React, { Component } from 'react';
import axios from 'axios'
import BackTop from "../details/back-top"
import { Link } from 'react-router'
import Values from "./values"
class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			hot:[],
			letters:[],
			list:[],
			listT:[]
		}
	}
	componentWillMount(){
		let that = this
		axios.get('http://localhost:3000/loho/store/clist').then(function(res){
			that.setState({
				hot:res.data.result.hot,
				letters:res.data.result.letters,
				list:res.data.result.list,				
			})
			let arr=[]
			for(var key in that.state.list){		
				arr.push(that.state.list[key])
			}
			that.setState({
				listT:arr
			})
		})
	}
  render() {
  	let { hot,letters,list,listT} = this.state	
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
						
						<div>
							{
								Object.keys(list).map((item,i)=>(
									<div>
										<h1 key={i}>{item}</h1>
										<Values listT={listT}/>
									</div>
								))
							}
						</div>
						
   					</div>
   				</div>
   				<BackTop/>
      </div>
    );
  }
}

export default App;

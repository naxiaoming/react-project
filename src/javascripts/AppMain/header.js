import React,{Component} from 'react'
import { Link } from 'react-router'

class Header extends Component{
	render(){
		return (
			<div className="header">
				<Link to="/choiceCity" className="city">
					<span>北京</span>
					<i className="fa fa-angle-down"></i>
				</Link>
				<div className="logo"></div>
				<ul>
					<li>
						<i className="fa fa-shopping-cart"></i>
					</li>
					<li>
						<i className="fa fa-user-o"></i>
					</li>
				</ul>
			</div>
		)
	}
}

export default Header

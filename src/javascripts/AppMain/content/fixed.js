import React,{Component} from 'react'

class Fixed extends Component{
	constructor(props){
		super(props)
		this.state = {
			t:null
		}
	}
	componentWillMount(){
		let that = this
		window.onscroll=function(){
			var scrollTop = document.documentElement.scrollTop||document.body.scrollTop
			that.setState({
				t:scrollTop
			})
		}
	}
	Totop(){
		
	}
	render(){
		let { t } = this.state
		return (
			<div className={t > 200 ? 'fixed opacity' : 'fixed'}>
				<i className='fa fa-long-arrow-up' onClick={this.Totop.bind(this)}></i>
			</div>
		)
	}
}

export default Fixed

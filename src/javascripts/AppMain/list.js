import React,{Component} from 'react'
import axios from 'axios'
import { Link,hashHistory } from 'react-router'
import { ListView } from 'antd-mobile';
import genData from './content/common/genData'

let page = 1

class List extends Component{
	constructor(props){
		super(props)
		const dataSource = new ListView.DataSource({
	      	rowHasChanged: (row1, row2) => row1 !== row2,
		})
		this.state = {
			data:[],
			dataSource:dataSource,
		  	isLoading: true,//防止在加载过程中再次加载的开关
		  	hasMore:true//当没有新数据的时候此值为false，阻止获取新数据
		}
	}
	componentWillMount(props){
//		console.log(this.props.params)
		this.getDate()
	}
	getDate(){
		let that = this
		axios.get('http://localhost:3000/loho/search/?e='+this.props.params.tid+'&page='+page).then(function(res){
//			console.log(res.data.result.data)
			let good = res.data.result.data; 
			if(good === null){
				return ;
			}else if(good.length===0){
		    	that.setState({
					isLoading: false,
					hasMore:false
			    });
			    return;
		    }
		    
	    	that.rData = {...that.rData,...genData(page,good)};
	    	that.setState({
	        	dataSource: that.state.dataSource.cloneWithRows(that.rData),
	        	isLoading: false
			})
		})
	}
	onEndReached = (event) => {
	    if (this.state.isLoading && !this.state.hasMore) {
	    	return;
		}
		this.setState({ isLoading: true });
	    page++
	    this.getDate()
	}
	back(){
		hashHistory.go(-1)
	}
	render(){
		let { data } = this.state
		const content = (rowData, sectionID, rowID)=>{
			return 	<Link to={`/details/${rowData.goodsId}`} key={rowData.goodsId}>
						<p>
							<img src={`http://image.loho88.com/${rowData.img}`} alt="" />
						</p>
						<span>{rowData.title}</span>
						<div>
							<em>¥ {rowData.price}</em>
							<i>{rowData.salesNum}人已买</i>
						</div>
					</Link>
		}
		return (
			<div className="list">
				<div className="list-top">
	        		<i className="fa fa-angle-left" onClick={this.back}></i>
	        		<h1>新品上市</h1>
	        		<div className="top-right">
	        			<span className="fa fa-shopping-cart"></span>
	        			<span className="fa fa-bars"></span>
	        		</div>
	        	</div>
	        	<div className="list-nav">
	        		<ul>
	        			<li>综合</li>
	        			<li>销量</li>
	        			<li>价格</li>
	        			<li>筛选
	        				<i className="fa fa-filter"></i>
	        			</li>
	        		</ul>
	        	</div>
	        	<div className="list-nr">
	        		<div className="list-zhu">
	        			<ul>
	        				<ListView 
	        					ref={el => this.lv = el}
	        					dataSource={this.state.dataSource}
	        					renderRow={content}
	        					
	        					
	        					useBodyScroll
						        onScroll={() => { console.log('scroll'); }}
						       	scrollRenderAheadDistance={500}
						        onEndReached={this.onEndReached}
						        onEndReachedThreshold={10}
	        				/>
	        			</ul>
	        		</div>
	        		<div className="list-fen">
	        			
	        		</div>
	        	</div>
			</div>
		)
	}
}

export default List

import React,{Component} from 'react'
import {Link} from 'react-router'
class TuanGouList extends Component{
	constructor(props){
		super(props)
		this.state={
			ItemContent:[
				{id:6110,imgurl:'http://img2.loho88.com/images/activ_m/5a1b8c6c7f8b9a3b008b4567/1513549371494809876.jpg',text:'价值760元 1.600 MR-8非球面单光镜片配镜套餐代金券，仅售399元',price:399,oldprice:760,path:'/details/6110'},
				{id:6165,imgurl:'http://img2.loho88.com/images/activ_m/5a1b8c6c7f8b9a3b008b4567/1513549196344092016.jpg',text:'价值640元 1.60防蓝光非球面镜片配镜套餐团购券，仅售439元',price:439,oldprice:640,path:'/details/6165'},
				{id:6113,imgurl:'http://img2.loho88.com/images/activ_m/5a1b8c6c7f8b9a3b008b4567/1513549381685185986.jpg',text:'价值980元 1.552依视路超薄A3配镜套餐代金券，仅售589元',price:589,oldprice:980,path:'/details/6113'},
				{id:6116,imgurl:'http://img2.loho88.com/images/201711/G_1511564328589907582.jpg',text:'价值1740元 1.71绿膜单光镜片配镜套餐代金券，仅售699元',price:699,oldprice:1740,path:'/details/6116'},
				{id:6114,imgurl:'http://img2.loho88.com/images/activ_m/5a1b8c6c7f8b9a3b008b4567/1513549398939255801.jpg',text:'价值1280元 1.601依视路钻晶A++配镜套餐代金券，仅售739元',price:739,oldprice:1280,path:'/details/6114'},
				{id:6138,imgurl:'http://img2.loho88.com/images/201712/G_1512357197165993428.jpg',text:'价值1940元 1.71绿膜单光镜片配镜套餐代金券，仅售799元',price:799,oldprice:1940,path:'/details/6138'},
				{id:6115,imgurl:'http://img2.loho88.com/images/activ_m/5a1b8c6c7f8b9a3b008b4567/1513549416977657409.jpg',text:'价值1480元 1.600蔡司A60配镜套餐代金券，仅售839元',price:839,oldprice:1480,path:'/details/6115'},
				{id:5410,imgurl:'http://img2.loho88.com/images/201711/G_1511562889553671690.jpg',text:'价值2000元配镜代金券，仅售1299元',price:1299,oldprice:2000,path:'/details/5410'}
			]
		}
	}
	render(){
		let {ItemContent}=this.state
		return(
			<div className="tg-list">
				{
					ItemContent.map((item)=>(
						<div className="tg-list-item" key={item.id}>
					<Link to={item.path} className="img-box"><img src={item.imgurl} alt="loho眼镜"/></Link>
					<Link to={item.path}><h3>{item.text}</h3></Link>
					<Link to={item.path} className="tg-price">
						<span>优惠价:¥{item.price}</span>
						<span>¥{item.oldprice}</span>
					</Link>
					<button><Link to={item.path}>点击下单购买</Link></button>
				</div>
					))
				}
			</div>
		)
	}
}
export default TuanGouList
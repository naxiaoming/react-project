import React,{Component} from 'react'
import ColorBottom from "./color_bottom"
class ColorChoice extends Component{
	
	render(){
		let {data,unioned,unionedImg}=this.props
		return(
				<div>
				
					<div className="color-choice">
						<p>颜色选择</p>
						<div className="color-btn">
							{
								data.map((item,i)=>(
									<span key={i}>{item.color}</span>
							    ))
							}
						</div>
						{unionedImg==''?'':<ColorBottom unioned={unioned} unionedImg={unionedImg}/>}
					</div>		
							
							
					
				</div>
		)
	}
	
}
export default ColorChoice
import React from 'react';
class BackTop extends React.Component {
    // 渲染之后
    componentDidMount() {
        window.onscroll = function () {
            // 变量t就是滚动条滚动时，到顶部的距离
            const t = document.documentElement.scrollTop || document.body.scrollTop;
            const backtop = document.getElementsByClassName('back-top')[0];
            if (t<700) {
                backtop.style.display="none"
            }else{
            	backtop.style.display="block"
            }
        };
    }

    // 返回顶部
    scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    render() {
        return (
            <div  onClick={this.scrollToTop} className="back-top" ref="backtop">
					<i className="fa fa-long-arrow-up"></i>
			</div>
        );
    }
}

export default BackTop;
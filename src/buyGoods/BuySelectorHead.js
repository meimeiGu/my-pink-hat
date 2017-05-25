/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
class BuySelectorHead extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="goods-selector-head">
                <img src="http://localhost/my-pink-hat/images/buyGoods/233.jpg"/>
                <div className="goods-selector-head-content">
                    <div className="goods-selector-price">￥49</div>
                    <div className="goods-selector-desc">请选择 类型 期刊</div>
                </div>
                <div className="goods-selector-close" onClick={()=>{this.props.signalBuy(false);this.props.groupBuy(false)}} >
                    <i className="iconfont icon-cha"></i>
                </div>

            </div>


        )
    }
}

export default BuySelectorHead
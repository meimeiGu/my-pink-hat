/**
 * Created by wmm on 2017/5/9.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import BuySelector from '../buyGoods/BuySelector'
class GoodsBottom extends React.Component{
    constructor(props) {
        super(props);
    }

    signalBuy () {
        return <BuySelector/>
    }

    render(){
        return(
            <div className="goods-bottom">
                <Link to="/" >
                <div className="goods-home">
                    <i className="iconfont icon-shouye3"></i>
                    <span>首页</span>
                </div>
                </Link>
                <div className="goods-unlike">
                    <i className="iconfont icon-jushoucang"></i>
                    <span>收藏</span>
                </div>
                <div className="goods-chat">
                    <i className="iconfont icon-kefu"></i>
                    <span>客服</span>
                </div>
                <div className="goods-direct" onClick={this.signalBuy}>
                    <span className="goods-price">
                        <i>￥</i>
                        {this.props.sPrice}
                    </span>
                    <span>单独购买</span>
                </div>
                <div className="goods-group" onClick={this.signalBuy}>
                     <span className="goods-price">
                        <i>￥</i>
                         {this.props.gb_price}
                    </span>
                    <span>一键开团</span>
                </div>
            </div>
        )

    }

}


export default GoodsBottom
/**
 * Created by wmm on 2017/5/9.
 */
import React from 'react'
import '../../styles/container.css'
import { Link, Route,  HashRouter } from 'react-router-dom'
class GoodsBottom extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="goods-bottom">
                <HashRouter>
                <div className="goods-home">
                    <i className="iconfont icon-shouye3"></i>
                    <span>首页</span>
                </div>
                <HashRouter/>
                <div className="goods-unlike">
                    <i className="iconfont icon-jushoucang"></i>
                    <span>收藏</span>
                </div>
                <div className="goods-chat">
                    <i className="iconfont icon-kefu"></i>
                    <span>客服</span>
                </div>
                <div className="goods-direct">
                    <span className="goods-price">
                        <i>￥</i>
                        49.9
                    </span>
                    <span>单独购买</span>
                </div>
                <div className="goods-group">
                     <span className="goods-price">
                        <i>￥</i>
                        26.9
                    </span>
                    <span>一键开团</span>
                </div>
            </div>
        )

    }

}


export default GoodsBottom
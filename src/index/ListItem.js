/**
 * Created by wmm on 2017/5/12.
 */
import React from 'react'
import '../../styles/index.css'
import { Link } from 'react-router-dom'

class ListItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="list-item">
                <div className="goods-image">
                <img src="../../images/list-item/11.jpeg"/>
                </div>
                <p className="goods-name">
                    【品牌清仓】【亏本冲量】【南极人】AB版双面 可水洗夏被 夏凉被亲肤柔软夏被空调被 舒适透气可直接水洗机洗
                </p>
                <div className="detail">
                    <div className="left-side">
                        <div className="sale-price">
                            <i>￥</i>
                            18.9
                        </div>
                        <div className="group-buy">已团8901件</div>
                    </div>
                    <div className="right-side">
                        <div className="enter-button">
                            <Link to="/goods">去开团</Link>
                            <i className="iconfont icon-jiantouyou"></i>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ListItem
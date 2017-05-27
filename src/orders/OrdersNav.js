/**
 * Created by wmm on 2017/5/27.
 */
import React from 'react'


class OrdersNav extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="orders-nav">
                <div className="nav-item-orders">
                    <span>全部</span>
                </div>
                <div className="nav-item-orders">
                    <span className="nav-cur">待付款</span>
                </div>
                <div className="nav-item-orders">
                    <span>待成团</span>
                </div>
                <div className="nav-item-orders">
                    <span>待处理</span>
                </div>
                <div className="nav-item-orders">
                <span>待收货</span>
                </div>
                <div className="nav-item-orders">
                    <span>待评价</span>
                </div>
            </div>

        )
    }
}

export default OrdersNav
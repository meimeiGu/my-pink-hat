/**
 * Created by wmm on 2017/5/27.
 */
import React from 'react'
import OrdersNav from './OrdersNav'
import OrderList from './OrderList'


class OrdersContainer extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container orders-container">
                <OrdersNav/>
                <OrderList/>
            </div>

        )
    }
}

export default OrdersContainer
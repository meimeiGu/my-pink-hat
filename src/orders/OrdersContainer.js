/**
 * Created by wmm on 2017/5/27.
 */
import React from 'react'
import OrdersNav from './OrdersNav'
import OrderList from './OrderList'
import parseQueryString from '../common/parseQueryString'


class OrdersContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state={state:parseQueryString(location.href).state};
    }
    render(){
        return(
            <div className="container orders-container">
                <OrdersNav state={this.state.state}/>
                <OrderList state={this.state.state}/>
            </div>

        )
    }
}

export default OrdersContainer
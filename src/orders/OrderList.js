/**
 * Created by wmm on 2017/5/27.
 */
import React from 'react'
import OrdersItem from './OrdersItem'

class OrderList extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="list-status">
               <OrdersItem/>
                <OrdersItem/>

            </div>

        )
    }
}

export default OrderList
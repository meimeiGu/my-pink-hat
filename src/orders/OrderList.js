/**
 * Created by wmm on 2017/5/27.
 */
import React from 'react'
import OrdersItem from './OrdersItem'
import axios from 'axios';

class OrderList extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        let storage=window.localStorage;
        let userId = storage.getItem("userId");
        axios({
            method:'GET',
            url:'http://xyhelp.cn/my-pink-hat/admin/index.php/Index/myorderdata?userId='+userId,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            console.log(response)
            /*this.setState({allData: response.data[0]});*/
        });
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
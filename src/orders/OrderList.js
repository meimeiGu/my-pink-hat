/**
 * Created by wmm on 2017/5/27.
 */
import React from 'react'
import OrdersItem from './OrdersItem'
import axios from 'axios';


class OrderList extends React.Component{
    constructor(props) {
        super(props);
        this.state={allData:[]}
    }

    componentDidMount(){
        let storage=window.localStorage;
        let userId = storage.getItem("userId");
        axios({
            method:'GET',
            url:'http://qhnaminal.com/my-pink-hat/admin/index.php/Index/myorderdata?userId='+userId,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            console.log(response.data)
            this.setState({allData: response.data});
        });
    }
    render(){
        return(
            <div className="list-status">
                {
                    this.state.allData.map((item) => {
                        if(this.props.state === "all"){
                            return (<OrdersItem data={item} key={item.gbsingleorder_id.toString() }/>)
                        }else if(item.gbsingleorder_state === this.props.state){
                        return (<OrdersItem data={item} key={item.gbsingleorder_id.toString() }/>)}
                    })
                }


            </div>

        )
    }
}

export default OrderList
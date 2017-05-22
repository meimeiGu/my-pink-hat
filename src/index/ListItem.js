/**
 * Created by wmm on 2017/5/12.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class ListItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    }


    componentDidMount () {
        axios({
         method:'GET',
         params:{id:this.props.index},
         url:'http://127.0.0.1/my-pink-hat/admin/index.php/Index/data_details',
         headers: {
         'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Credentials': 'true',
         'Content-Type': 'application/x-www-form-urlencoded',

         }

         }).then((response) => {
         console.log(response.data[0]);
            this.setState({data:response.data[0]})
         });

    }

    render(){
        return(
            <div className="list-item">
                <div className="goods-image">
                <img src={"http://oq57snhhw.bkt.clouddn.com/"+this.state.data.gbgoods_pic}/>
                </div>
                <p className="goods-name">
                    {this.state.data.gbgoods_name}
                </p>
                <div className="detail">
                    <div className="left-side">
                        <div className="sale-price">
                            <i>￥</i>
                            {this.state.data.gbgoods_gbprice}
                        </div>
                        <div className="group-buy">已团{this.state.data.gbgoods_gbnum}件</div>
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
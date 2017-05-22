/**
 * Created by wmm on 2017/5/8.
 */
import React from 'react'
import Price from './Price'
import GoodsName from './GoodsName'
import GoodsDetail from './GoodsDetail'
import axios from 'axios';
class GoodsInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state={detailData:[]}
    }



   /* componentDidMount() {
        axios({
            method:'GET',
            url:'http://127.0.0.1/my-pink-hat/admin/index.php/Index/data_details?id='+this.props.goodsId,
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
            }

        }).then((response) => {
            this.setState({detailData: response.data[0]});
        });


    }*/

    render(){
        return(
            <section id="g-base">
                {console.log(this.props)}
                <Price price={this.props.goodsInfo.gbgoods_originprice} gb_price={this.props.goodsInfo.gbgoods_gbprice} gb_num={this.props.goodsInfo.gbgoods_gbnum} num={this.props.goodsInfo.gbgoods_num}/>
                <GoodsName name={this.props.goodsInfo.gbgoods_name}/>
                <GoodsDetail detail={this.props.goodsInfo.gbgoods_details}/>
            </section>
        )

    }


}
export default GoodsInfo
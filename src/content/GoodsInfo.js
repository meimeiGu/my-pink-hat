/**
 * Created by wmm on 2017/5/8.
 */
import React from 'react'
import Price from './Price'
import GoodsName from './GoodsName'
import GoodsDetail from './GoodsDetail'
class GoodsInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state={detailData:[]}
    }

    render(){
        return(
            <section id="g-base">
                {console.log(this.props)}
                <Price price={this.props.goodsInfo.gbgoods_originprice} gb_price={this.props.goodsInfo.gbgoods_gbprice} gb_num={this.props.goodsInfo.gbgoods_gbnum} num={this.props.goodsInfo.gbgoods_pnum}/>
                <GoodsName name={this.props.goodsInfo.gbgoods_name}/>
                <GoodsDetail detail={this.props.goodsInfo.gbgoods_details}/>
            </section>
        )

    }


}
export default GoodsInfo
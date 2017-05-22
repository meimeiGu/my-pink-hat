/**
 * Created by wmm on 2017/5/8.
 */
import React from 'react'
class Price extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="goods-price-group">
                <span className="goods-now-price">
                    <i>￥</i>
                    {this.props.gb_price}
                </span>
                <span className="goods-market-price">
                    <del>￥{this.props.price}</del>
                </span>
                <span className="goods-sales">已团{this.props.gb_num}件·{this.props.num}人团</span>
            </div>
        )

    }


}
export default Price
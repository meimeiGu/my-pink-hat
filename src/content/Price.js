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
                    35.8
                </span>
                <span className="goods-market-price">
                    <del>￥268</del>
                </span>
                <span className="goods-sales">已团26458件·2人团</span>
            </div>
        )

    }


}
export default Price
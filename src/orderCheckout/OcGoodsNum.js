/**
 * Created by wmm on 2017/5/23.
 */
import React from 'react'
class OcGoodsNum extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className="oc-goods-number">
                <span>购买数量</span>
                <div className="oc-goods-reduce oc-reduce-disable"></div>
                <input className="oc-buy-number" type="number"/>
                    <div className="oc-goods-increase"></div>
            </div>

        )
        }
}

export default OcGoodsNum


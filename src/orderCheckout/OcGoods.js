/**
 * Created by wmm on 2017/5/24.
 */
import React from 'react'
import OcGoodsNum from './OcGoodsNum'
class OcGoods extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <section className="oc-goods">
                <div className="oc-goods-title">
                    <span>商品</span>
                </div>
            <div className="oc-goods-info">
                <img src="http://localhost/my-pink-hat/images/111.jpg"/>
                <div className="oc-goods-detail">
                    <span className="oc-goods-name">【爱逛街525宠爱节】【五色七码S-4XL棉麻小西装】夏新款大码七分袖修身一粒..</span>
                    <div className="oc-goods-spec">
                        <div>颜色:&nbsp;&nbsp;黑色（七分袖）</div>
                        <div>尺码:&nbsp;&nbsp;M</div>
                            <span className="oc-goods-price">
                             <i>￥</i>49<i>/件</i>
                            </span>
                    </div>
                </div>
            </div>
                <OcGoodsNum/>
            </section>
        )
    }
}

export default OcGoods

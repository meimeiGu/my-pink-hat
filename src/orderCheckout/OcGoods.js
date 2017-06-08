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
                <img src={"http://oq57snhhw.bkt.clouddn.com/"+this.props.data.gbgoods_pic}/>
                <div className="oc-goods-detail">
                    <span className="oc-goods-name">{this.props.data.gbgoods_name}</span>
                    <div className="oc-goods-spec">
                        <div>类型:&nbsp;&nbsp;{this.props.data.gbsku_name}</div>
                        {/*<div>尺码:&nbsp;&nbsp;M</div>*/}
                            <span className="oc-goods-price">
                             <i>￥</i>2200<i>/篇</i>
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

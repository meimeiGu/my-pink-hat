/**
 * Created by wmm on 2017/5/24.
 */
import React from 'react'
class OcPayment extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <section className="oc-payment" >

              <div className="oc-payment-item oc-payment-selected">

                <span className="oc-payment-method">
                <i className="iconfont icon-weixinzhifu"></i>
                    微信支付</span>
                <span className="oc-payment-recommend">推荐

                </span>
                  <i className="iconfont icon-gou1"></i>

            </div>

            </section>
        )
    }
}

export default OcPayment


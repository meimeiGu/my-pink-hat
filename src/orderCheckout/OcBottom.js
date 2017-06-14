/**
 * Created by wmm on 2017/5/24.
 */
import React from 'react'
class OcBottom extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <section className="oc-bottom-bar">
                <div className="oc-pay-btn" onClick={()=>{this.props.userPay()}}>立即支付</div>
                <div className="oc-pay-final">
                    <span>实付款:</span>
                    <span className="oc-final-amount"><i>￥</i>{this.props.num*this.props.price}</span>
                </div>

            </section>

        )
    }
}

export default OcBottom



